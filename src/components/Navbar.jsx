import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/logo-strona.png";

const navItems = [
  { name: "Strona główna", path: "/" },
  { name: "Usługi", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "O nas", path: "/about" },
  { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-secondary-900/90 to-primary-900/90 backdrop-blur-sm py-4"
          : "bg-white/95 backdrop-blur-md shadow-lg py-2"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
              aria-label="PageUp - Przejdź do strony głównej"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-12"
              >
                <img
                  src={logoImage}
                  alt="PageUp Logo"
                  className={`h-full w-auto object-cover object-center transition-all duration-300 ${
                    scrolled ? "brightness-0 invert" : ""
                  }`}
                  style={{ objectPosition: "0 50%" }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-sm uppercase tracking-wide relative overflow-hidden group ${
                  location.pathname === item.path
                    ? scrolled
                      ? 'text-white font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full'
                      : "nav-link-active text-primary-600"
                    : scrolled
                    ? "text-white/90 hover:text-white"
                    : "text-secondary-700 hover:text-primary-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    scrolled
                      ? "bg-white"
                      : "bg-gradient-to-r from-primary-500 to-accent-500"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}
                ></span>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className={`btn btn-sm ${
                  scrolled
                    ? "bg-white text-primary-600 hover:bg-white/90"
                    : "bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:from-primary-500 hover:to-accent-400"
                } shadow-md hover:shadow-lg hover:shadow-primary-500/20 transform transition-all duration-300`}
              >
                Rozpocznij projekt
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <motion.div
            className="flex items-center md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-300 hover:bg-white/10 focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Otwórz menu główne</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom py-4 bg-gradient-to-br from-white/95 to-primary-50/95 backdrop-blur-md shadow-lg rounded-b-xl border border-gray-100 border-t-0">
              <div className="flex flex-col space-y-3 pt-2 pb-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-600 shadow-sm"
                          : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 px-4"
                >
                  <Link
                    to="/contact"
                    className="w-full block text-center btn bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:from-primary-500 hover:to-accent-400 shadow-md hover:shadow-lg"
                  >
                    Rozpocznij projekt
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
