'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Check, GraduationCap, BookOpen, Shield, Globe, Download, ArrowRight } from 'lucide-react';

export default function Certificates() {
  // Sample certificate types
  const certificateTypes = [
    {
      title: 'Professional Certificate',
      description: 'Our flagship certification that validates mastery of essential skills for professional practice.',
      icon: <Award className="h-10 w-10 text-gold" />,
      features: [
        'Industry-recognized qualification',
        'Comprehensive assessment of skills',
        'Digital and physical certificate',
        'Verification portal access',
        'Valid for 3 years'
      ],
      color: 'bg-navy-blue'
    },
    {
      title: 'Specialist Certificate',
      description: 'Advanced certification for specialized expertise in specific domains or techniques.',
      icon: <GraduationCap className="h-10 w-10 text-red" />,
      features: [
        'Expert-level recognition',
        'Specialty field validation',
        'Digital badge for online profiles',
        'Continuing education credits',
        'Valid for 2 years'
      ],
      color: 'bg-red'
    },
    {
      title: 'Course Completion',
      description: 'Certificate acknowledging successful completion of a specific course or module.',
      icon: <BookOpen className="h-10 w-10 text-royal-blue" />,
      features: [
        'Course-specific credential',
        'Skills and knowledge verification',
        'Digital certificate',
        'Progress tracking',
        'Permanent validity'
      ],
      color: 'bg-royal-blue'
    }
  ];

  // Accreditation partners
  const accreditationPartners = [
    'UK Qualifications Authority',
    'International Education Council',
    'Professional Standards Board',
    'European Education Framework',
    'Global Certification Alliance'
  ];

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
              Our Certificates
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Internationally recognized credentials that validate your skills and enhance your professional profile
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certificate Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-navy-blue mb-6">Credentials That Open Doors</h2>
              <p className="text-gray-600 mb-6">
                At Britannia Institute, we provide internationally recognized certificates that validate your skills and knowledge, enhancing your professional credibility and career prospects.
              </p>
              <p className="text-gray-600 mb-6">
                Our certifications are designed in collaboration with industry experts and educational authorities to ensure they reflect current industry standards and best practices.
              </p>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Why Our Certificates Matter</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Recognized by employers worldwide',
                  'Verified digital credentials with secure authentication',
                  'Aligned with industry standards and competency frameworks',
                  'Demonstrates commitment to professional development',
                  'Enhances your resume and professional profile'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
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
                <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                  <div className="p-8 bg-navy-blue">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Award className="h-8 w-8 text-gold mr-3" />
                        <div className="text-white font-bold text-lg">Britannia Institute</div>
                      </div>
                      <div>
                        <Shield className="h-6 w-6 text-white/80" />
                      </div>
                    </div>
                    <div className="text-white text-center">
                      <div className="text-sm uppercase tracking-wider mb-2">Certificate of Achievement</div>
                      <div className="text-2xl font-bold mb-3">Professional Certificate</div>
                    </div>
                  </div>
                  <div className="px-8 py-10">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">This certifies that</p>
                      <p className="text-2xl font-bold text-navy-blue mb-2">Jane Smith</p>
                      <p className="text-gray-600 mb-4">has successfully completed the requirements for</p>
                      <p className="text-xl font-bold text-navy-blue mb-4">Digital Marketing Strategy</p>
                      <div className="w-32 h-1 bg-gold mx-auto mb-4"></div>
                      <p className="text-gray-600">Awarded on: May 15, 2023</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                    <div className="text-xs text-gray-500">Certificate ID: BI-DMS-2023-1234</div>
                    <div className="text-xs text-gray-500">Validate at: verify.britanniainstitute.ac.uk</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Certificate Types</h2>
            <p className="text-gray-600">
              We offer different types of certifications to match your educational and professional needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificateTypes.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className={`${certificate.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    {certificate.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                  <p className="text-white/80">{certificate.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-navy-blue mb-4">Features & Benefits</h4>
                  <ul className="space-y-3">
                    {certificate.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Certificate Verification</h2>
            <p className="text-gray-600">
              Our secure verification system ensures the authenticity and validity of all Britannia Institute credentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-navy-blue mb-6">How Our Verification Works</h3>
              <ol className="space-y-6">
                {[
                  {
                    title: 'Secure Issuance',
                    description: 'Each certificate is issued with a unique identifier and digital signature.',
                    icon: <Shield className="h-8 w-8 text-navy-blue" />
                  },
                  {
                    title: 'Online Verification Portal',
                    description: 'Employers can verify credentials through our secure online portal using the certificate ID.',
                    icon: <Globe className="h-8 w-8 text-royal-blue" />
                  },
                  {
                    title: 'Blockchain Technology',
                    description: 'Our certificates are secured using blockchain technology, ensuring they cannot be tampered with.',
                    icon: <Shield className="h-8 w-8 text-red" />
                  },
                  {
                    title: 'Real-Time Validation',
                    description: 'Instant verification provides the status and authenticity of any certificate we issue.',
                    icon: <Check className="h-8 w-8 text-green-500" />
                  }
                ].map((step, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-blue mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-navy-blue mb-6">Verify a Certificate</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="certificate-id" className="block text-sm font-medium text-gray-700 mb-1">
                      Certificate ID
                    </label>
                    <input
                      type="text"
                      id="certificate-id"
                      placeholder="Enter certificate ID (e.g., BI-DMS-2023-1234)"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="holder-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Certificate Holder Name
                    </label>
                    <input
                      type="text"
                      id="holder-name"
                      placeholder="Enter the name on the certificate"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-navy-blue text-white font-medium rounded-lg hover:bg-royal-blue transition-colors"
                  >
                    Verify Certificate
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-navy-blue hover:underline">
                    Need help with verification? Contact us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Accreditations</h2>
            <p className="text-gray-600">
              Britannia Institute certificates are recognized and accredited by leading educational and professional bodies
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {accreditationPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 border border-gray-100 text-center"
                >
                  <Shield className="h-10 w-10 text-navy-blue mb-3" />
                  <div className="font-medium text-navy-blue">{partner}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Our certificates adhere to the highest standards of quality and are regularly reviewed by accreditation partners to ensure alignment with industry requirements.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-navy-blue font-medium hover:text-royal-blue transition-colors"
              >
                Learn more about our quality standards <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-blue mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Common questions about our certificates and verification process
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How long are your certificates valid?',
                  answer: 'The validity period depends on the certificate type. Professional Certificates are valid for 3 years, Specialist Certificates for 2 years, and Course Completion Certificates have permanent validity.'
                },
                {
                  question: 'Can I get a physical copy of my certificate?',
                  answer: 'Yes, all Professional and Specialist Certificates come with both digital and physical copies. For Course Completion Certificates, physical copies can be requested for an additional fee.'
                },
                {
                  question: 'How can employers verify my certificate?',
                  answer: 'Employers can verify certificates through our online verification portal using the unique certificate ID and your name. The system provides real-time verification of the certificate\'s authenticity and status.'
                },
                {
                  question: 'Are your certificates internationally recognized?',
                  answer: 'Yes, our certificates are designed to meet international standards and are recognized by employers and institutions worldwide. Our accreditation partnerships with global educational bodies ensure broad recognition.'
                },
                {
                  question: 'What happens if I lose my certificate?',
                  answer: 'You can request a replacement through your student portal or by contacting our certificate department. Digital certificates can be re-downloaded at any time, and physical replacements can be issued for a small administrative fee.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-bold text-navy-blue mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
            <p className="text-blue-100 mb-8">
              Earn a recognized certificate and take the next step in your professional journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold text-navy-blue font-medium hover:bg-gold/90 transition-colors"
              >
                Browse Our Courses
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