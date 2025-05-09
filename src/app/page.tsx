'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Award, Users, Check, ChevronRight, Globe, Clock, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/10 to-royal-blue/5 z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-20">
            <path
              d="M0,0 L1000,0 L1000,1000 L0,1000 L0,0 Z"
              fill="none"
              stroke="#00247d"
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
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue leading-tight mb-6">
                Shape Your Future with <span className="text-red">Excellence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Britannia Institute offers world-class education and professional development courses designed to help you excel in today's competitive global environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/courses" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
                >
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-navy-blue text-navy-blue font-medium hover:bg-navy-blue/5 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                    >
                      <span className="text-xs font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-amber-500 flex">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 5000+ students</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-navy-blue/20 to-red/20 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 w-full h-96 relative">
                  <div className="absolute inset-0 bg-navy-blue flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">UK's Premier Institute</h3>
                      <p className="text-blue-100">Excellence in Education Since 1995</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2">25+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red mb-2">50+</div>
              <p className="text-gray-600">Professional Courses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">15k+</div>
              <p className="text-gray-600">Graduates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-blue mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Why Choose Britannia Institute?</h2>
            <p className="text-gray-600">We provide comprehensive education solutions tailored to prepare you for success in today's evolving job market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-gold" />,
                title: "Accredited Courses",
                description: "All our courses are accredited by top UK educational authorities ensuring quality standards."
              },
              {
                icon: <Users className="h-8 w-8 text-red" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of practical and academic experience."
              },
              {
                icon: <Globe className="h-8 w-8 text-royal-blue" />,
                title: "Global Recognition",
                description: "Our certificates are recognized by employers and institutions worldwide."
              },
              {
                icon: <BookOpen className="h-8 w-8 text-navy-blue" />,
                title: "Comprehensive Curriculum",
                description: "Carefully designed programs that balance theoretical knowledge with practical skills."
              },
              {
                icon: <Clock className="h-8 w-8 text-red" />,
                title: "Flexible Learning",
                description: "Study at your own pace with our flexible online and in-person learning options."
              },
              {
                icon: <Calendar className="h-8 w-8 text-gold" />,
                title: "Regular Updates",
                description: "Course materials are regularly updated to reflect current industry practices and standards."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue">Featured Courses</h2>
            <Link href="/courses" className="text-navy-blue font-medium flex items-center hover:text-royal-blue transition-colors">
              View All Courses <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Management",
                description: "Master the principles of effective business management and leadership.",
                image: "/business-management.jpg",
                price: "£1,499",
                duration: "12 Weeks",
                level: "Intermediate"
              },
              {
                title: "Data Science Fundamentals",
                description: "Learn essential data analysis and visualization techniques for data-driven decisions.",
                image: "/data-science.jpg",
                price: "£1,699",
                duration: "16 Weeks",
                level: "Beginner to Intermediate"
              },
              {
                title: "Digital Marketing Strategy",
                description: "Develop comprehensive digital marketing strategies for business growth.",
                image: "/digital-marketing.jpg",
                price: "£1,299",
                duration: "10 Weeks",
                level: "All Levels"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-navy-blue/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-navy-blue font-bold text-xl">{course.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-red font-bold">{course.price}</div>
                    <div className="text-sm text-gray-500">{course.duration}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">{course.level}</div>
                    <Link 
                      href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-navy-blue text-white text-sm font-medium hover:bg-royal-blue transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">What Our Students Say</h2>
            <p className="text-gray-600">Hear from our graduates about their experience at Britannia Institute</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                position: "Marketing Director",
                company: "Global Media",
                quote: "The Digital Marketing course was exactly what I needed to advance my career. The instructors were knowledgeable and the curriculum was up-to-date with industry standards."
              },
              {
                name: "James Wilson",
                position: "Data Analyst",
                company: "Tech Solutions Ltd",
                quote: "Britannia Institute's Data Science program provided me with practical skills that I use daily in my job. The hands-on approach to learning was incredibly valuable."
              },
              {
                name: "Sarah Thompson",
                position: "Operations Manager",
                company: "Retail Innovations",
                quote: "The Business Management course helped me develop leadership skills that have been essential for my career growth. I can't recommend Britannia Institute enough!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <span className="font-bold text-navy-blue">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-amber-500 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
            <p className="text-blue-100 mb-8">Join thousands of students who have transformed their careers with Britannia Institute</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red text-white font-medium hover:bg-red/90 transition-colors"
              >
                Browse Courses
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
