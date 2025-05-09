'use client';

import React, { useState } from 'react';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Animate } from '@/components/ui/Animate';
import { 
  MessageSquare, ChevronDown, ChevronUp, Search, HelpCircle, BookOpen, CreditCard, Award, User
} from 'lucide-react';

// FAQ data grouped by category
const faqData = [
  {
    category: 'Courses & Learning',
    icon: <BookOpen className="h-6 w-6" />,
    questions: [
      {
        question: 'How are courses structured at Britannia Institute?',
        answer: 'Our courses are structured with a blend of theoretical knowledge and practical applications. Most courses include video lectures, reading materials, interactive exercises, quizzes, and assignments. Depending on the course, you may also have group projects, live sessions with instructors, and practical workshops.'
      },
      {
        question: 'What is the typical duration of a course?',
        answer: 'Course durations vary based on the level and complexity. Short courses may run for 4-6 weeks, while comprehensive programs can extend to 12-16 weeks. Most courses require a commitment of 5-10 hours per week, but this can be adjusted to your schedule as our platform allows for flexible learning.'
      },
      {
        question: 'Do I need any special software or equipment for the courses?',
        answer: 'Requirements vary by course. Basic courses typically need only a computer with internet access. Specialized courses may require specific software, which is usually indicated on the course page. Many professional software packages offer student licenses or trial versions.'
      },
      {
        question: 'Can I access course materials after completing the course?',
        answer: 'Yes, once you've completed a course, you'll retain access to the course materials for a period of 12 months. This allows you to revisit concepts and resources as needed. For lifetime access, we offer a premium option that can be purchased at the end of your course.'
      },
      {
        question: 'Are there prerequisites for advanced courses?',
        answer: 'Yes, advanced courses often require prerequisite knowledge or completion of foundational courses. These requirements are clearly stated on each course page. If you're unsure about whether you meet the prerequisites, you can take our readiness assessment or contact our academic advisors for guidance.'
      }
    ]
  },
  {
    category: 'Enrollment & Registration',
    icon: <User className="h-6 w-6" />,
    questions: [
      {
        question: 'How do I enroll in a course?',
        answer: 'Enrolling in a course is simple. Browse our course catalog, select your desired course, and click "Enroll Now." You'll be guided through creating an account (if you don't have one already) and completing the payment process. Once enrolled, you'll receive immediate access to the course materials.'
      },
      {
        question: 'Can I switch to a different course after enrolling?',
        answer: 'Yes, you can switch courses within 14 days of enrollment if you haven't completed more than 20% of the course content. Contact our student support team to request a course change. A small administrative fee may apply, depending on the price difference between courses.'
      },
      {
        question: 'Is there an age requirement for enrollment?',
        answer: 'Most of our courses are designed for learners 16 years and older. However, we do offer specific programs for younger students. For learners under 18, parental consent is required during the registration process.'
      },
      {
        question: 'Can I enroll in multiple courses simultaneously?',
        answer: 'Absolutely! You can enroll in as many courses as you wish to take simultaneously. However, we recommend assessing your time availability carefully to ensure you can commit to the requirements of each course for the best learning experience.'
      },
      {
        question: 'Do you offer group enrollment for companies or organizations?',
        answer: 'Yes, we offer special corporate packages for companies looking to enroll multiple employees. These packages come with additional benefits such as customized learning paths, progress tracking, and bulk discounts. Contact our corporate solutions team for more information.'
      }
    ]
  },
  {
    category: 'Payments & Pricing',
    icon: <CreditCard className="h-6 w-6" />,
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For certain courses, we also offer payment plans that allow you to spread the cost over several months. Corporate clients can request invoicing options.'
      },
      {
        question: 'Are there any hidden fees or additional costs?',
        answer: 'The price listed for each course includes all essential learning materials and assessments. Some specialized courses may require external software or resources, which are clearly indicated on the course page. We pride ourselves on transparent pricing with no hidden fees.'
      },
      {
        question: 'Do you offer refunds if I\'m not satisfied with a course?',
        answer: 'Yes, we offer a 14-day money-back guarantee for most courses. If you're not satisfied, you can request a refund within 14 days of enrollment, provided you haven't completed more than 20% of the course content. Please refer to our refund policy for specific details.'
      },
      {
        question: 'Are there any discounts available for students or special groups?',
        answer: 'Yes, we offer discounts for full-time students, military personnel, seniors, and non-profit organizations. You'll need to provide relevant documentation to verify your eligibility. We also run seasonal promotions and early bird discounts throughout the year.'
      },
      {
        question: 'Do you offer financial aid or scholarships?',
        answer: 'Yes, we have a scholarship program designed to support talented individuals with financial constraints. Applications are reviewed on a case-by-case basis. We also partner with various organizations to provide sponsored learning opportunities for underrepresented groups.'
      }
    ]
  },
  {
    category: 'Certificates & Accreditation',
    icon: <Award className="h-6 w-6" />,
    questions: [
      {
        question: 'What types of certificates do you offer?',
        answer: 'We offer several types of certificates, including Course Completion Certificates, Professional Certificates for skill-based programs, and Advanced Specialization Certificates for comprehensive learning paths. Each certificate details the skills you've acquired and is digitally verifiable.'
      },
      {
        question: 'Are your certificates recognized by employers?',
        answer: 'Yes, our certificates are widely recognized in the industry. We regularly collaborate with leading companies to ensure our curriculum meets industry standards. Many employers value our certificates as evidence of practical, job-relevant skills and commitment to professional development.'
      },
      {
        question: 'How do I obtain my certificate after completing a course?',
        answer: 'Once you've successfully completed all course requirements, your certificate will be automatically generated and available in your student dashboard. You can download it as a PDF or share it directly to your LinkedIn profile or other social media platforms.'
      },
      {
        question: 'Do certificates expire?',
        answer: 'Basic completion certificates do not expire. However, certifications for rapidly evolving fields (like technology or healthcare) may include an issue date, and employers might consider the recency of your certification. We offer refresher courses at reduced rates to help you keep your knowledge current.'
      },
      {
        question: 'Are your courses accredited by educational authorities?',
        answer: 'Many of our professional courses are accredited by relevant industry bodies and educational authorities. The specific accreditations are listed on each course page. Some courses also offer continuing education units (CEUs) or professional development units (PDUs) recognized by professional associations.'
      }
    ]
  },
  {
    category: 'Technical Support',
    icon: <HelpCircle className="h-6 w-6" />,
    questions: [
      {
        question: 'What technical requirements do I need to access your learning platform?',
        answer: 'Our platform is accessible on any modern web browser (Chrome, Firefox, Safari, Edge) and requires a stable internet connection. For optimal experience, we recommend a device with at least 4GB RAM, and for video content, a minimum internet speed of 5 Mbps. Mobile apps are available for iOS and Android devices.'
      },
      {
        question: 'How do I reset my password if I forget it?',
        answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email, check your spam folder or contact our support team for assistance.'
      },
      {
        question: 'What should I do if I encounter technical issues during a course?',
        answer: 'For any technical issues, first try refreshing your browser or clearing your cache. If the problem persists, contact our technical support team through the help center in your student dashboard. Include specific details about the issue, your device, and browser for faster resolution.'
      },
      {
        question: 'Can I download course materials for offline viewing?',
        answer: 'Yes, most reading materials, presentations, and resources are available for download. However, video content typically requires an internet connection for streaming due to copyright and security reasons. Some courses offer offline viewing options through our mobile app.'
      },
      {
        question: 'How accessible is your platform for users with disabilities?',
        answer: 'We are committed to making education accessible to everyone. Our platform complies with WCAG guidelines and includes features like screen reader compatibility, keyboard navigation, closed captions for videos, and adjustable text sizes. If you have specific accessibility needs, please contact our support team.'
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].category);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredFaqs = searchTerm
    ? faqData.flatMap(category => 
        category.questions
          .filter(q => 
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(q => ({ ...q, category: category.category }))
      )
    : [];
  
  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <>
      <Section variant="navy" padding="lg">
        <Container>
          <div className="text-center">
            <Animate type="fadeInDown">
              <Heading as="h1" size="2xl" font="serif" className="text-white mb-4">
                Frequently Asked Questions
              </Heading>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.1}>
              <Text color="white" size="lg" className="max-w-3xl mx-auto mb-8">
                Find answers to common questions about our courses, enrollment process, payments, and more.
                If you can't find what you're looking for, please contact our support team.
              </Text>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.2}>
              <div className="max-w-xl mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-elegant pl-10 pr-4 py-3 w-full rounded-full text-gray-900"
                  placeholder="Search for questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg" className="-mt-8 relative z-10">
        <Container>
          {searchTerm ? (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <Heading as="h2" size="lg">
                      Search Results
                    </Heading>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                  
                  {filteredFaqs.length > 0 ? (
                    <div className="space-y-6">
                      {filteredFaqs.map((faq, index) => (
                        <div 
                          key={index} 
                          className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                        >
                          <div className="flex items-start">
                            <Badge variant="outline" className="mt-1 mr-3 flex-shrink-0">
                              {faq.category}
                            </Badge>
                            <div>
                              <Heading as="h3" size="sm" className="mb-2">
                                {faq.question}
                              </Heading>
                              <Text color="muted">
                                {faq.answer}
                              </Text>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <HelpCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <Heading as="h3" size="md" className="mb-2">
                        No results found
                      </Heading>
                      <Text color="muted" className="mb-6">
                        We couldn't find any questions matching your search term.
                        Try using different keywords or browse our FAQ categories below.
                      </Text>
                      <Button onClick={() => setSearchTerm('')}>
                        Browse All FAQs
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ) : (
            <>
              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {faqData.map((category, index) => (
                  <Animate key={category.category} type="fadeInUp" delay={0.1 * index}>
                    <button
                      onClick={() => setActiveCategory(category.category)}
                      className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                        activeCategory === category.category
                          ? 'bg-navy-blue text-white'
                          : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      <span>{category.category}</span>
                    </button>
                  </Animate>
                ))}
              </div>
              
              {/* FAQ Accordion */}
              <div className="max-w-4xl mx-auto">
                {faqData.map((category) => (
                  category.category === activeCategory && (
                    <Animate key={category.category} type="fadeIn">
                      <Card className="mb-8">
                        <div className="p-6">
                          <Heading as="h2" size="xl" font="serif" className="mb-6 flex items-center">
                            {category.icon}
                            <span className="ml-3">{category.category}</span>
                          </Heading>
                          
                          <div className="space-y-4">
                            {category.questions.map((faq, index) => {
                              const isExpanded = expandedQuestions[`${category.category}-${index}`];
                              return (
                                <div key={index} className="border rounded-lg overflow-hidden">
                                  <button
                                    onClick={() => toggleQuestion(category.category, index)}
                                    className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
                                  >
                                    <span>{faq.question}</span>
                                    {isExpanded ? (
                                      <ChevronUp className="h-5 w-5 text-gray-500" />
                                    ) : (
                                      <ChevronDown className="h-5 w-5 text-gray-500" />
                                    )}
                                  </button>
                                  {isExpanded && (
                                    <div className="px-6 py-4 bg-gray-50 border-t">
                                      <Text color="muted">
                                        {faq.answer}
                                      </Text>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Card>
                    </Animate>
                  )
                ))}
              </div>
            </>
          )}
          
          <div className="text-center mt-12">
            <Heading as="h3" size="lg" className="mb-4">
              Still have questions?
            </Heading>
            <Text color="muted" className="max-w-xl mx-auto mb-8">
              Our support team is here to help. Contact us for personalized assistance with any questions or concerns you may have.
            </Text>
            <Button.Link href="/contact" size="lg">
              Contact Support
            </Button.Link>
          </div>
        </Container>
      </Section>
    </>
  );
} 