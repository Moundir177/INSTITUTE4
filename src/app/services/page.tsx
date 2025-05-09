'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Globe, FileText, Users, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue to-dark-navy z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path
              d="M0,0 L1000,0 L1000,1000 L0,1000 L0,0 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            ></path>
            <path
              d="M0,0 L1000,1000 M1000,0 L0,1000"
              fill="none"
              stroke="#cf142b"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Comprehensive educational solutions for personal and professional growth
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">What We Offer</h2>
            <p className="text-gray-600">
              Britannia Institute provides a wide range of educational services designed to meet the needs of both individuals and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-navy-blue" />,
                title: "Professional Courses",
                description: "Comprehensive programs designed to build expertise in specific professional domains and enhance career prospects."
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-red" />,
                title: "Certification Programs",
                description: "Industry-recognized certifications to validate skills and knowledge in specialized areas."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-gold" />,
                title: "Corporate Training",
                description: "Customized training solutions for businesses to enhance employee skills and drive organizational growth."
              },
              {
                icon: <Globe className="h-10 w-10 text-royal-blue" />,
                title: "International Education",
                description: "Global learning opportunities through partnerships with international universities and institutions."
              },
              {
                icon: <FileText className="h-10 w-10 text-navy-blue" />,
                title: "Research & Development",
                description: "Collaborative research initiatives exploring innovative approaches to education and industry challenges."
              },
              {
                icon: <Users className="h-10 w-10 text-red" />,
                title: "Career Services",
                description: "Comprehensive support for career planning, job placement, and professional networking."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-flex items-center text-navy-blue font-medium hover:text-royal-blue transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Professional Course Development</h2>
              <p className="text-gray-600 mb-6">
                Our expert team designs cutting-edge courses that combine theoretical knowledge with practical skills, ensuring our students are prepared for the demands of today's workplace.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Industry-aligned curriculum development",
                  "Continuous updates based on market trends",
                  "Blended learning approaches for maximum engagement",
                  "Practical assessments and real-world projects",
                  "Support from industry experts and mentors"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
              >
                Explore Our Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-navy-blue/20 to-red/20 rounded-2xl blur-xl opacity-70"></div>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl p-8">
                  <div className="p-4 bg-navy-blue/5 rounded-lg mb-6">
                    <BookOpen className="h-12 w-12 text-navy-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue mb-4">Course Development Process</h3>
                  <ol className="space-y-4">
                    {[
                      "Industry needs assessment",
                      "Curriculum design by subject experts",
                      "Content development and review",
                      "Integration of practical components",
                      "Quality assurance and testing",
                      "Launch and continuous improvement"
                    ].map((step, index) => (
                      <li key={index} className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-blue text-white flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Service Categories</h2>
            <p className="text-gray-600">
              Explore our range of specialized services designed to meet diverse educational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Individual Services",
                description: "Tailored educational solutions for personal and professional development",
                items: [
                  "Career-focused professional courses",
                  "Industry certification programs",
                  "Personal development workshops",
                  "One-on-one mentoring and coaching",
                  "Career counseling and planning",
                  "International study opportunities"
                ],
                icon: <Users className="h-10 w-10 text-navy-blue" />,
                color: "bg-navy-blue"
              },
              {
                title: "Corporate Services",
                description: "Comprehensive solutions for organizations and businesses",
                items: [
                  "Customized employee training programs",
                  "Leadership development workshops",
                  "Team-building initiatives",
                  "Skills assessment and gap analysis",
                  "Organizational development consulting",
                  "Industry-specific training solutions"
                ],
                icon: <Briefcase className="h-10 w-10 text-red" />,
                color: "bg-red"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className={`${category.color} p-6 flex items-center`}>
                  <div className="bg-white/20 p-4 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/80">{category.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-navy-blue text-navy-blue font-medium hover:bg-navy-blue hover:text-white transition-colors"
                    >
                      Explore {category.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">What Clients Say</h2>
            <p className="text-gray-600">
              Feedback from individuals and organizations that have benefited from our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The corporate training program developed by Britannia Institute has significantly improved our team's performance and productivity. The customized approach and expert trainers made a real difference.",
                author: "Richard Thompson",
                position: "HR Director",
                company: "Global Solutions Ltd"
              },
              {
                quote: "As a multinational company, we needed a training partner who could deliver consistent quality across different regions. Britannia Institute exceeded our expectations with their flexible and comprehensive approach.",
                author: "Amanda Wilson",
                position: "Chief Learning Officer",
                company: "Tech Innovations Inc."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="mb-6">
                  <div className="text-gold text-6xl leading-none">"</div>
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8">
              Contact us today to discuss how our services can meet your educational needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold text-navy-blue font-medium hover:bg-gold/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/services/request-consultation" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 