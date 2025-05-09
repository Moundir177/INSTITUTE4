'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, X, Check, Info, AlertCircle } from 'lucide-react';

// Sample course data (in a real application, this would come from a database or API)
const coursesData = [
  {
    id: 1,
    title: 'Business Management',
    slug: 'business-management',
    category: 'Business',
    level: 'Intermediate',
    duration: '12 Weeks',
    format: 'Online & In-Person',
    studyTime: '8-10 hours/week',
    price: '£1,499',
    rating: 4.8,
    certification: 'Recognized Professional Certificate',
    prerequisites: 'Basic understanding of business concepts',
    features: [
      'Strategic planning and execution',
      'Operational management techniques',
      'Team leadership and development',
      'Financial decision-making',
      'Project management fundamentals',
      'Risk assessment and mitigation'
    ],
    career: 'Business Manager, Operations Manager, Team Leader, Project Manager',
    support: '1-on-1 mentoring, career counseling, networking events',
    instructors: 2
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    slug: 'data-science-fundamentals',
    category: 'Technology',
    level: 'Beginner',
    duration: '16 Weeks',
    format: 'Online & In-Person',
    studyTime: '10-12 hours/week',
    price: '£1,699',
    rating: 4.9,
    certification: 'Professional Data Science Certificate',
    prerequisites: 'Basic mathematical knowledge',
    features: [
      'Python programming for data analysis',
      'Statistical methods and applications',
      'Data visualization techniques',
      'Machine learning basics',
      'Data cleaning and preprocessing',
      'Exploratory data analysis'
    ],
    career: 'Data Analyst, Junior Data Scientist, Business Intelligence Analyst',
    support: '1-on-1 technical support, career counseling, project reviews',
    instructors: 2
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    slug: 'digital-marketing-strategy',
    category: 'Marketing',
    level: 'All Levels',
    duration: '10 Weeks',
    format: 'Online & In-Person',
    studyTime: '6-8 hours/week',
    price: '£1,299',
    rating: 4.7,
    certification: 'Digital Marketing Professional Certificate',
    prerequisites: 'None',
    features: [
      'Social media marketing',
      'SEO & content marketing',
      'Email campaign optimization',
      'Analytics & performance tracking',
      'Digital advertising strategies',
      'Consumer behavior analysis'
    ],
    career: 'Digital Marketing Specialist, Social Media Manager, SEO Specialist',
    support: '1-on-1 campaign reviews, career counseling, industry connections',
    instructors: 2
  },
  {
    id: 4,
    title: 'Project Management Professional',
    slug: 'project-management',
    category: 'Business',
    level: 'Intermediate',
    duration: '14 Weeks',
    format: 'Online & In-Person',
    studyTime: '8-10 hours/week',
    price: '£1,599',
    rating: 4.8,
    certification: 'Professional Project Management Certificate',
    prerequisites: 'Basic project experience recommended',
    features: [
      'Project planning and scheduling',
      'Resource allocation and management',
      'Risk management strategies',
      'Stakeholder communication',
      'Budget management and forecasting',
      'Agile and waterfall methodologies'
    ],
    career: 'Project Manager, Program Coordinator, Project Coordinator',
    support: '1-on-1 mentoring, career counseling, PMI exam preparation',
    instructors: 3
  },
  {
    id: 5,
    title: 'User Experience Design',
    slug: 'ux-design',
    category: 'Design',
    level: 'Beginner to Intermediate',
    duration: '12 Weeks',
    format: 'Online & In-Person',
    studyTime: '10-12 hours/week',
    price: '£1,599',
    rating: 4.9,
    certification: 'UX Design Professional Certificate',
    prerequisites: 'Basic design skills helpful but not required',
    features: [
      'User research and testing',
      'Information architecture',
      'Wireframing and prototyping',
      'Interaction design principles',
      'Visual design fundamentals',
      'Usability evaluation'
    ],
    career: 'UX Designer, UI Designer, Product Designer, Interaction Designer',
    support: 'Portfolio reviews, career counseling, industry networking',
    instructors: 2
  },
  {
    id: 6,
    title: 'Financial Analysis and Reporting',
    slug: 'financial-analysis',
    category: 'Finance',
    level: 'Intermediate',
    duration: '12 Weeks',
    format: 'Online & In-Person',
    studyTime: '8-10 hours/week',
    price: '£1,599',
    rating: 4.7,
    certification: 'Financial Analysis Professional Certificate',
    prerequisites: 'Basic understanding of accounting principles',
    features: [
      'Financial statement analysis',
      'Ratio analysis and interpretation',
      'Cash flow analysis',
      'Financial modeling',
      'Forecasting techniques',
      'Investment evaluation'
    ],
    career: 'Financial Analyst, Investment Analyst, Financial Advisor',
    support: '1-on-1 mentoring, career counseling, industry connections',
    instructors: 2
  }
];

