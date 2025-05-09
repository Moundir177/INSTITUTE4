'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Users, Award, BookOpen, ChevronRight, Check, Calendar, User, MapPin } from 'lucide-react';

// Sample course data - in a real application, this would come from a database or API
const coursesData = [
  {
    id: 1,
    title: 'Business Management',
    slug: 'business-management',
    category: 'Business',
    level: 'Intermediate',
    duration: '12 Weeks',
    price: '£1,499',
    rating: 4.8,
    students: 1245,
    image: '/business-management.jpg',
    description: 'Master the principles of effective business management and leadership to drive organizational success.',
    highlights: [
      'Strategic planning and execution',
      'Operational management techniques',
      'Team leadership and development',
      'Financial decision-making',
      'Project management fundamentals',
      'Risk assessment and mitigation'
    ],
    overview: `This comprehensive course is designed for professionals looking to enhance their management skills and advance their careers in business leadership roles. You'll learn essential principles and practical techniques that can be immediately applied in the workplace.

The Business Management course provides a solid foundation in key management disciplines, including strategic planning, operations, leadership, and financial management. Through case studies, interactive discussions, and practical assignments, you'll develop the skills needed to effectively manage teams and drive business growth.`,
    curriculum: [
      {
        title: 'Introduction to Business Management',
        lessons: [
          'Understanding Management Principles',
          'The Role of a Manager in Modern Organizations',
          'Management Styles and Approaches'
        ]
      },
      {
        title: 'Strategic Planning and Implementation',
        lessons: [
          'Developing Vision and Mission Statements',
          'Setting Objectives and Goals',
          'Strategic Analysis Tools',
          'Implementing and Evaluating Strategies'
        ]
      },
      {
        title: 'Leadership and Team Management',
        lessons: [
          'Leadership Theories and Styles',
          'Building and Managing High-Performing Teams',
          'Conflict Resolution and Negotiation',
          'Effective Communication in Management'
        ]
      },
      {
        title: 'Financial Management',
        lessons: [
          'Understanding Financial Statements',
          'Budgeting and Financial Planning',
          'Cost Analysis and Control',
          'Investment Decision Making'
        ]
      },
      {
        title: 'Operations Management',
        lessons: [
          'Process Design and Analysis',
          'Quality Management Systems',
          'Supply Chain Management',
          'Operational Efficiency and Improvement'
        ]
      }
    ],
    instructors: [
      {
        name: 'Dr. Richard Thompson',
        role: 'Lead Instructor',
        bio: 'Former CEO with over 20 years of industry experience and a PhD in Business Administration',
        initial: 'RT'
      },
      {
        name: 'Sarah Johnson',
        role: 'Course Facilitator',
        bio: 'MBA with specialization in Strategic Management and 15 years in corporate leadership roles',
        initial: 'SJ'
      }
    ],
    schedules: [
      {
        type: 'Online',
        dates: 'Flexible start dates',
        sessions: 'Self-paced with weekly live sessions'
      },
      {
        type: 'In-Person',
        dates: 'January 15, 2024 - April 9, 2024',
        sessions: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM'
      }
    ]
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    slug: 'data-science-fundamentals',
    category: 'Technology',
    level: 'Beginner',
    duration: '16 Weeks',
    price: '£1,699',
    rating: 4.9,
    students: 987,
    image: '/data-science.jpg',
    description: 'Learn essential data analysis and visualization techniques for making data-driven decisions.',
    highlights: [
      'Python programming for data analysis',
      'Statistical methods and applications',
      'Data visualization techniques',
      'Machine learning basics',
      'Data cleaning and preprocessing',
      'Exploratory data analysis'
    ],
    overview: `This beginner-friendly course introduces you to the exciting world of data science and equips you with the fundamental skills needed to analyze and interpret complex data sets. No prior programming experience is required, making this the perfect starting point for your data science journey.

Throughout the course, you'll learn how to use Python for data analysis, apply statistical methods, create compelling visualizations, and build simple machine learning models. By the end, you'll have a solid foundation in data science principles and be ready to tackle real-world data challenges.`,
    curriculum: [
      {
        title: 'Introduction to Data Science',
        lessons: [
          'What is Data Science?',
          'The Data Science Process',
          'Setting Up Your Development Environment',
          'Introduction to Jupyter Notebooks'
        ]
      },
      {
        title: 'Python Programming Fundamentals',
        lessons: [
          'Python Basics and Syntax',
          'Data Structures in Python',
          'Functions and Control Flow',
          'Working with Files and APIs'
        ]
      },
      {
        title: 'Data Analysis with Python',
        lessons: [
          'Introduction to NumPy and Pandas',
          'Data Cleaning and Preprocessing',
          'Exploratory Data Analysis',
          'Advanced Data Manipulation'
        ]
      },
      {
        title: 'Data Visualization',
        lessons: [
          'Visualization Principles',
          'Creating Charts with Matplotlib',
          'Interactive Visualizations with Plotly',
          'Building Dashboards'
        ]
      },
      {
        title: 'Introduction to Machine Learning',
        lessons: [
          'Machine Learning Concepts',
          'Supervised Learning Algorithms',
          'Unsupervised Learning Algorithms',
          'Model Evaluation and Improvement'
        ]
      }
    ],
    instructors: [
      {
        name: 'Dr. Emily Chen',
        role: 'Lead Instructor',
        bio: 'PhD in Computer Science with specialization in Machine Learning, former Data Scientist at Google',
        initial: 'EC'
      },
      {
        name: 'Michael Rodriguez',
        role: 'Teaching Assistant',
        bio: 'MSc in Data Science with 5 years of industry experience in data analytics',
        initial: 'MR'
      }
    ],
    schedules: [
      {
        type: 'Online',
        dates: 'Flexible start dates',
        sessions: 'Self-paced with weekly live sessions'
      },
      {
        type: 'In-Person',
        dates: 'February 5, 2024 - May 27, 2024',
        sessions: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM'
      }
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    slug: 'digital-marketing-strategy',
    category: 'Marketing',
    level: 'All Levels',
    duration: '10 Weeks',
    price: '£1,299',
    rating: 4.7,
    students: 1532,
    image: '/digital-marketing.jpg',
    description: 'Develop comprehensive digital marketing strategies for business growth and customer engagement.',
    highlights: [
      'Social media marketing',
      'SEO & content marketing',
      'Email campaign optimization',
      'Analytics & performance tracking',
      'Digital advertising strategies',
      'Consumer behavior analysis'
    ],
    overview: `This comprehensive digital marketing course provides you with the knowledge and skills to create effective online marketing strategies across multiple channels. Suitable for beginners and experienced marketers alike, the curriculum covers all major aspects of digital marketing.

You'll learn how to build and manage successful campaigns across social media, email, search engines, and other digital platforms. With a focus on data-driven decision making, you'll also master the art of analyzing campaign performance and optimizing for better results.`,
    curriculum: [
      {
        title: 'Digital Marketing Fundamentals',
        lessons: [
          'The Digital Marketing Landscape',
          'Building a Digital Marketing Strategy',
          'Understanding Customer Journey',
          'Digital Marketing Channels Overview'
        ]
      },
      {
        title: 'Content Marketing',
        lessons: [
          'Content Strategy Development',
          'Content Creation and Curation',
          'Content Distribution Channels',
          'Measuring Content Performance'
        ]
      },
      {
        title: 'Social Media Marketing',
        lessons: [
          'Social Media Strategy',
          'Platform-Specific Tactics',
          'Community Management',
          'Social Media Analytics'
        ]
      },
      {
        title: 'Search Engine Optimization',
        lessons: [
          'SEO Fundamentals',
          'On-Page and Off-Page SEO',
          'Technical SEO',
          'Local SEO Strategies'
        ]
      },
      {
        title: 'Digital Advertising',
        lessons: [
          'PPC Advertising',
          'Display Advertising',
          'Social Media Advertising',
          'Ad Performance Optimization'
        ]
      }
    ],
    instructors: [
      {
        name: 'Alex Turner',
        role: 'Lead Instructor',
        bio: 'Former Digital Marketing Director with 12 years of experience working with global brands',
        initial: 'AT'
      },
      {
        name: 'Olivia Martinez',
        role: 'Social Media Specialist',
        bio: 'Social media strategist with expertise in platform-specific marketing campaigns',
        initial: 'OM'
      }
    ],
    schedules: [
      {
        type: 'Online',
        dates: 'Flexible start dates',
        sessions: 'Self-paced with bi-weekly live sessions'
      },
      {
        type: 'In-Person',
        dates: 'March 10, 2024 - May 19, 2024',
        sessions: 'Tuesdays and Fridays, 6:00 PM - 8:00 PM'
      }
    ]
  }
];

export default function CourseDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the course with the matching slug
  const course = coursesData.find(course => course.slug === slug);
  
  // If course not found, show a message
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-navy-blue mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/courses" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
        >
          Browse All Courses
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Course Header */}
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <Link 
                href="/courses" 
                className="text-blue-100 hover:text-white mb-4 md:mb-0 flex items-center"
              >
                <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
                Back to Courses
              </Link>
              <div className="flex items-center">
                <span className="bg-red text-white text-xs font-bold px-2 py-1 rounded">
                  {course.category}
                </span>
                <span className="ml-2 bg-white/10 text-white text-xs px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {course.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              {course.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center text-white">
                <Clock className="h-5 w-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="h-5 w-5 mr-2" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center text-white">
                <div className="flex mr-2">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < Math.floor(course.rating) ? 'text-amber-500' : 'text-white/30'}>★</span>
                  ))}
                </div>
                <span>{course.rating} rating</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="#enroll" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red text-white font-medium hover:bg-red/90 transition-colors"
              >
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-navy-blue mb-6">Course Overview</h2>
                <div className="text-gray-600 whitespace-pre-line">
                  {course.overview}
                </div>
                
                <h3 className="text-xl font-bold text-navy-blue mt-8 mb-4">Course Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Curriculum */}
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-navy-blue mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <h3 className="text-lg font-bold text-navy-blue mb-3">
                        Module {moduleIndex + 1}: {module.title}
                      </h3>
                      <ul className="space-y-2 pl-6">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="text-gray-600 flex items-center">
                            <BookOpen className="h-4 w-4 text-navy-blue mr-2" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Instructors */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-navy-blue mb-6">Course Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-blue to-royal-blue mr-4 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-white">{instructor.initial}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-blue">{instructor.name}</h3>
                        <p className="text-red text-sm mb-2">{instructor.role}</p>
                        <p className="text-gray-600 text-sm">{instructor.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Course Info Card */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8 sticky top-24">
                <div className="text-3xl font-bold text-navy-blue mb-4">
                  {course.price}
                </div>
                
                <Link 
                  href="#enroll" 
                  id="enroll"
                  className="block w-full py-3 px-4 bg-red text-white text-center font-medium rounded-lg hover:bg-red/90 transition-colors mb-4"
                >
                  Enroll Now
                </Link>
                
                <Link 
                  href="/contact" 
                  className="block w-full py-3 px-4 border border-navy-blue text-navy-blue text-center font-medium rounded-lg hover:bg-navy-blue/5 transition-colors mb-6"
                >
                  Ask a Question
                </Link>
                
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <h3 className="font-bold text-navy-blue mb-4">Course Includes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-navy-blue mr-3" />
                      <span>{course.duration} of content</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <BookOpen className="h-5 w-5 text-navy-blue mr-3" />
                      <span>{course.curriculum.reduce((total, module) => total + module.lessons.length, 0)} lessons</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Award className="h-5 w-5 text-navy-blue mr-3" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <User className="h-5 w-5 text-navy-blue mr-3" />
                      <span>1-on-1 instructor support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-bold text-navy-blue mb-4">Course Schedules</h3>
                  <div className="space-y-4">
                    {course.schedules.map((schedule, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-bold text-navy-blue mb-1">{schedule.type}</div>
                        <div className="flex items-start mb-1">
                          <Calendar className="h-4 w-4 text-red mr-2 mt-1" />
                          <span className="text-gray-600 text-sm">{schedule.dates}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 text-red mr-2 mt-1" />
                          <span className="text-gray-600 text-sm">{schedule.sessions}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Related Courses */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-navy-blue mb-4">Related Courses</h3>
                <div className="space-y-4">
                  {coursesData
                    .filter(relatedCourse => relatedCourse.category === course.category && relatedCourse.id !== course.id)
                    .slice(0, 2)
                    .map(relatedCourse => (
                      <Link key={relatedCourse.id} href={`/courses/${relatedCourse.slug}`} className="block">
                        <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <h4 className="font-bold text-navy-blue mb-1">{relatedCourse.title}</h4>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedCourse.description}</p>
                          <div className="flex justify-between text-sm">
                            <span className="text-red font-medium">{relatedCourse.price}</span>
                            <span className="text-gray-500">{relatedCourse.duration}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Skills?</h2>
            <p className="text-blue-100 mb-8">
              Enroll now and take the first step towards mastering {course.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#enroll" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red text-white font-medium hover:bg-red/90 transition-colors"
              >
                Enroll Now
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 