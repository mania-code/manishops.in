function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">ManishOps</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
            DevOps Solutions & Tools
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
            Empowering businesses with cutting-edge DevOps services, automation solutions,
            and innovative tools to accelerate your cloud journey and optimize infrastructure.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#services" className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg">
              Our Services
            </a>
            <a href="#tools" className="bg-transparent hover:bg-primary/10 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
              DevOps Tools
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
