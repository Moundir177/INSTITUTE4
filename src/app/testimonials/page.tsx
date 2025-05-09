'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight, ChevronLeft, Play, Users, MessageCircle } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director',
    company: 'Global Media',
    course: 'Digital Marketing Strategy',
    image: null, // In a real app, this would be an image URL
    testimony: 'The Digital Marketing Strategy course at Britannia Institute transformed my approach to marketing. The instructors were industry veterans who shared practical insights that I immediately applied to my campaigns. The ROI-focused approach and emphasis on analytics helped me develop strategies that have increased our conversion rates by 34% in just three months.',
    rating: 5,
    videoUrl: null
  },
  {
    id: 2,
    name: 'James Wilson',
    position: 'Data Analyst',
    company: 'Tech Solutions Ltd',
    course: 'Data Science Fundamentals',
    image: null,
    testimony: 'As someone transitioning careers from finance to data science, I was concerned about the learning curve. The Data Science course structured the content perfectly for beginners while still covering advanced concepts. The hands-on projects were particularly valuable, and I was able to build a portfolio that helped me land my current job within two months of course completion.',
    rating: 5,
    videoUrl: null
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    position: 'Operations Manager',
    company: 'Retail Innovations',
    course: 'Business Management',
    image: null,
    testimony: 'The Business Management course at Britannia Institute provided exactly what I needed to advance in my career. The comprehensive curriculum covered everything from strategic planning to team leadership. What set this course apart was the case-study approach and networking opportunities with professionals across various industries. I was promoted to Operations Manager shortly after completing the course.',
    rating: 5,
    videoUrl: null
  },
  {
    id: 4,
    name: 'Michael Chen',
    position: 'Project Manager',
    company: 'Construction Partners',
    course: 'Project Management Professional',
    image: null,
    testimony: 'After 10 years in construction, I needed formal project management training to advance my career. The PMP course at Britannia Institute was comprehensive and practical. The instructors brought real-world scenarios into the classroom, and the exam preparation was excellent. I passed the PMP exam on my first attempt and have since led projects that increased our company\'s efficiency by 25%.',
    rating: 4,
    videoUrl: null
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    position: 'HR Director',
    company: 'Global Services Inc.',
    course: 'Human Resources Management',
    image: null,
    testimony: 'The HR Management program exceeded my expectations. The curriculum was up-to-date with current employment laws and best practices. The course\'s focus on creating positive workplace cultures and effective talent management strategies has been invaluable. I\'ve implemented several initiatives from the course that have reduced our turnover rate by 20% and improved employee satisfaction scores.',
    rating: 5,
    videoUrl: null
  },
  {
    id: 6,
    name: 'David Okonkwo',
    position: 'Financial Analyst',
    company: 'Investment Partners',
    course: 'Financial Analysis and Reporting',
    image: null,
    testimony: 'As an international student, I was impressed by how welcoming Britannia Institute was. The Financial Analysis course was rigorous and exactly aligned with industry standards. The practical exercises using real market data were particularly valuable. The skills I gained helped me secure a position at a prestigious firm, competing against graduates from traditional universities.',
    rating: 5,
    videoUrl: null
  },
  {
    id: 7,
    name: 'Emma Lewis',
    position: 'UX Designer',
    company: 'Digital Creations',
    course: 'User Experience Design',
    image: null,
    testimony: 'Transitioning from graphic design to UX was challenging until I found Britannia Institute\'s UX Design course. The curriculum perfectly balanced theory and practice. I particularly appreciated the portfolio reviews and mentor feedback. The final project became the centerpiece of my portfolio, which has received praise from every interviewer I\'ve met with.',
    rating: 4,
    videoUrl: null
  },
  {
    id: 8,
    name: 'Robert Taylor',
    position: 'Supply Chain Manager',
    company: 'Global Logistics',
    course: 'Supply Chain Management',
    image: null,
    testimony: 'The Supply Chain Management course gave me a comprehensive understanding of modern logistics challenges and solutions. The simulation exercises were particularly valuable, allowing us to make decisions and see their impact on the entire supply chain. I\'ve used these insights to optimize our distribution network, resulting in 15% cost reduction and improved delivery times.',
    rating: 5,
    videoUrl: null
  }
];

