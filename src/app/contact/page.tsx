'use client';

import React, { useState } from 'react';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Divider } from '@/components/ui/Divider';
import { Animate } from '@/components/ui/Animate';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, Check,
  Smartphone, Globe, FileText
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <Section variant="navy" padding="lg">
        <Container>
          <div className="text-center">
            <Animate type="fadeInDown">
              <Heading as="h1" size="2xl" font="serif" className="text-white mb-4">
                Contact Us
              </Heading>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.1}>
              <Text color="white" size="lg" className="max-w-3xl mx-auto mb-8">
                Have questions about our courses or need assistance? We're here to help.
                Reach out to our team and we'll get back to you as soon as possible.
              </Text>
            </Animate>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg" className="-mt-16 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <Animate type="fadeInUp" delay={0.1}>
              <Card className="h-full hover:shadow-elegant transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-navy-blue" />
                  </div>
                  <Heading as="h3" size="md" className="mb-3">
                    Visit Us
                  </Heading>
                  <Text className="mb-4">
                    123 Education Lane<br />
                    London, SW1A 1AA<br />
                    United Kingdom
                  </Text>
                  <div className="mt-auto">
                    <Button.Link 
                      href="https://maps.google.com" 
                      target="_blank"
                      variant="link"
                      className="text-navy-blue"
                    >
                      View on Map
                    </Button.Link>
                  </div>
                </div>
              </Card>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.2}>
              <Card className="h-full hover:shadow-elegant transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-navy-blue" />
                  </div>
                  <Heading as="h3" size="md" className="mb-3">
                    Call Us
                  </Heading>
                  <Text className="mb-2">Main Office:</Text>
                  <Text className="text-lg font-medium mb-3">
                    +44 (0) 20 1234 5678
                  </Text>
                  <Text className="mb-2">Student Support:</Text>
                  <Text className="text-lg font-medium mb-4">
                    +44 (0) 20 8765 4321
                  </Text>
                  <div className="mt-auto">
                    <Button.Link 
                      href="tel:+442012345678" 
                      variant="link"
                      className="text-navy-blue"
                    >
                      Call Now
                    </Button.Link>
                  </div>
                </div>
              </Card>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.3}>
              <Card className="h-full hover:shadow-elegant transition-shadow">
                <div className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-navy-blue" />
                  </div>
                  <Heading as="h3" size="md" className="mb-3">
                    Email Us
                  </Heading>
                  <Text className="mb-2">General Enquiries:</Text>
                  <Text className="text-lg font-medium mb-3">
                    info@britanniainstitute.ac.uk
                  </Text>
                  <Text className="mb-2">Admissions:</Text>
                  <Text className="text-lg font-medium mb-4">
                    admissions@britanniainstitute.ac.uk
                  </Text>
                  <div className="mt-auto">
                    <Button.Link 
                      href="mailto:info@britanniainstitute.ac.uk" 
                      variant="link"
                      className="text-navy-blue"
                    >
                      Send Email
                    </Button.Link>
                  </div>
                </div>
              </Card>
            </Animate>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg" className="bg-light-silver/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <Animate type="fadeInLeft">
                <Heading as="h2" size="xl" font="serif" className="mb-6">
                  Get in Touch
                </Heading>
                
                <Text color="muted" className="mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </Text>
                
                {isSubmitted ? (
                  <Card className="bg-green-50 border border-green-200">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <Heading as="h3" size="lg" className="mb-2">
                        Message Sent!
                      </Heading>
                      <Text>
                        Thank you for contacting us. We've received your message and will respond shortly.
                      </Text>
                      <Button 
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <Card>
                    <div className="p-6">
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          {/* Name */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`input-elegant w-full ${errors.name ? 'border-red' : ''}`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red">{errors.name}</p>
                            )}
                          </div>
                          
                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address <span className="text-red">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`input-elegant w-full ${errors.email ? 'border-red' : ''}`}
                              placeholder="john.doe@example.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red">{errors.email}</p>
                            )}
                          </div>
                          
                          {/* Phone */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number (Optional)
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="input-elegant w-full"
                              placeholder="+44 1234 567890"
                            />
                          </div>
                          
                          {/* Subject */}
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                              Subject <span className="text-red">*</span>
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className={`input-elegant w-full ${errors.subject ? 'border-red' : ''}`}
                            >
                              <option value="">Select a subject</option>
                              <option value="Course Enquiry">Course Enquiry</option>
                              <option value="Admission">Admission</option>
                              <option value="Financial Aid">Financial Aid</option>
                              <option value="Technical Support">Technical Support</option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.subject && (
                              <p className="mt-1 text-sm text-red">{errors.subject}</p>
                            )}
                          </div>
                        </div>
                        
                        {/* Message */}
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message <span className="text-red">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={`input-elegant w-full resize-none ${errors.message ? 'border-red' : ''}`}
                            placeholder="How can we help you?"
                          ></textarea>
                          {errors.message && (
                            <p className="mt-1 text-sm text-red">{errors.message}</p>
                          )}
                        </div>
                        
                        <div className="flex justify-end">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            icon={isSubmitting ? undefined : <Send size={16} />}
                            iconPosition="right"
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Card>
                )}
              </Animate>
            </div>
            
            {/* Map and Office Info */}
            <div>
              <Animate type="fadeInRight">
                <div className="bg-white rounded-xl overflow-hidden shadow-card mb-8">
                  <div className="aspect-[4/3] bg-gray-200 relative">
                    {/* This would be replaced with an actual map component */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-navy-blue/50" />
                    </div>
                  </div>
                </div>
                
                <Card>
                  <div className="p-6">
                    <Heading as="h3" size="lg" className="mb-6">
                      Office Information
                    </Heading>
                    
                    <div className="space-y-6">
                      <div className="flex">
                        <Clock className="h-5 w-5 text-navy-blue mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <Text weight="medium" className="mb-1">Opening Hours</Text>
                          <Text color="muted">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 2:00 PM<br />
                            Sunday: Closed
                          </Text>
                        </div>
                      </div>
                      
                      <Divider />
                      
                      <div className="flex">
                        <Smartphone className="h-5 w-5 text-navy-blue mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <Text weight="medium" className="mb-1">Contact Options</Text>
                          <div className="space-y-2">
                            <Text color="muted">
                              Phone: +44 (0) 20 1234 5678
                            </Text>
                            <Text color="muted">
                              Fax: +44 (0) 20 1234 5679
                            </Text>
                            <Text color="muted">
                              Email: info@britanniainstitute.ac.uk
                            </Text>
                          </div>
                        </div>
                      </div>
                      
                      <Divider />
                      
                      <div className="flex">
                        <Globe className="h-5 w-5 text-navy-blue mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <Text weight="medium" className="mb-1">Social Media</Text>
                          <div className="flex space-x-3 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center hover:bg-navy-blue hover:text-white transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                              </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center hover:bg-navy-blue hover:text-white transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center hover:bg-navy-blue hover:text-white transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.23.582 1.777 1.029.447.447.779 1.009 1.028 1.677.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.904 4.904 0 01-1.028 1.677c-.447.447-1.009.779-1.777 1.028-.636.247-1.363.416-2.427.465-1.06.048-1.37.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.904 4.904 0 01-1.677-1.028 4.904 4.904 0 01-1.028-1.677c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.904 4.904 0 011.028-1.677A4.904 4.904 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C6.901 2.013 7.256 2 9.685 2h2.63zm-.63 1.802h-1.38c-2.386 0-2.72.007-3.678.052-.95.044-1.453.196-1.786.325-.466.178-.799.39-1.146.737-.347.347-.559.68-.737 1.146-.13.333-.282.836-.325 1.786-.045.958-.052 1.292-.052 3.678v1.38c0 2.386.007 2.72.052 3.678.044.95.196 1.453.325 1.786.178.466.39.799.737 1.146.347.347.68.559 1.146.737.333.13.836.282 1.786.325.958.045 1.292.052 3.678.052h1.38c2.386 0 2.72-.007 3.678-.052.95-.044 1.453-.196 1.786-.325a3.25 3.25 0 00.737-.367V20.574a3.25 3.25 0 00.648-.648c.178-.466.39-.799.737-1.146.347-.347.68-.559 1.146-.737.333-.13.836-.282 1.786-.325.958-.045 1.292-.052 3.678-.052V9.686c0-2.386-.007-2.72-.052-3.678-.044-.95-.196-1.453-.325-1.786-.156-.397-.332-.686-.647-.973-.323-.323-.613-.499-.973-.648-.333-.13-.836-.282-1.786-.325-.958-.045-1.292-.052-3.678-.052l.052.052z" />
                              </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center hover:bg-navy-blue hover:text-white transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Animate>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="xl" font="serif" className="mb-4">
              Frequently Asked Questions
            </Heading>
            <Text color="muted" className="max-w-2xl mx-auto">
              Find quick answers to common questions about our institution, courses, and enrollment process.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Animate type="fadeInUp" delay={0.1}>
              <Card>
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-navy-blue" />
                    </div>
                    <Heading as="h3" size="md">
                      How do I enroll in a course?
                    </Heading>
                  </div>
                  <Text>
                    To enroll in a course, simply browse our course offerings, select the course you're interested in, and click the "Enroll Now" button. Follow the prompts to create an account (if you don't already have one) and complete the payment process.
                  </Text>
                </div>
              </Card>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.2}>
              <Card>
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-navy-blue" />
                    </div>
                    <Heading as="h3" size="md">
                      What payment methods do you accept?
                    </Heading>
                  </div>
                  <Text>
                    We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For corporate enrollments, we also offer invoice payment options.
                  </Text>
                </div>
              </Card>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.3}>
              <Card>
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-navy-blue" />
                    </div>
                    <Heading as="h3" size="md">
                      Are there any prerequisites for courses?
                    </Heading>
                  </div>
                  <Text>
                    Prerequisites vary by course. Basic courses typically have no prerequisites, while advanced courses may require prior knowledge or completion of foundational courses. Check the specific course description for detailed requirements.
                  </Text>
                </div>
              </Card>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.4}>
              <Card>
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-navy-blue" />
                    </div>
                    <Heading as="h3" size="md">
                      Do you offer financial aid or scholarships?
                    </Heading>
                  </div>
                  <Text>
                    Yes, we offer various financial aid options and scholarships for qualifying students. Please contact our admissions office or visit the Financial Aid section of our website for more information on eligibility and application procedures.
                  </Text>
                </div>
              </Card>
            </Animate>
          </div>
          
          <div className="text-center mt-12">
            <Button.Link href="/faq" icon={<FileText size={16} />}>
              View All FAQs
            </Button.Link>
          </div>
        </Container>
      </Section>
    </>
  );
} 