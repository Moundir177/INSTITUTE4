'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Courses', 
      href: '/courses',
      dropdown: true,
      items: [
        { name: 'All Courses', href: '/courses' },
        { name: 'Business Management', href: '/courses/business-management' },
        { name: 'Data Science', href: '/courses/data-science' },
        { name: 'Digital Marketing', href: '/courses/digital-marketing' },
        { name: 'Compare Courses', href: '/courses/compare' },
      ]
    },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-elegant bg-white/95 bg-blur' : 'bg-white'
    }`}>
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-navy rounded-full flex items-center justify-center shadow-navy">
                <span className="text-white font-bold text-xl">BI</span>
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red rounded-full border-2 border-white"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-navy-blue to-royal-blue bg-clip-text text-transparent">
              Britannia<span className="text-red">Institute</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      className="nav-link flex items-center"
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="nav-link"
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 rounded-xl shadow-elegant py-2 bg-white/95 bg-blur ring-1 ring-black/5 z-10 overflow-hidden"
                        >
                          {link.items?.map((item) => (
                            <Link 
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-gold transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <Search className="h-4 w-4 text-navy-blue" />
              </button>
              <Link 
                href="/login" 
                className="btn-primary"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-navy-blue transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-2 overflow-hidden">
                    {link.dropdown ? (
                      <>
                        <button 
                          onClick={() => toggleDropdown(link.name)}
                          className="flex items-center justify-between w-full font-medium text-gray-700"
                        >
                          {link.name}
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-1 border-l-2 border-light-gold"
                            >
                              {link.items?.map((item) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link 
                                    href={item.href}
                                    className="block py-2 text-sm text-gray-600 hover:text-navy-blue"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsOpen(false);
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="block font-medium text-gray-700 hover:text-navy-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 pb-2">
                  <Link 
                    href="/login"
                    className="btn-primary w-full flex justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar; 