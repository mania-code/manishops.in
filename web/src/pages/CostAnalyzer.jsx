import { Link } from 'react-router-dom';

function CostAnalyzer() {
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
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Infrastructure Cost Analyzer</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Multi-Cloud Cost Optimization Platform</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-8">
          <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-sm font-semibold">
            Coming Soon
          </span>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Overview</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Infrastructure Cost Analyzer is a comprehensive multi-cloud cost management platform that provides real-time visibility,
            actionable insights, and automated recommendations to optimize your cloud spending across AWS, Azure, and Google Cloud Platform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Cloud Providers</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">Real-time</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Cost Tracking</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">30%</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Avg. Savings</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '☁️',
                title: 'Multi-Cloud Support',
                description: 'Unified dashboard for AWS, Azure, and GCP. Track costs across all providers in one place with normalized metrics.'
              },
              {
                icon: '💡',
                title: 'Smart Recommendations',
                description: 'AI-powered recommendations for right-sizing, reserved instances, spot instances, and resource optimization.'
              },
              {
                icon: '📈',
                title: 'Trend Analysis',
                description: 'Historical cost trends, forecasting, and budget alerts to help you stay within budget and plan ahead.'
              },
              {
                icon: '🏷️',
                title: 'Tag Management',
                description: 'Cost allocation by tags, departments, projects, or custom dimensions for accurate chargeback and showback.'
              },
              {
                icon: '⚠️',
                title: 'Anomaly Detection',
                description: 'Automatic detection of cost spikes and anomalies with intelligent alerts sent to Slack, email, or PagerDuty.'
              },
              {
                icon: '📊',
                title: 'Custom Reports',
                description: 'Create custom reports and dashboards with drill-down capabilities for detailed cost analysis.'
              }
            ].map((feature, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
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
            {['Python', 'React', 'PostgreSQL', 'AWS Cost Explorer API', 'Azure Cost Management API', 'GCP Billing API', 'FastAPI', 'Celery'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Early Access */}
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Get Early Access</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Infrastructure Cost Analyzer is currently in development. Join our early access program to be among the first to optimize your cloud costs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:hello@manishops.in?subject=Cost Analyzer Early Access"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Join Waitlist
            </a>
            <a
              href="mailto:hello@manishops.in?subject=Cost Analyzer Information"
              className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostAnalyzer;
