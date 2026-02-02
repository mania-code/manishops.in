package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"pipeline-service/internal/analyzer"
	"pipeline-service/internal/generator"
	"pipeline-service/internal/types"
)

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func generateHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req types.PipelineRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Defaults
	if req.Branch == "" {
		req.Branch = "main"
	}

	// Analyze Repo
	analysis, err := analyzer.CloneAndAnalyze(req.RepoURL)
	if err != nil {
		http.Error(w, fmt.Sprintf("Failed to analyze repo: %v", err), http.StatusInternalServerError)
		return
	}

	// Map Analysis to Config
	config := types.PipelineConfig{
		Platform:     req.Platform,
		Language:     analysis.Language,
		Branch:       req.Branch,
		RunTests:     analysis.HasTests,
		RunLint:      analysis.HasLint,
		DockerBuild:  analysis.HasDockerfile,
		CronSchedule: req.CronSchedule,
		EnvVars:      req.EnvVars,
	}

	// Set version based on language
	switch analysis.Language {
	case "node":
		config.NodeVersion = analysis.DetectedVersion
	case "python":
		config.PythonVersion = analysis.DetectedVersion
	case "go":
		config.GoVersion = analysis.DetectedVersion
	}

	yamlContent := generator.GeneratePipeline(config)

	response := types.GenerateResponse{
		YAML:             yamlContent,
		DetectedLanguage: analysis.Language,
		DetectedVersion:  analysis.DetectedVersion,
		HasTests:         analysis.HasTests,
		HasLint:          analysis.HasLint,
		HasDocker:        analysis.HasDockerfile,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/api/generate", enableCORS(generateHandler))

	port := ":8080"
	fmt.Printf("Pipeline Service listening on port %s\n", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}
}