// Success statistics
const successStats = [
  { value: '94%', label: 'Employment Rate' },
  { value: '85%', label: 'Career Advancement' },
  { value: '98%', label: 'Student Satisfaction' },
  { value: '£12k', label: 'Average Salary Increase' }
];

// Featured video testimonials (in a real app, these would have actual video URLs)
const videoTestimonials = [
  {
    id: 1,
    name: 'Thomas Wright',
    position: 'Software Developer',
    company: 'Tech Innovators',
    course: 'Full-Stack Web Development',
    thumbnail: null, // In a real app, this would be an image URL
    videoUrl: '#'
  },
  {
    id: 2,
    name: 'Jessica Patel',
    position: 'Sustainability Consultant',
    company: 'Green Future',
    course: 'Environmental Management',
    thumbnail: null,
    videoUrl: '#'
  },
  {
    id: 3,
    name: 'Daniel Kim',
    position: 'Digital Strategist',
    company: 'Creative Solutions',
    course: 'Digital Marketing Strategy',
    thumbnail: null,
    videoUrl: '#'
  }
];

// Success by industry data for the chart
const industrySuccess = [
  { industry: 'Technology', percentage: 96 },
  { industry: 'Finance', percentage: 92 },
  { industry: 'Healthcare', percentage: 89 },
  { industry: 'Marketing', percentage: 94 },
  { industry: 'Education', percentage: 87 },
  { industry: 'Manufacturing', percentage: 85 }
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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
              Student Success Stories
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Hear from our alumni about how Britannia Institute helped transform their careers
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-gold" fill="#FFD700" />
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-100 mt-2"
            >
              4.9 out of 5 based on 500+ student reviews
            </motion.p>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-12 text-center">
            Our Impact on Student Careers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6 text-center">
            Featured Video Testimonials
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Watch our students share their personal journeys and how our courses have impacted their professional lives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-48 bg-navy-blue/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red/90 flex items-center justify-center cursor-pointer hover:bg-red transition-colors">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-blue">{video.name}</h3>
                  <p className="text-red text-sm">{video.position} at {video.company}</p>
                  <p className="text-gray-600 text-sm mt-1">Course: {video.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-12 text-center">
            What Our Graduates Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-navy-blue/10 mr-4 flex items-center justify-center">
                    <span className="font-bold text-navy-blue">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-blue">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-amber-500 mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4" 
                      fill={i < testimonial.rating ? "#FFD700" : "#E5E7EB"}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Course: {testimonial.course}</span>
                </div>
                <div className="relative pl-8 text-gray-600">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-navy-blue/20" />
                  <p className="italic">{testimonial.testimony}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-navy-blue" />
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === index
                      ? 'bg-navy-blue text-white'
                      : 'bg-gray-100 text-navy-blue hover:bg-gray-200'
                  } transition-colors`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-navy-blue" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success by Industry */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-12 text-center">
            Graduate Success by Industry
          </h2>

          <div className="max-w-4xl mx-auto">
            {industrySuccess.map((industry, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-navy-blue">{industry.industry}</span>
                  <span className="font-medium text-navy-blue">{industry.percentage}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${industry.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-navy-blue to-royal-blue rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
              Share Your Success Story
            </h2>
            <p className="text-gray-600 mb-8">
              Are you a Britannia Institute graduate? We'd love to hear about your experience and share your success story with future students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?reason=success-story" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Submit Your Story
              </Link>
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-navy-blue text-navy-blue font-medium hover:bg-navy-blue/5 transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Alumni
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-blue-100 mb-8">
              Join thousands of students who have transformed their careers with Britannia Institute
            </p>
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
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 