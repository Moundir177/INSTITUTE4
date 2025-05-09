'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              How we collect, use, and protect your personal information
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-blue-100"
            >
              Last Updated: May 1, 2023
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="prose max-w-none">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-navy-blue mr-3" />
                  <h2 className="text-2xl font-bold text-navy-blue m-0">Our Commitment to Privacy</h2>
                </div>
                
                <p className="text-gray-600">
                  At Britannia Institute, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                </p>
                
                <p className="text-gray-600">
                  We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data. By accessing or using our services, you acknowledge that you have read and understand this Privacy Policy.
                </p>

                <div className="mt-10 mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Information We Collect</h3>
                  <p className="text-gray-600">
                    We collect several types of information from and about users of our website and services, including:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Personal Information:</span> This includes your name, email address, postal address, phone number, date of birth, educational background, and payment information when you register for a course, create an account, or make a purchase.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Usage Information:</span> We collect information about how you interact with our website, such as the pages you visit, the time and date of your visits, the time spent on those pages, and the links you click.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Device Information:</span> We may collect information about the device you use to access our services, including the hardware model, operating system, unique device identifiers, and mobile network information.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Educational Information:</span> If you enroll in our courses, we collect information related to your course progress, assessment results, and certification achievements.
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">How We Use Your Information</h3>
                  <p className="text-gray-600">
                    We use the information we collect for various purposes, including:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="text-gray-600">To provide and maintain our services</li>
                    <li className="text-gray-600">To process and fulfill your course enrollments and purchases</li>
                    <li className="text-gray-600">To manage your account and provide you with customer support</li>
                    <li className="text-gray-600">To track your progress and issue certificates upon course completion</li>
                    <li className="text-gray-600">To personalize your experience and deliver content relevant to your interests</li>
                    <li className="text-gray-600">To send you administrative information, such as updates to our terms and policies</li>
                    <li className="text-gray-600">To communicate with you about our courses, promotions, and events (if you have opted to receive such communications)</li>
                    <li className="text-gray-600">To improve our website, products, and services</li>
                    <li className="text-gray-600">To prevent fraudulent transactions and monitor against theft</li>
                    <li className="text-gray-600">To comply with legal obligations</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Cookies and Similar Technologies</h3>
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                  <p className="text-gray-600 mt-3">
                    The types of cookies we use include:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Essential Cookies:</span> Necessary for the website to function properly
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Functional Cookies:</span> Help to perform certain functionalities, such as remembering your preferences
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Analytical Cookies:</span> Used to understand how visitors interact with the website
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Marketing Cookies:</span> Used to provide visitors with relevant ads and marketing campaigns
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Data Sharing and Disclosure</h3>
                  <p className="text-gray-600">
                    We may share your personal information in the following situations:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Service Providers:</span> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf and need access to your information to deliver those services.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Business Transfers:</span> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold text-navy-blue">With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.
                    </li>
                  </ul>
                  
                  <p className="text-gray-600 mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Data Security</h3>
                  <div className="flex items-center my-4">
                    <Lock className="h-6 w-6 text-navy-blue mr-3" />
                    <p className="text-gray-600 m-0">
                      We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                  <p className="text-gray-600">
                    We regularly review our security procedures and consider appropriate new security technology and methods. However, despite our efforts, no security measures are perfect or impenetrable.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Data Retention</h3>
                  <p className="text-gray-600">
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Your Data Protection Rights</h3>
                  <p className="text-gray-600">
                    Depending on your location, you may have the following data protection rights:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="text-gray-600">The right to access, update, or delete the information we have on you</li>
                    <li className="text-gray-600">The right of rectification—to have your information corrected if it is inaccurate or incomplete</li>
                    <li className="text-gray-600">The right to object to our processing of your personal data</li>
                    <li className="text-gray-600">The right of restriction—to request that we restrict the processing of your personal information</li>
                    <li className="text-gray-600">The right to data portability—to receive a copy of your personal information in a structured, machine-readable format</li>
                    <li className="text-gray-600">The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
                  </ul>
                  
                  <p className="text-gray-600 mt-4">
                    If you wish to exercise any of these rights, please contact us using the information provided at the end of this Privacy Policy.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Children's Privacy</h3>
                  <p className="text-gray-600">
                    Our services are not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we take steps to remove that information from our servers.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Changes to This Privacy Policy</h3>
                  <p className="text-gray-600">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-blue">Contact Us</h3>
                  <div className="flex items-center mt-4">
                    <Mail className="h-6 w-6 text-navy-blue mr-3" />
                    <p className="text-gray-600 m-0">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                  </div>
                  <p className="text-navy-blue font-semibold mt-4">
                    Britannia Institute<br />
                    123 Oxford Street<br />
                    London, UK W1D 2QF<br />
                    Email: privacy@britanniainstitute.ac.uk<br />
                    Phone: +44 20 1234 5678
                  </p>
                </div>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    This privacy policy was created to demonstrate our commitment to protecting your privacy. If you have any questions or concerns, please do not hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
              >
                Contact Us With Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 