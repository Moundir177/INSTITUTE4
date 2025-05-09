'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Globe, Landmark, GraduationCap } from 'lucide-react';

export default function About() {
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
              About Britannia Institute
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Dedicated to Excellence in Education Since 1995
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Britannia Institute was founded in 1995 with a simple mission: to provide high-quality education that prepares students for successful careers in a rapidly changing global economy.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small training center in London has grown into one of the UK's most respected educational institutions, with thousands of graduates working in various industries worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Throughout our history, we have remained committed to our founding principles: academic excellence, practical skills development, and personalized learning experiences that help each student reach their full potential.
              </p>
              <p className="text-gray-600">
                Today, Britannia Institute continues to innovate and adapt to meet the evolving needs of students and employers, offering cutting-edge courses and professional development opportunities across multiple disciplines.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 bg-navy-blue/10 rounded-lg overflow-hidden shadow-xl">
                <div className="p-12 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-navy-blue mb-4">
                      <Landmark size={64} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-blue mb-2">Established 1995</h3>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red rounded-lg transform rotate-6 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-lg transform -rotate-6 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              Guided by our commitment to excellence and innovation in education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower individuals through high-quality education and professional development, enabling them to achieve their career goals and contribute positively to society.
              </p>
              <ul className="space-y-3">
                {[
                  "Deliver exceptional educational experiences",
                  "Provide industry-relevant curriculum",
                  "Foster innovation and critical thinking",
                  "Support personal and professional growth"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-gold mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Values</h3>
              <p className="text-gray-600 mb-6">
                Our core values drive everything we do at Britannia Institute, from curriculum development to student support services.
              </p>
              <ul className="space-y-3">
                {[
                  "Excellence in all aspects of education",
                  "Integrity in our actions and relationships",
                  "Innovation in teaching methodologies",
                  "Inclusivity and respect for diversity",
                  "Collaboration with industry partners"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-red mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experienced professionals guiding Britannia Institute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. William Bennett",
                title: "Principal & CEO",
                bio: "With over 25 years in education leadership, Dr. Bennett brings a wealth of experience to Britannia Institute.",
                initial: "WB"
              },
              {
                name: "Prof. Elizabeth Clarke",
                title: "Academic Director",
                bio: "Former Cambridge professor with expertise in curriculum development and educational innovation.",
                initial: "EC"
              },
              {
                name: "Robert Thompson",
                title: "Director of Operations",
                bio: "Business management expert ensuring smooth operations across all institute departments.",
                initial: "RT"
              },
              {
                name: "Dr. Sophia Chen",
                title: "Head of Research",
                bio: "Leading our research initiatives and partnerships with industry and academic institutions.",
                initial: "SC"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-blue to-royal-blue mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.initial}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-1">{member.name}</h3>
                <p className="text-red font-medium mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Achievements</h2>
            <p className="text-gray-600">
              Celebrating our milestones and recognition in educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-gold" />,
                title: "Awards & Recognition",
                items: [
                  "UK Education Excellence Award (2022)",
                  "Best Professional Training Institute (2020)",
                  "Innovation in Education Award (2018)",
                  "Quality Standards Excellence (2016)"
                ]
              },
              {
                icon: <Users className="h-12 w-12 text-red" />,
                title: "Student Success",
                items: [
                  "15,000+ Graduates",
                  "92% Employment Rate",
                  "85% Career Advancement",
                  "Alumni in 45+ Countries"
                ]
              },
              {
                icon: <Globe className="h-12 w-12 text-royal-blue" />,
                title: "Global Impact",
                items: [
                  "Partnerships with 50+ Universities",
                  "Industry Collaborations",
                  "Research Publications",
                  "Community Outreach Programs"
                ]
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-4 text-center">{achievement.title}</h3>
                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-navy-blue mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Accreditations</h2>
            <p className="text-gray-600">
              Britannia Institute is recognized by leading educational bodies and industry organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center"
              >
                <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-navy-blue" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
            <p className="text-blue-100 mb-8">
              Explore our courses and start your journey towards professional excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold text-navy-blue font-medium hover:bg-gold/90 transition-colors"
              >
                Explore Courses
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 