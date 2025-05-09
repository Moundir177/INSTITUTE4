'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Briefcase, GraduationCap, Mail, Globe, 
  Linkedin, Twitter, ChevronDown, Filter, ArrowUpRight
} from 'lucide-react';

// Team member departments
const departments = [
  { id: 'all', name: 'All Departments' },
  { id: 'leadership', name: 'Leadership Team' },
  { id: 'academic', name: 'Academic Faculty' },
  { id: 'admissions', name: 'Admissions & Support' },
  { id: 'operations', name: 'Operations' },
  { id: 'career', name: 'Career Services' }
];

// Team member data
const teamData = [
  {
    id: 1,
    name: 'Dr. Benjamin Clark',
    title: 'Director',
    department: 'leadership',
    image: null, // In a real app, this would be an image URL
    bio: 'Dr. Clark has over 20 years of experience in higher education and previously served as the Dean of Business at Oxford University. He holds a PhD in Educational Leadership and has published numerous papers on professional education.',
    expertise: ['Educational Leadership', 'Strategic Planning', 'Higher Education Management'],
    education: 'PhD in Educational Leadership, University of Cambridge',
    email: 'b.clark@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/benjaminclark',
    isFeatured: true
  },
  {
    id: 2,
    name: 'Professor Sarah Williams',
    title: 'Head of Business Faculty',
    department: 'academic',
    image: null,
    bio: 'Professor Williams specializes in business strategy and entrepreneurship. With 15 years of industry experience at leading consulting firms before joining academia, she brings practical insights to her teaching and research.',
    expertise: ['Business Strategy', 'Entrepreneurship', 'Corporate Innovation'],
    education: 'MBA, Harvard Business School; PhD in Business Administration, London School of Economics',
    email: 's.williams@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    isFeatured: true
  },
  {
    id: 3,
    name: 'Dr. Michael Zhang',
    title: 'Head of Data Science Department',
    department: 'academic',
    image: null,
    bio: 'Dr. Zhang is a data science expert with experience in both industry and academia. He previously worked as a Lead Data Scientist at Google and has published extensive research on machine learning applications.',
    expertise: ['Machine Learning', 'Artificial Intelligence', 'Big Data Analytics'],
    education: 'PhD in Computer Science, MIT; MSc in Statistics, Stanford University',
    email: 'm.zhang@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/michaelzhang',
    twitter: 'https://twitter.com/drmichaelzhang',
    isFeatured: true
  },
  {
    id: 4,
    name: 'Emma Thompson',
    title: 'Director of Admissions',
    department: 'admissions',
    image: null,
    bio: 'Emma leads our admissions team with enthusiasm and dedication to student success. She has transformed our admissions process to be more student-centered and accessible.',
    expertise: ['Student Recruitment', 'International Education', 'Educational Consulting'],
    education: 'MA in Higher Education Administration, University College London',
    email: 'e.thompson@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/emmathompson',
    isFeatured: false
  },
  {
    id: 5,
    name: 'Robert Johnson',
    title: 'Chief Operating Officer',
    department: 'leadership',
    image: null,
    bio: 'Robert oversees all operational aspects of Britannia Institute, ensuring excellence in service delivery and campus facilities. He brings 18 years of experience in educational operations management.',
    expertise: ['Operations Management', 'Strategic Planning', 'Process Optimization'],
    education: 'MBA, London Business School',
    email: 'r.johnson@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/robertjohnson',
    isFeatured: false
  },
  {
    id: 6,
    name: 'Dr. Olivia Martinez',
    title: 'Professor of Digital Marketing',
    department: 'academic',
    image: null,
    bio: 'Dr. Martinez is an expert in digital marketing strategies with particular focus on social media analytics and content marketing. She has consulted for several Fortune 500 companies.',
    expertise: ['Digital Marketing', 'Social Media Strategy', 'Content Marketing'],
    education: 'PhD in Marketing, University of Manchester; MBA, IE Business School',
    email: 'o.martinez@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/oliviamartinez',
    twitter: 'https://twitter.com/dromartinez',
    isFeatured: false
  },
  {
    id: 7,
    name: 'James Wilson',
    title: 'Director of Career Services',
    department: 'career',
    image: null,
    bio: 'James leads our career services department, helping students transition successfully to professional roles. He has established partnerships with over 100 companies for internship and job placement opportunities.',
    expertise: ['Career Counseling', 'Corporate Partnerships', 'Professional Development'],
    education: 'MSc in Human Resources Management, University of Edinburgh',
    email: 'j.wilson@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/jameswilson',
    isFeatured: false
  },
  {
    id: 8,
    name: 'Dr. Aisha Patel',
    title: 'Professor of Project Management',
    department: 'academic',
    image: null,
    bio: 'Dr. Patel specializes in project management methodologies with particular expertise in agile and hybrid approaches. She has led major transformation projects in the finance and technology sectors.',
    expertise: ['Project Management', 'Agile Methodologies', 'Organizational Change'],
    education: 'PhD in Management Science, Imperial College London; PMP Certification',
    email: 'a.patel@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/aishapatel',
    isFeatured: false
  },
  {
    id: 9,
    name: 'Daniel Kim',
    title: 'Student Support Coordinator',
    department: 'admissions',
    image: null,
    bio: 'Daniel ensures that all students receive the support they need throughout their educational journey at Britannia Institute. He leads initiatives for international student integration and academic support services.',
    expertise: ['Student Welfare', 'Academic Support', 'International Student Services'],
    education: 'MA in International Education, King\'s College London',
    email: 'd.kim@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/danielkim',
    isFeatured: false
  },
  {
    id: 10,
    name: 'Sophie Anderson',
    title: 'Finance Manager',
    department: 'operations',
    image: null,
    bio: 'Sophie manages the financial operations of Britannia Institute, handling budgeting, financial aid, and accounting processes. Her strategic financial planning has contributed to the institute\'s sustainable growth.',
    expertise: ['Financial Management', 'Budgeting', 'Educational Finance'],
    education: 'MSc in Finance, Durham University; ACCA Qualification',
    email: 's.anderson@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/sophieanderson',
    isFeatured: false
  },
  {
    id: 11,
    name: 'Professor David Reynolds',
    title: 'Professor of Finance',
    department: 'academic',
    image: null,
    bio: 'Professor Reynolds brings 25 years of experience in investment banking and corporate finance to his teaching. His research focuses on financial modeling and investment strategies for emerging markets.',
    expertise: ['Corporate Finance', 'Investment Analysis', 'Financial Modeling'],
    education: 'PhD in Finance, London School of Economics; CFA Charter',
    email: 'd.reynolds@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/davidreynolds',
    isFeatured: false
  },
  {
    id: 12,
    name: 'Lisa Chen',
    title: 'Head of Marketing',
    department: 'operations',
    image: null,
    bio: 'Lisa leads our marketing and communications team, developing strategies to showcase Britannia Institute\'s programs and achievements. She has a background in brand management for educational institutions.',
    expertise: ['Educational Marketing', 'Brand Strategy', 'Digital Communications'],
    education: 'MSc in Marketing, University of Edinburgh',
    email: 'l.chen@britanniainstitute.ac.uk',
    linkedin: 'https://linkedin.com/in/lisachen',
    twitter: 'https://twitter.com/lisachenmarketing',
    isFeatured: false
  }
];

