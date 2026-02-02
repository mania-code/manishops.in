function Contact() {
  const testimonials = [
    {
      rating: 5,
      text: "The DevOps implementation provided by ManishOps reduced our deployment time by 80%. Their attention to security is unparalleled.",
      author: "David Chen",
      role: "CTO, CloudScale AI",
      avatar: "https://ui-avatars.com/api/?name=David+Chen&background=10b981&color=fff"
    },
    {
      rating: 5,
      text: "Highly professional team. They migrated our legacy infrastructure to AWS seamlessly with zero downtime. Truly experts in IaC.",
      author: "Sarah Jenkins",
      role: "Head of Ops, FinStream",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=10b981&color=fff"
    },
    {
      rating: 5,
      text: "The CI/CD pipeline generator they built for us saved hundreds of developer hours. The ROI was immediate and significant.",
      author: "Marcus Thorne",
      role: "VP Engineering, LogiTech",
      avatar: "https://ui-avatars.com/api/?name=Marcus+Thorne&background=10b981&color=fff"
    }
  ];

  return (
    <section id="contact" className="relative z-10 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight">
          Let's <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Work Together</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-16 leading-relaxed">
          Ready to transform your infrastructure and accelerate your DevOps journey? Choose how you'd like to get started with our expert team.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-10 rounded-2xl text-left group hover:border-primary/50 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 dark:text-white">Schedule a Consultation</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Discuss your infrastructure challenges, security requirements, and scalability goals with our senior engineers.
              </p>
              <ul className="space-y-3 mb-10 text-sm">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-minute expert session
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Initial architecture review
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No commitment required
                </li>
              </ul>
            </div>
            <a href="mailto:hello@manishops.in?subject=Consultation Request" className="bg-primary hover:bg-emerald-600 text-white w-full py-4 rounded-xl font-bold text-lg glow-hover transition-all flex items-center justify-center gap-2">
              Book a Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="glass-card p-10 rounded-2xl text-left group hover:border-primary/50 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 dark:text-white">Request a Custom Quote</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Have a specific project in mind? Share your requirements and receive a detailed proposal within 24 hours.
              </p>
              <ul className="space-y-3 mb-10 text-sm">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Detailed cost breakdown
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Timeline estimates
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Technology stack suggestions
                </li>
              </ul>
            </div>
            <a href="mailto:hello@manishops.in?subject=Quote Request" className="bg-primary hover:bg-emerald-600 text-white w-full py-4 rounded-xl font-bold text-lg glow-hover transition-all flex items-center justify-center gap-2">
              Get Proposal
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-32">
          <a className="glass-card px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/10 dark:hover:bg-white/5 transition-all" href="mailto:hello@manishops.in">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-slate-700 dark:text-slate-300">hello@manishops.in</span>
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">TESTIMONIALS</span>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Trusted by Industry Leaders</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl italic">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-6 not-italic">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img alt={testimonial.author} className="w-12 h-12 rounded-full border border-primary/20" src={testimonial.avatar} />
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white not-italic">{testimonial.author}</p>
                  <p className="text-xs text-slate-400 not-italic">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Demo CTA Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-primary rounded-[2rem] p-12 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">See ManishOps Tools in Action</h2>
          <p className="text-emerald-50 mb-10 text-lg max-w-xl mx-auto relative z-10">
            Experience the power of our K8s Auto-scaler and Log Aggregator Pro with a personalized live demo.
          </p>
          <a href="mailto:hello@manishops.in?subject=Demo Request" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl relative z-10">
            Request a Demo
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-extrabold font-display tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ManishOps
          </div>
          <div className="text-sm text-slate-500">
            © 2026 ManishOps - DevOps Solutions & Tools
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
