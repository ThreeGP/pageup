import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-black text-white py-4 shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg bg-black/90 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="text-yellow-400 font-bold text-2xl relative group">
            Osk.BudVip
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden transition-transform duration-300 hover:scale-110 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/">Strona główna</NavLink>
          <NavLink to="/#services">Usługi</NavLink>
          <NavLink to="/#about">O nas</NavLink>
          <NavLink to="/realizacje">Realizacje</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="p-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Strona główna</MobileNavLink>
          <MobileNavLink to="/#services" onClick={() => setIsMenuOpen(false)}>Usługi</MobileNavLink>
          <MobileNavLink to="/#about" onClick={() => setIsMenuOpen(false)}>O nas</MobileNavLink>
          <MobileNavLink to="/realizacje" onClick={() => setIsMenuOpen(false)}>Realizacje</MobileNavLink>
          <MobileNavLink to="/kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</MobileNavLink>
        </nav>
      </div>
    </header>
  );
}

// Komponent dla linków nawigacyjnych desktop
function NavLink({ to, children }) {
  const isHash = to.includes('#');
  
  const Component = isHash ? 
    ({ children, className }) => <a href={to} className={className}>{children}</a> :
    ({ children, className }) => <Link to={to} className={className}>{children}</Link>;
  
  return (
    <Component className="text-white hover:text-yellow-400 transition-all duration-300 relative group font-medium">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Component>
  );
}

// Komponent dla linków nawigacyjnych mobile
function MobileNavLink({ to, children, onClick }) {
  const isHash = to.includes('#');
  
  const Component = isHash ? 
    ({ children, className }) => <a href={to} className={className} onClick={onClick}>{children}</a> :
    ({ children, className }) => <Link to={to} className={className} onClick={onClick}>{children}</Link>;
  
  return (
    <Component className="text-white hover:text-yellow-400 transition-all duration-300 group flex items-center">
      <span className="h-6 w-1 bg-transparent group-hover:bg-yellow-400 mr-2 transition-all duration-300"></span>
      {children}
    </Component>
  );
}

export default Header; 