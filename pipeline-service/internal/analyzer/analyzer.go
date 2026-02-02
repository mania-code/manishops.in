package analyzer

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/go-git/go-git/v5"
)

type AnalysisResult struct {
	Language        string
	DetectedVersion string
	HasTests        bool
	HasLint         bool
	HasDockerfile   bool
}

// CloneAndAnalyze clones a repo to a temp dir and detects its language
func CloneAndAnalyze(repoURL string) (*AnalysisResult, error) {
	// Create temp dir
	tempDir, err := os.MkdirTemp("", "pipeline-gen-*")
	if err != nil {
		return nil, err
	}
	defer os.RemoveAll(tempDir) // clean up

	// Clone
	_, err = git.PlainClone(tempDir, false, &git.CloneOptions{
		URL:      repoURL,
		Progress: os.Stdout,
		Depth:    1, // Limit clone depth for speed
	})
	if err != nil {
		return nil, err
	}

	// Analyze
	return detectLanguage(tempDir)
}

func detectLanguage(path string) (*AnalysisResult, error) {
	result := &AnalysisResult{
		Language:      "unknown",
		HasDockerfile: exists(filepath.Join(path, "Dockerfile")),
	}

	// Simple heuristic: check for existence of key files
	if exists(filepath.Join(path, "package.json")) {
		result.Language = "node"
		result.DetectedVersion = "18" // TODO: read engines
		result.HasTests = hasNodeTests(path)
		result.HasLint = hasNodeLint(path)
	} else if exists(filepath.Join(path, "go.mod")) {
		result.Language = "go"
		result.DetectedVersion = "1.21"
		result.HasTests = hasGoTests(path)
		result.HasLint = true // Assume go vet/lint is always desired
	} else if exists(filepath.Join(path, "requirements.txt")) || exists(filepath.Join(path, "Pipfile")) {
		result.Language = "python"
		result.DetectedVersion = "3.9"
		result.HasTests = exists(filepath.Join(path, "tests")) || exists(filepath.Join(path, "test.py"))
		result.HasLint = exists(filepath.Join(path, ".pylintrc")) || exists(filepath.Join(path, ".flake8"))
	}

	return result, nil
}

func hasNodeTests(path string) bool {
	// A real implementation would read package.json scripts
	// For now, simpler heuristic
	return exists(filepath.Join(path, "test")) || exists(filepath.Join(path, "__tests__"))
}

func hasNodeLint(path string) bool {
	return exists(filepath.Join(path, ".eslintrc.js")) || exists(filepath.Join(path, ".eslintrc.json")) || exists(filepath.Join(path, ".eslintrc"))
}

func hasGoTests(path string) bool {
	found := false
	filepath.Walk(path, func(p string, info os.FileInfo, err error) error {
		if strings.HasSuffix(p, "_test.go") {
			found = true
			return filepath.SkipDir // Stop searching once found
		}
		return nil
	})
	return found
}

func exists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}
