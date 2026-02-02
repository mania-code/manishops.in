function Projects() {
  const caseStudies = [
    {
      client: 'E-Commerce Platform',
      industry: 'Retail',
      challenge: 'Scaling infrastructure to handle 10x traffic during peak seasons with minimal downtime.',
      solution: 'Implemented Kubernetes-based auto-scaling with custom metrics, reducing infrastructure costs by 40% while improving reliability.',
      results: ['99.99% uptime', '40% cost reduction', '5x faster deployments'],
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Prometheus']
    },
    {
      client: 'FinTech Startup',
      industry: 'Financial Services',
      challenge: 'Building a secure, compliant CI/CD pipeline from scratch for rapid feature delivery.',
      solution: 'Designed multi-stage CI/CD pipeline with automated security scanning, compliance checks, and zero-downtime deployments.',
      results: ['10x deployment frequency', 'Zero security incidents', 'SOC 2 compliance achieved'],
      technologies: ['GitLab CI', 'Docker', 'Vault', 'SonarQube']
    },
    {
      client: 'SaaS Company',
      industry: 'Software',
      challenge: 'Lack of visibility into application performance and infrastructure health causing frequent outages.',
      solution: 'Implemented comprehensive observability stack with custom dashboards, alerts, and automated incident response.',
      results: ['90% faster MTTR', 'Zero unplanned outages', 'Proactive issue detection'],
      technologies: ['Grafana', 'Prometheus', 'ELK Stack', 'PagerDuty']
    },
    {
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Legacy infrastructure limiting innovation and causing high operational overhead.',
      solution: 'Migrated on-premise infrastructure to cloud with Infrastructure as Code, enabling rapid scaling and disaster recovery.',
      results: ['70% reduced ops overhead', 'HIPAA compliant', '99.9% SLA achieved'],
      technologies: ['Azure', 'Terraform', 'Ansible', 'GitHub Actions']
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">Success Stories</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Real-world results from our DevOps solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">{study.client}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
                  {study.industry}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Challenge</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                {study.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium border border-secondary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