export default function CourseComparison() {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const maxComparisons = 3; // Maximum number of courses to compare
  
  const handleSelectCourse = (courseId: number) => {
    if (selectedCourses.includes(courseId)) {
      // Remove course if already selected
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else if (selectedCourses.length < maxComparisons) {
      // Add course if not already at max
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };
  
  const handleRemoveCourse = (courseId: number) => {
    setSelectedCourses(selectedCourses.filter(id => id !== courseId));
  };
  
  const selectedCoursesData = coursesData.filter(course => selectedCourses.includes(course.id));
  
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
              Course Comparison
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Compare our courses side by side to find the perfect match for your career goals
            </motion.p>
          </div>
        </div>
      </section>

      {/* Course Selection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Course Selection */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-bold text-navy-blue mb-4">Select Courses to Compare</h2>
              <p className="text-gray-600 mb-6">Choose up to {maxComparisons} courses to compare their features side by side.</p>
              
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white text-left"
                >
                  <span>{selectedCourses.length === 0 ? 'Select courses to compare' : `${selectedCourses.length} course${selectedCourses.length > 1 ? 's' : ''} selected`}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="max-h-60 overflow-y-auto p-2">
                      {coursesData.map((course) => (
                        <div 
                          key={course.id} 
                          className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                          onClick={() => handleSelectCourse(course.id)}
                        >
                          <input 
                            type="checkbox" 
                            checked={selectedCourses.includes(course.id)}
                            onChange={() => {}}
                            className="h-4 w-4 text-navy-blue border-gray-300 rounded"
                          />
                          <div className="ml-3">
                            <p className="text-gray-900 font-medium">{course.title}</p>
                            <p className="text-sm text-gray-500">{course.category} | {course.level}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-2 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {selectedCourses.length}/{maxComparisons} selected
                      </span>
                      <button 
                        onClick={() => setDropdownOpen(false)}
                        className="px-3 py-1 bg-navy-blue text-white text-sm rounded hover:bg-royal-blue transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Selected Course Pills */}
              {selectedCourses.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedCoursesData.map((course) => (
                    <div 
                      key={course.id}
                      className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                    >
                      <span className="text-sm text-navy-blue">{course.title}</span>
                      <button 
                        onClick={() => handleRemoveCourse(course.id)}
                        className="ml-2 text-gray-500 hover:text-red focus:outline-none"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Comparison Table */}
            {selectedCourses.length > 0 ? (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Feature
                        </th>
                        {selectedCoursesData.map((course) => (
                          <th key={course.id} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {course.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {/* Category */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Category
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.category}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Level */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Level
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.level}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Duration */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Duration
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.duration}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Format */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Format
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.format}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Study Time */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Weekly Study Time
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.studyTime}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Price */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Price
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red">
                            {course.price}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Rating */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Student Rating
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="text-amber-500 mr-1">★</span>
                              <span>{course.rating}/5</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      
                      {/* Certification */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Certification
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.certification}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Prerequisites */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Prerequisites
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.prerequisites}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Key Features */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                          Key Features
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 text-sm text-gray-500">
                            <ul className="list-disc pl-5 space-y-1">
                              {course.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      
                      {/* Career Paths */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                          Career Paths
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 text-sm text-gray-500">
                            {course.career}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Support */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                          Student Support
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 text-sm text-gray-500">
                            {course.support}
                          </td>
                        ))}
                      </tr>
                      
                      {/* Actions */}
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                          
                        </td>
                        {selectedCoursesData.map((course) => (
                          <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Link 
                              href={`/courses/${course.slug}`} 
                              className="inline-flex items-center px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                            >
                              View Course
                            </Link>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-navy-blue/10 rounded-full mb-4">
                  <Info className="h-8 w-8 text-navy-blue" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">No Courses Selected</h3>
                <p className="text-gray-600 mb-6">Please select at least one course to see a comparison.</p>
              </div>
            )}
            
            {/* Recommendation */}
            {selectedCourses.length > 0 && (
              <div className="mt-8 bg-navy-blue/5 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-navy-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium text-navy-blue mb-2">Need help deciding?</h3>
                    <p className="text-gray-600">
                      Our student advisors can help you choose the perfect course for your goals and background. 
                      Schedule a free consultation to get personalized advice.
                    </p>
                    <div className="mt-4">
                      <Link 
                        href="/contact?reason=course-advice" 
                        className="inline-flex items-center px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                      >
                        Get Expert Advice
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 