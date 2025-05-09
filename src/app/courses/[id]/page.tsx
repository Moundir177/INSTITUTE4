'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Animate } from '@/components/ui/Animate';
import { 
  Clock, Calendar, Star, Users, Award, BookOpen, ChevronRight, 
  CheckCircle, Play, Download, PlayCircle, User, MessageCircle
} from 'lucide-react';

// Mock course data - in a real application, this would be fetched from an API
const coursesData = [
  {
    id: 1,
    title: 'Advanced Business Management',
    category: 'Business',
    level: 'Advanced',
    duration: '12 weeks',
    schedule: 'Flexible',
    instructor: {
      name: 'Dr. Robert Williams',
      title: 'Professor of Business Management',
      bio: 'Dr. Williams has over 15 years of experience in business consulting and academia. He specializes in organizational leadership and strategic management.',
      image: '/images/instructors/robert-williams.jpg',
    },
    rating: 4.9,
    students: 1250,
    price: 799,
    discount: 649,
    image: '/images/courses/business-management.jpg',
    featured: true,
    popular: true,
    tags: ['Leadership', 'Strategy', 'Management'],
    description: 'Master advanced business management concepts and techniques to lead organizations effectively in today\'s competitive global market.',
    longDescription: `
      This comprehensive course is designed for aspiring and current business leaders who want to enhance their management capabilities and strategic thinking. Through a combination of theoretical frameworks and practical case studies, you'll develop the skills needed to navigate complex business challenges.
      
      You'll learn how to analyze business environments, develop strategic plans, lead teams effectively, and make data-driven decisions. The course covers advanced topics in organizational behavior, strategic planning, financial analysis, and leadership development.
      
      By the end of this course, you'll have a solid understanding of modern management techniques and be able to apply them in real-world business scenarios.
    `,
    curriculum: [
      {
        title: 'Module 1: Strategic Management Foundations',
        lessons: [
          { title: 'Introduction to Strategic Management', duration: '45 min', preview: true },
          { title: 'External Environment Analysis', duration: '1 hr' },
          { title: 'Internal Environment Analysis', duration: '1 hr' },
          { title: 'SWOT Analysis Workshop', duration: '1.5 hrs' },
        ]
      },
      {
        title: 'Module 2: Leadership and Organizational Behavior',
        lessons: [
          { title: 'Modern Leadership Theories', duration: '1 hr' },
          { title: 'Emotional Intelligence in Management', duration: '45 min' },
          { title: 'Team Building and Management', duration: '1.5 hrs' },
          { title: 'Conflict Resolution Strategies', duration: '1 hr' },
        ]
      },
      {
        title: 'Module 3: Financial Decision Making',
        lessons: [
          { title: 'Financial Analysis for Managers', duration: '1.5 hrs' },
          { title: 'Budget Planning and Control', duration: '1 hr' },
          { title: 'Investment Decision Making', duration: '1 hr' },
          { title: 'Financial Risk Management', duration: '45 min' },
        ]
      },
      {
        title: 'Module 4: Operations and Project Management',
        lessons: [
          { title: 'Operations Strategy', duration: '1 hr' },
          { title: 'Supply Chain Optimization', duration: '1 hr' },
          { title: 'Project Management Methodologies', duration: '1.5 hrs' },
          { title: 'Quality Management Systems', duration: '45 min' },
        ]
      },
      {
        title: 'Module 5: Marketing Strategy',
        lessons: [
          { title: 'Market Analysis and Segmentation', duration: '1 hr' },
          { title: 'Brand Management', duration: '45 min' },
          { title: 'Digital Marketing Integration', duration: '1 hr' },
          { title: 'Customer Relationship Management', duration: '1 hr' },
        ]
      },
      {
        title: 'Module 6: Final Project',
        lessons: [
          { title: 'Business Strategy Development', duration: '2 hrs' },
          { title: 'Implementation Planning', duration: '1.5 hrs' },
          { title: 'Presentation and Feedback', duration: '2 hrs' },
        ]
      }
    ],
    highlights: [
      'Learn from real-world case studies and industry examples',
      'Develop comprehensive business strategies for various scenarios',
      'Practice leadership and team management through interactive simulations',
      'Network with other professionals and business leaders',
      'Receive personalized feedback on your strategic thinking and management approach',
      'Earn a recognized certificate in Advanced Business Management'
    ],
    requirements: [
      'Basic understanding of business management principles',
      'Some experience in a business or management role is recommended',
      'Commitment to complete practical assignments and case studies',
      'Willingness to participate in group discussions and collaborative projects'
    ],
    materials: [
      'Comprehensive course workbook with case studies',
      'Strategic planning templates and tools',
      'Access to exclusive management resources library',
      'Interactive business simulation software'
    ],
    reviews: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        date: '3 months ago',
        comment: 'Excellent course with practical insights that I could immediately apply to my management role. The instructor is knowledgeable and engaging.'
      },
      {
        name: 'Michael Chen',
        rating: 5,
        date: '1 month ago',
        comment: 'This course transformed my approach to strategic planning. The case studies were particularly valuable in illustrating complex concepts.'
      },
      {
        name: 'Emily Thompson',
        rating: 4,
        date: '2 months ago',
        comment: 'Very comprehensive curriculum with excellent resources. I especially appreciated the financial decision-making module, though some parts of the course were quite challenging.'
      }
    ]
  },
  // More courses would be defined here
];

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([0]); // Start with first module expanded
  
  const courseId = parseInt(params.id);
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    notFound();
  }
  
  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  // Calculate total course duration
  const totalLessons = course.curriculum.reduce(
    (total, module) => total + module.lessons.length, 0
  );

  return (
    <>
      <Section variant="navy" padding="lg">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Animate type="fadeInLeft">
                <Badge variant="gold" size="lg" className="mb-4">{course.category}</Badge>
                <Heading as="h1" size="2xl" font="serif" className="text-white mb-4">
                  {course.title}
                </Heading>
                <Text color="white" className="mb-6">
                  {course.description}
                </Text>
                
                <div className="flex flex-wrap gap-6 text-white/80 text-sm mb-8">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-gold" />
                    <span>{course.rating} ({course.students} students)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <Text size="sm" color="white">Instructor</Text>
                    <Text color="white" weight="medium">{course.instructor.name}</Text>
                  </div>
                </div>
              </Animate>
            </div>
            
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Animate type="fadeInRight">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-navy-blue text-white flex items-center justify-center shadow-lg hover:bg-royal-blue transition-colors">
                        <Play className="h-8 w-8" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-navy-blue">£{course.discount}</span>
                        {course.discount < course.price && (
                          <span className="text-lg text-gray-500 line-through ml-2">£{course.price}</span>
                        )}
                      </div>
                      <Badge variant="navy">
                        {Math.round(((course.price - course.discount) / course.price) * 100)}% off
                      </Badge>
                    </div>
                    
                    <Button className="w-full mb-4 text-base py-3">
                      Enroll Now
                    </Button>
                    
                    <Button variant="outline" className="w-full mb-6 text-base py-3">
                      Try Free Preview
                    </Button>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Full lifetime access</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Access on mobile, tablet and desktop</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>30-day money-back guarantee</span>
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="mb-8 overflow-x-auto">
                <div className="border-b border-gray-200 flex whitespace-nowrap">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-5 py-3 font-medium text-sm ${
                      activeTab === 'overview'
                        ? 'text-navy-blue border-b-2 border-navy-blue'
                        : 'text-gray-500 hover:text-navy-blue'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`px-5 py-3 font-medium text-sm ${
                      activeTab === 'curriculum'
                        ? 'text-navy-blue border-b-2 border-navy-blue'
                        : 'text-gray-500 hover:text-navy-blue'
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('instructor')}
                    className={`px-5 py-3 font-medium text-sm ${
                      activeTab === 'instructor'
                        ? 'text-navy-blue border-b-2 border-navy-blue'
                        : 'text-gray-500 hover:text-navy-blue'
                    }`}
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-5 py-3 font-medium text-sm ${
                      activeTab === 'reviews'
                        ? 'text-navy-blue border-b-2 border-navy-blue'
                        : 'text-gray-500 hover:text-navy-blue'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
              </div>
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <Heading as="h2" size="lg" className="mb-4">
                      About This Course
                    </Heading>
                    <Text className="whitespace-pre-line">{course.longDescription}</Text>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <Heading as="h2" size="lg" className="mb-4">
                      What You Will Learn
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-navy-blue flex-shrink-0 mt-0.5" />
                          <Text>{highlight}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <Heading as="h2" size="lg" className="mb-4">
                      Requirements
                    </Heading>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index}>
                          <Text>{requirement}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <Heading as="h2" size="lg" className="mb-4">
                      Course Materials
                    </Heading>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.materials.map((material, index) => (
                        <li key={index}>
                          <Text>{material}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <Heading as="h2" size="lg">
                      Course Curriculum
                    </Heading>
                    <div className="text-sm text-gray-500">
                      {totalLessons} lessons • {course.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleModule(moduleIndex)}
                          className="w-full px-5 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="font-medium text-left">{module.title}</div>
                          <ChevronRight className={`h-5 w-5 text-gray-500 transition-transform ${
                            expandedModules.includes(moduleIndex) ? 'rotate-90' : ''
                          }`} />
                        </button>
                        
                        {expandedModules.includes(moduleIndex) && (
                          <div className="divide-y divide-gray-200">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex} 
                                className="px-5 py-3 flex justify-between items-center hover:bg-gray-50"
                              >
                                <div className="flex items-center">
                                  {lesson.preview ? (
                                    <PlayCircle className="h-5 w-5 mr-3 text-navy-blue" />
                                  ) : (
                                    <BookOpen className="h-5 w-5 mr-3 text-gray-400" />
                                  )}
                                  <span>{lesson.title}</span>
                                  {lesson.preview && (
                                    <Badge variant="outline" size="sm" className="ml-3">
                                      Preview
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {lesson.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Instructor Tab */}
              {activeTab === 'instructor' && (
                <div>
                  <Heading as="h2" size="lg" className="mb-6">
                    Meet Your Instructor
                  </Heading>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-navy-blue/10">
                        <User className="h-16 w-16 text-navy-blue/50" />
                      </div>
                    </div>
                    
                    <div>
                      <Heading as="h3" size="md" className="mb-1">
                        {course.instructor.name}
                      </Heading>
                      <Text color="muted" className="mb-4">
                        {course.instructor.title}
                      </Text>
                      <div className="flex items-center mb-4 text-sm">
                        <div className="flex items-center mr-4">
                          <Star className="h-4 w-4 mr-1 text-gold" />
                          <span className="font-medium">{course.rating} Instructor Rating</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1 text-navy-blue" />
                          <span>452 Reviews</span>
                        </div>
                      </div>
                      <Text className="mb-6">
                        {course.instructor.bio}
                      </Text>
                      <Button variant="outline" size="sm">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <Heading as="h2" size="lg">
                      Student Reviews
                    </Heading>
                    <div className="flex items-center mt-2 md:mt-0">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'text-gold' : 'text-gray-300'}`} 
                            fill={star <= Math.round(course.rating) ? 'currentColor' : 'none'} 
                          />
                        ))}
                      </div>
                      <span className="font-medium text-lg">{course.rating}</span>
                      <span className="text-gray-500 ml-1">({course.students} students)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {course.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                              <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div>
                              <div className="font-medium">{review.name}</div>
                              <div className="text-gray-500 text-sm">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= review.rating ? 'text-gold' : 'text-gray-300'}`} 
                                fill={star <= review.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                        <Text>{review.comment}</Text>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button variant="outline">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <Card className="mb-6">
                  <div className="p-6">
                    <Heading as="h3" size="md" className="mb-4">
                      Related Courses
                    </Heading>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 mr-3"></div>
                        <div>
                          <Text size="sm" weight="medium" className="mb-1 line-clamp-2">
                            Strategic Leadership & Management
                          </Text>
                          <div className="flex items-center text-sm">
                            <Star className="h-3 w-3 text-gold mr-1" />
                            <span>4.8</span>
                            <span className="text-gray-500 ml-2">£549</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 mr-3"></div>
                        <div>
                          <Text size="sm" weight="medium" className="mb-1 line-clamp-2">
                            Financial Management for Executives
                          </Text>
                          <div className="flex items-center text-sm">
                            <Star className="h-3 w-3 text-gold mr-1" />
                            <span>4.7</span>
                            <span className="text-gray-500 ml-2">£599</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 mr-3"></div>
                        <div>
                          <Text size="sm" weight="medium" className="mb-1 line-clamp-2">
                            Marketing Strategy & Planning
                          </Text>
                          <div className="flex items-center text-sm">
                            <Star className="h-3 w-3 text-gold mr-1" />
                            <span>4.9</span>
                            <span className="text-gray-500 ml-2">£499</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button.Link href="/courses" variant="link" className="mt-4 w-full justify-center">
                      View All Courses
                    </Button.Link>
                  </div>
                </Card>
                
                <Card>
                  <div className="p-6">
                    <Heading as="h3" size="md" className="mb-4">
                      Course Resources
                    </Heading>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-between">
                        <span>Course Syllabus</span>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        <span>Sample Materials</span>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section variant="navy" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Heading as="h2" size="xl" font="serif" className="text-white mb-6">
              Ready to Advance Your Business Career?
            </Heading>
            <Text color="white" size="lg" className="mb-8 max-w-2xl mx-auto">
              Join {course.students}+ students who have already enrolled in this course and take the next step in your professional journey.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gold">
                Enroll Now for £{course.discount}
              </Button>
              <Button.Link href="/courses" size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Browse Other Courses
              </Button.Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 