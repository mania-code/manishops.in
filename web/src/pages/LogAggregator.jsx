import { Link } from 'react-router-dom';

function LogAggregator() {
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
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Log Aggregator Pro</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Enterprise Log Management & Analytics</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-8">
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-sm font-semibold">
            In Development
          </span>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Overview</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Log Aggregator Pro is a lightweight yet powerful log management solution that collects, processes, and analyzes logs from
            all your applications and infrastructure. Built for performance and scale, it handles millions of events per second with
            built-in alerting and anomaly detection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Events/Second</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">&lt;100ms</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Query Latency</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm">Lower Cost vs ELK</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '⚡',
                title: 'High Performance',
                description: 'Built with Go and ClickHouse for blazing-fast ingestion and query performance. Handle millions of logs per second.'
              },
              {
                icon: '🔍',
                title: 'Full-Text Search',
                description: 'Lightning-fast full-text search with regex support, field filtering, and advanced query capabilities.'
              },
              {
                icon: '🤖',
                title: 'Anomaly Detection',
                description: 'ML-powered anomaly detection automatically identifies unusual patterns and potential issues in your logs.'
              },
              {
                icon: '🔔',
                title: 'Smart Alerting',
                description: 'Configure intelligent alerts based on log patterns, thresholds, or anomalies. Integrate with Slack, PagerDuty, or webhooks.'
              },
              {
                icon: '📊',
                title: 'Visual Dashboards',
                description: 'Beautiful, customizable dashboards for log analytics, metrics, and trends. Built with React and Recharts.'
              },
              {
                icon: '🔐',
                title: 'Secure & Compliant',
                description: 'Encryption at rest and in transit, role-based access control, and audit logging for compliance requirements.'
              }
            ].map((feature, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Use Cases</h2>
          <div className="space-y-4">
            {[
              'Application debugging and troubleshooting',
              'Security monitoring and threat detection',
              'Compliance auditing and reporting',
              'Performance monitoring and optimization',
              'Business intelligence and analytics'
            ].map((useCase, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {useCase}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['Go', 'ClickHouse', 'React', 'Kafka', 'Redis', 'Prometheus', 'Grafana'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Stay Updated</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Log Aggregator Pro is currently in active development. Sign up to get notified when we launch beta access.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:hello@manishops.in?subject=Log Aggregator Pro Beta Access"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Join Beta Program
            </a>
            <a
              href="mailto:hello@manishops.in?subject=Log Aggregator Pro Information"
              className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogAggregator;
