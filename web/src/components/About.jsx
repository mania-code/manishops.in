function About() {
  const services = [
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Design, build, and manage scalable cloud infrastructure on AWS, Azure, and GCP with best practices and cost optimization.'
    },
    {
      icon: '🔄',
      title: 'CI/CD Pipeline Setup',
      description: 'Implement robust continuous integration and deployment pipelines to accelerate your software delivery lifecycle.'
    },
    {
      icon: '🐳',
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications using Docker and Kubernetes for maximum scalability and reliability.'
    },
    {
      icon: '🏗️',
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning using Terraform, Ansible, and other IaC tools for consistent, repeatable deployments.'
    },
    {
      icon: '📊',
      title: 'Monitoring & Observability',
      description: 'Set up comprehensive monitoring, logging, and alerting systems to ensure optimal performance and quick issue resolution.'
    },
    {
      icon: '🔒',
      title: 'DevSecOps Integration',
      description: 'Integrate security practices into your DevOps workflow with automated security scanning and compliance checks.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">Our Services</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive DevOps solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-display text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
