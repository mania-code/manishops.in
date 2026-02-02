import { useState } from 'react';
import { Link } from 'react-router-dom';

function PipelineGenerator() {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [config, setConfig] = useState({
        repoUrl: '',
        platform: 'github',
        branch: 'main',
        cronSchedule: '',
        envVars: [], // Array of {key, value} for UI
    });

    const [generatedCode, setGeneratedCode] = useState('');
    const [detectedInfo, setDetectedInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const generatePipeline = async () => {
        if (!config.repoUrl) {
            setError('Please enter a repository URL');
            return;
        }

        // Validate Environment Variables
        const incompleteEnv = config.envVars && config.envVars.find(v => v.key.trim() && !v.value.trim());
        if (incompleteEnv) {
            setError(`Environment variable '${incompleteEnv.key}' must have a value.`);
            return;
        }

        setLoading(true);
        setError(null);
        setGeneratedCode('');
        setDetectedInfo(null);

        try {
            // Convert envVars array to map
            const envVarsMap = {};
            if (config.envVars) {
                config.envVars.forEach(v => {
                    if (v.key) envVarsMap[v.key] = v.value;
                });
            }

            const payload = {
                ...config,
                envVars: envVarsMap
            };

            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to generate pipeline. Ensure the repo is public.');
            }

            const data = await response.json();
            setGeneratedCode(data.yaml);
            setDetectedInfo({
                language: data.detectedLanguage,
                version: data.detectedVersion,
                hasDocker: data.hasDocker,
                hasTests: data.hasTests,
                hasLint: data.hasLint
            });
        } catch (err) {
            console.error(err);
            setError(err.message || 'Failed to generate pipeline. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 flex items-center gap-4">
                    <Link to="/" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                        <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">CI/CD Pipeline Generator</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Configuration Form */}
                    <div className="glass-card p-8 rounded-2xl">
                        <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Configuration
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Repository URL</label>
                                <input
                                    type="text"
                                    value={config.repoUrl}
                                    onChange={(e) => setConfig({ ...config, repoUrl: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                                    placeholder="https://github.com/username/repo"
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Public repository URL to analyze and generate pipeline for.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Platform</label>
                                <select
                                    className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                                    value={config.platform}
                                    onChange={(e) => setConfig({ ...config, platform: e.target.value })}
                                >
                                    <option value="github">GitHub Actions</option>
                                    <option value="gitlab">GitLab CI</option>
                                    <option value="jenkins" disabled>Jenkins (Coming Soon)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Branch</label>
                                <input
                                    type="text"
                                    value={config.branch}
                                    onChange={(e) => setConfig({ ...config, branch: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                                    placeholder="main"
                                />
                            </div>

                            {/* Advanced Options Toggle */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setShowAdvanced(!showAdvanced)}
                                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-emerald-600 transition-colors"
                                >
                                    <svg className={`w-4 h-4 transform transition-transform ${showAdvanced ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Advanced Options
                                </button>
                            </div>

                            {/* Advanced Options Content */}
                            {showAdvanced && (
                                <div className="space-y-6 pt-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                    {/* Cron Schedule */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Cron Schedule (UTC)
                                            <span className="ml-2 text-xs font-normal text-slate-500">(e.g., "0 0 * * *")</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={config.cronSchedule}
                                            onChange={(e) => setConfig({ ...config, cronSchedule: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white font-mono text-sm"
                                            placeholder="*/15 * * * *"
                                        />
                                    </div>

                                    {/* Env Vars */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Environment Variables
                                        </label>
                                        <div className="space-y-2">
                                            {config.envVars.map((env, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={env.key}
                                                        onChange={(e) => {
                                                            const newEnv = [...config.envVars];
                                                            newEnv[index].key = e.target.value;
                                                            setConfig({ ...config, envVars: newEnv });
                                                        }}
                                                        className="flex-1 px-3 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white text-sm"
                                                        placeholder="KEY"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={env.value}
                                                        onChange={(e) => {
                                                            const newEnv = [...config.envVars];
                                                            newEnv[index].value = e.target.value;
                                                            setConfig({ ...config, envVars: newEnv });
                                                        }}
                                                        className="flex-1 px-3 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white text-sm"
                                                        placeholder="VALUE"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newEnv = config.envVars.filter((_, i) => i !== index);
                                                            setConfig({ ...config, envVars: newEnv });
                                                        }}
                                                        className="p-2 text-red-500 hover:text-red-600"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => setConfig({ ...config, envVars: [...config.envVars, { key: '', value: '' }] })}
                                                className="text-sm text-primary hover:text-emerald-600 font-semibold flex items-center gap-1"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                Add Variable
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-blue-700 dark:text-blue-300">
                                    Pipeline steps like <strong>Tests</strong>, <strong>Linting</strong>, and <strong>Docker Build</strong> will be automatically detected and configured based on your repository contents.
                                </p>
                            </div>

                            <button
                                onClick={generatePipeline}
                                disabled={loading}
                                className={`w-full bg-primary hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''} `}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                        Generate Pipeline
                                    </>
                                )}
                            </button>
                            {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
                        </div>
                    </div>



                    {/* Output Preview */}
                    <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Generated YAML
                            </h2>
                            {generatedCode && (
                                <button
                                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                                    className="text-xs font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    Copy Code
                                </button>
                            )}
                        </div>

                        {detectedInfo && (
                            <div className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-sm text-slate-900 dark:text-white font-semibold">
                                        Detected: <span className="capitalize">{detectedInfo.language}</span> {detectedInfo.version && `(${detectedInfo.version})`}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pl-9">
                                    {detectedInfo.hasDocker && (
                                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                            Docker
                                        </span>
                                    )}
                                    {detectedInfo.hasTests && (
                                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                            Tests
                                        </span>
                                    )}
                                    {detectedInfo.hasLint && (
                                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                                            Linting
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 overflow-auto border border-slate-200 dark:border-slate-700 font-mono text-sm relative group">
                            {generatedCode ? (
                                <pre className="text-emerald-700 dark:text-emerald-400">
                                    <code>{generatedCode}</code>
                                </pre>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-500">
                                    <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                    </svg>
                                    <p>Configure settings and click generate</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PipelineGenerator;