export default function Team() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  
  // Filter team members based on department and search query
  const filterTeam = () => {
    let filtered = [...teamData];
    
    // Filter by department
    if (activeDepartment !== 'all') {
      filtered = filtered.filter(member => member.department === activeDepartment);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(query) ||
        member.title.toLowerCase().includes(query) ||
        member.bio.toLowerCase().includes(query) ||
        member.expertise.some(expertise => expertise.toLowerCase().includes(query))
      );
    }
    
    // Sort featured members first, then alphabetically
    filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return a.name.localeCompare(b.name);
    });
    
    setFilteredTeam(filtered);
  };
  
  // Apply filters when department or search changes
  useEffect(() => {
    filterTeam();
  }, [activeDepartment, searchQuery]);

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
              Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Meet our dedicated faculty and staff committed to educational excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-2xl"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, title, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-center overflow-x-auto py-2 hide-scrollbar">
              <nav className="flex space-x-2 md:space-x-4">
                {departments.map((department) => (
                  <button
                    key={department.id}
                    onClick={() => setActiveDepartment(department.id)}
                    className={`px-4 py-2 rounded-full flex items-center whitespace-nowrap ${
                      activeDepartment === department.id
                        ? 'bg-navy-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {department.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team Members */}
      {filteredTeam.some(member => member.isFeatured) && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-blue mb-8">Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTeam
                .filter(member => member.isFeatured)
                .map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    {/* Profile image or placeholder */}
                    <div className="h-64 bg-navy-blue/10 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-4xl font-bold text-navy-blue">{member.name.charAt(0)}</span>
                      </div>
                    </div>
                    
                    {/* Profile details */}
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-navy-blue">{member.name}</h3>
                      <p className="text-red font-medium">{member.title}</p>
                      
                      <div className="mt-4 text-gray-600">
                        <p>{member.bio}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-navy-blue">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.expertise.map((expertise, index) => (
                            <span 
                              key={index}
                              className="inline-block px-2 py-1 bg-navy-blue/10 text-navy-blue text-xs rounded-full"
                            >
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600">{member.education}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <a href={`mailto:${member.email}`} className="text-sm text-navy-blue hover:underline">
                            {member.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-navy-blue/10 text-navy-blue hover:bg-navy-blue/20 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.twitter && (
                          <a 
                            href={member.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-navy-blue/10 text-navy-blue hover:bg-navy-blue/20 transition-colors"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-navy-blue">
              {activeDepartment === 'all' ? 'All Team Members' : 
               `${departments.find(dept => dept.id === activeDepartment)?.name}`}
            </h2>
            <p className="text-gray-600">
              {filteredTeam.length} {filteredTeam.length === 1 ? 'member' : 'members'} found
            </p>
          </div>
          
          {/* Empty state */}
          {filteredTeam.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No team members found</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery 
                  ? `No one matches your search for "${searchQuery}"`
                  : `No team members in the selected department`}
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveDepartment('all');
                }}
                className="px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Team directory grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeam
              .filter(member => !member.isFeatured || activeDepartment !== 'all' || searchQuery)
              .map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start mb-4">
                      {/* Profile initial */}
                      <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex-shrink-0 flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-navy-blue">{member.name.charAt(0)}</span>
                      </div>
                      
                      {/* Name and title */}
                      <div className="flex-1">
                        <h3 className="font-bold text-navy-blue">{member.name}</h3>
                        <p className="text-red text-sm">{member.title}</p>
                        <p className="text-gray-500 text-xs mt-1">
                          {departments.find(dept => dept.id === member.department)?.name}
                        </p>
                      </div>
                    </div>
                    
                    {/* Short bio */}
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio.slice(0, 150)}...
                    </p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-auto">
                      {member.expertise.slice(0, 2).map((expertise, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 bg-navy-blue/10 text-navy-blue text-xs rounded-full"
                        >
                          {expertise}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{member.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    {/* Contact */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-sm text-navy-blue hover:underline flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {member.email}
                      </a>
                      
                      <div className="mt-2 flex items-center space-x-2">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-full bg-navy-blue/5 text-navy-blue hover:bg-navy-blue/10 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.twitter && (
                          <a 
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-full bg-navy-blue/5 text-navy-blue hover:bg-navy-blue/10 transition-colors"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-navy-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-blue-100 text-lg mb-8">
              Britannia Institute is always looking for talented professionals passionate about education to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/careers" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red text-white font-medium hover:bg-red/90 transition-colors"
              >
                View Open Positions
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact?reason=careers" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact HR Department
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 