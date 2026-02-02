import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-card mx-auto mt-4 max-w-6xl rounded-full px-6 py-3 flex items-center justify-between border-b border-white/5">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold font-display tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer">
          ManishOps
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a
          className="hover:text-primary transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
          onClick={(e) => handleSectionClick(e, 'home')}
        >
          Home
        </a>
        <a
          className="hover:text-primary transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
          onClick={(e) => handleSectionClick(e, 'services')}
        >
          Services
        </a>
        <a
          className="hover:text-primary transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
          onClick={(e) => handleSectionClick(e, 'tools')}
        >
          Tools
        </a>
        <a
          className="hover:text-primary transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
          onClick={(e) => handleSectionClick(e, 'solutions')}
        >
          Solutions
        </a>
        <a
          className="text-primary transition-colors cursor-pointer"
          onClick={(e) => handleSectionClick(e, 'contact')}
        >
          Contact
        </a>
      </div>
      <a href="mailto:hello@manishops.in?subject=Demo Request" className="bg-primary hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105">
        Book Demo
      </a>
    </nav>
  );
}

export default Header;
