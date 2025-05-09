'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <footer className="bg-gradient-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center text-gold gold-underline inline-block">
              Britannia Institute
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A premier educational institute dedicated to providing exceptional learning experiences and professional development opportunities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy-blue transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy-blue transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy-blue transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy-blue transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-gold gold-underline inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Courses', href: '/courses' },
                { name: 'Certificates', href: '/certificates' },
                { name: 'Contact', href: '/contact' },
                { name: 'Profile', href: '/profile' }
              ].map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="mr-2 w-0 group-hover:w-2 h-[2px] bg-gold transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Legal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-gold gold-underline inline-block">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Refund Policy', href: '/refund-policy' },
                { name: 'Terms & Conditions', href: '/terms-conditions' },
                { name: 'Cookies Policy', href: '/cookies-policy' }
              ].map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                    <span className="mr-2 w-0 group-hover:w-2 h-[2px] bg-gold transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-gold gold-underline inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-red group-hover:bg-red group-hover:text-white transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">123 Oxford Street, London, UK W1D 2QF</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-red group-hover:bg-red group-hover:text-white transition-all duration-300">
                  <Phone size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-red group-hover:bg-red group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@britanniainstitute.ac.uk</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {year} Britannia Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <a href="#" className="text-gray-400 hover:text-gold flex items-center text-sm transition-colors">
                <span className="mr-1">Back to top</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-blue rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-red rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-gold rounded-full opacity-10"></div>
    </footer>
  );
};

export default Footer; 