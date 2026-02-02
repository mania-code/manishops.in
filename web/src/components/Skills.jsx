import { Link } from 'react-router-dom';

function Skills() {
  const tools = [
    {
      name: 'K8s Auto-Scaler',
      description: 'Intelligent Kubernetes auto-scaling tool with custom metrics support and cost optimization algorithms.',
      status: 'Production',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      tech: ['Go', 'Kubernetes', 'Prometheus'],
      link: '/k8s-auto-scaler'
    },
    {
      name: 'CI/CD Pipeline Generator',
      description: 'Template-based CI/CD pipeline generator supporting multiple platforms (Jenkins, GitLab, GitHub Actions).',
      status: 'Beta',
      statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      tech: ['Python', 'YAML', 'Jinja2'],
      link: '/pipeline-generator'
    },
    {
      name: 'Infrastructure Cost Analyzer',
      description: 'Multi-cloud cost analysis and optimization tool with recommendations for reducing cloud spend.',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      tech: ['Python', 'React', 'AWS/Azure/GCP APIs'],
      link: '/cost-analyzer'
    },
    {
      name: 'Log Aggregator Pro',
      description: 'Lightweight log aggregation and analysis tool with built-in alerting and anomaly detection.',
      status: 'Development',
      statusColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      tech: ['Go', 'ClickHouse', 'React'],
      link: '/log-aggregator'
    }
  ];

  return (
    <section id="tools" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">DevOps Tools</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Innovative tools designed to simplify and accelerate your DevOps workflows
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const CardContent = () => (
              <div className={`glass-card p-8 rounded-2xl group-hover:border-primary/50 transition-all duration-300 h-full ${!tool.link ? 'group' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tool.statusColor}`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tool.tech.map((t, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                {tool.link && (
                  <div className="mt-6 flex items-center text-primary font-bold text-sm">
                    Launch Tool
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            );

            return tool.link ? (
              <Link to={tool.link} key={index} className="block group h-full">
                <CardContent />
              </Link>
            ) : (
              <div key={index} className="h-full">
                <CardContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
