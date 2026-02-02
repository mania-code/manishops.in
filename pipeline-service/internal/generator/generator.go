package generator

import (
	"fmt"
	"pipeline-service/internal/types"
	"strings"
)

func GeneratePipeline(config types.PipelineConfig) string {
	var sb strings.Builder

	if config.Platform == "github" {
		generateGitHubActions(&sb, config)
	} else if config.Platform == "gitlab" {
		generateGitLabCI(&sb, config)
	} else {
		return "# Platform not supported yet"
	}

	return sb.String()
}

func generateGitHubActions(sb *strings.Builder, config types.PipelineConfig) {
	fmt.Fprintf(sb, `name: CI/CD Pipeline

on:
  push:
    branches: [ "%s" ]
  pull_request:
    branches: [ "%s" ]
`, config.Branch, config.Branch)

	if config.CronSchedule != "" {
		fmt.Fprintf(sb, "  schedule:\n    - cron: '%s'\n", config.CronSchedule)
	}

	sb.WriteString(`
jobs:
  build:
    runs-on: ubuntu-latest
`)

	if len(config.EnvVars) > 0 {
		sb.WriteString("    env:\n")
		for k, v := range config.EnvVars {
			fmt.Fprintf(sb, "      %s: %s\n", k, v)
		}
	}

	sb.WriteString(`
    steps:
    - uses: actions/checkout@v3
`)

	if config.Language == "node" {
		fmt.Fprintf(sb, `
    - name: Use Node.js %s
      uses: actions/setup-node@v3
      with:
        node-version: %s
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
`, config.NodeVersion, config.NodeVersion)

		if config.RunLint {
			sb.WriteString(`
    - name: Run Lint
      run: npm run lint
`)
		}
		if config.RunTests {
			sb.WriteString(`
    - name: Run Tests
      run: npm test
`)
		}
		if config.DockerBuild {
			sb.WriteString(`
    - name: Build Docker Image
      run: docker build . -t my-app:${{ github.sha }}
`)
		}
	} else if config.Language == "python" {
		fmt.Fprintf(sb, `
    - name: Set up Python %s
      uses: actions/setup-python@v4
      with:
        python-version: %s
        
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
`, config.PythonVersion, config.PythonVersion)

		if config.RunLint {
			sb.WriteString(`
    - name: Lint with flake8
      run: |
        pip install flake8
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
`)
		}
		if config.RunTests {
			sb.WriteString(`
    - name: Test with pytest
      run: |
        pip install pytest
        pytest
`)
		}
	} else if config.Language == "go" {
		fmt.Fprintf(sb, `
    - name: Set up Go %s
      uses: actions/setup-go@v4
      with:
        go-version: %s
        
    - name: Build
      run: go build -v ./...
`, config.GoVersion, config.GoVersion)

		if config.RunTests {
			sb.WriteString(`
    - name: Test
      run: go test -v ./...
`)
		}
	}
}

func generateGitLabCI(sb *strings.Builder, config types.PipelineConfig) {
	if config.Language == "node" {
		fmt.Fprintf(sb, `image: node:%s

cache:
  paths:
    - node_modules/

stages:
  - build
  - test
  - deploy

install_dependencies:
  stage: build
  script:
    - npm install
  artifacts:
    paths:
      - node_modules/
`, config.NodeVersion)

		if config.RunLint {
			sb.WriteString(`
lint_code:
  stage: test
  script:
    - npm run lint
`)
		}
		if config.RunTests {
			sb.WriteString(`
run_unit_tests:
  stage: test
  script:
    - npm test
`)
		}
	} else {
		sb.WriteString("# GitLab CI generation for this language is implemented yet in this demo tool\n")
	}
}
