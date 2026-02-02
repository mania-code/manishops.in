package types

type PipelineRequest struct {
	RepoURL  string `json:"repoUrl"`
	Platform string `json:"platform"`
	// Optional overrides
	Branch       string            `json:"branch,omitempty"`
	CronSchedule string            `json:"cronSchedule,omitempty"`
	EnvVars      map[string]string `json:"envVars,omitempty"`
}

type PipelineConfig struct {
	Platform      string
	Language      string
	Branch        string
	NodeVersion   string
	PythonVersion string
	GoVersion     string
	RunTests      bool
	RunLint       bool
	DockerBuild   bool
	CronSchedule  string
	EnvVars       map[string]string
}

type GenerateResponse struct {
	YAML             string `json:"yaml"`
	DetectedLanguage string `json:"detectedLanguage"`
	DetectedVersion  string `json:"detectedVersion"`
	HasTests         bool   `json:"hasTests"`
	HasLint          bool   `json:"hasLint"`
	HasDocker        bool   `json:"hasDocker"`
}
