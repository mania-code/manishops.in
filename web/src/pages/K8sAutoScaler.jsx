import { Link } from 'react-router-dom';

function K8sAutoScaler() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-10 flex items-center gap-4">
          <Link to="/" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">K8s Auto-Scaler</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Intelligent Kubernetes Auto-Scaling Solution</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-8">
          <span className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-semibold">
            Production Ready
          </span>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Overview</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            K8s Auto-Scaler is an intelligent Kubernetes auto-scaling solution that uses custom metrics and machine learning algorithms
            to optimize your cluster's resource utilization. Save up to 40% on infrastructure costs while maintaining performance and reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Cost Reduction</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">&lt;10s</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Scale Response Time</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Custom Metrics Support',
                description: 'Scale based on business metrics, not just CPU and memory. Monitor custom application metrics for intelligent scaling decisions.'
              },
              {
                icon: '🤖',
                title: 'ML-Powered Predictions',
                description: 'Machine learning algorithms predict traffic patterns and scale proactively before demand spikes occur.'
              },
              {
                icon: '💰',
                title: 'Cost Optimization',
                description: 'Automatically right-size your pods and optimize node utilization to reduce infrastructure costs by up to 40%.'
              },
              {
                icon: '⚡',
                title: 'Real-time Scaling',
                description: 'React to traffic changes in under 10 seconds with intelligent buffer management and predictive scaling.'
              },
              {
                icon: '📊',
                title: 'Advanced Analytics',
                description: 'Detailed dashboards and reports showing scaling decisions, cost savings, and performance metrics.'
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                description: 'Role-based access control, audit logs, and compliance with SOC 2, HIPAA, and GDPR standards.'
              }
            ].map((feature, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['Go', 'Kubernetes', 'Prometheus', 'Grafana', 'TimescaleDB', 'Redis'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready to Optimize Your Kubernetes Costs?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Get started with a free trial or schedule a demo to see K8s Auto-Scaler in action.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:hello@manishops.in?subject=K8s Auto-Scaler Demo Request"
              className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Request Demo
            </a>
            <a
              href="mailto:hello@manishops.in?subject=K8s Auto-Scaler Pricing"
              className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Get Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default K8sAutoScaler;
