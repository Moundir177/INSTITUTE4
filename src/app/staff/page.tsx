'use client';

import React, { useState, useEffect } from 'react';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Animate, StaggerContainer } from '@/components/ui/Animate';
import { 
  Search, Filter, Mail, Phone, ChevronRight, 
  User, Briefcase, GraduationCap, MapPin, Globe, BookOpen
} from 'lucide-react';

// Mock staff data
const staffData = [
  {
    id: 1,
    name: 'Prof. James Wilson',
    role: 'Dean of Business School',
    department: 'Business',
    email: 'j.wilson@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4567',
    location: 'Main Campus, Room 304',
    education: 'Ph.D., Business Administration, Oxford University',
    specialization: ['Strategic Management', 'Leadership', 'Organizational Behavior'],
    bio: 'Professor Wilson has over 20 years of experience in business education and consulting. He has worked with Fortune 500 companies and published extensively in leading management journals.',
    image: '/images/staff/james-wilson.jpg',
    featured: true,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 2,
    name: 'Dr. Emma Thompson',
    role: 'Director of Educational Technology',
    department: 'Technology',
    email: 'e.thompson@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4568',
    location: 'Tech Hub, Room 201',
    education: 'Ph.D., Learning Sciences, Cambridge University',
    specialization: ['Educational Technology', 'AI in Education', 'Digital Learning'],
    bio: 'Dr. Thompson specializes in educational technology implementation and research. She leads our EdTech initiatives and has developed several innovative learning platforms.',
    image: '/images/staff/emma-thompson.jpg',
    featured: true,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 3,
    name: 'Dr. Robert Chen',
    role: 'Head of Computer Science',
    department: 'Technology',
    email: 'r.chen@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4569',
    location: 'Tech Hub, Room 105',
    education: 'Ph.D., Computer Science, Imperial College London',
    specialization: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    bio: 'Dr. Chen is an expert in artificial intelligence and machine learning. He has led research projects for major tech companies and contributed to groundbreaking developments in AI.',
    image: '/images/staff/robert-chen.jpg',
    featured: false,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Director of Marketing',
    department: 'Administration',
    email: 's.johnson@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4570',
    location: 'Admin Building, Room 402',
    education: 'MBA, Marketing, London Business School',
    specialization: ['Digital Marketing', 'Brand Strategy', 'Market Research'],
    bio: 'Sarah Johnson brings over 15 years of marketing experience to our institute. She previously worked as a marketing executive for leading educational organizations and tech companies.',
    image: '/images/staff/sarah-johnson.jpg',
    featured: false,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 5,
    name: 'Dr. Michael Brown',
    role: 'Professor of Finance',
    department: 'Business',
    email: 'm.brown@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4571',
    location: 'Business School, Room 208',
    education: 'Ph.D., Finance, LSE',
    specialization: ['Corporate Finance', 'Investment Analysis', 'Financial Markets'],
    bio: 'Dr. Brown is a leading expert in corporate finance with extensive experience in both academia and industry. He regularly consults for financial institutions and has published in top finance journals.',
    image: '/images/staff/michael-brown.jpg',
    featured: false,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 6,
    name: 'Dr. Rebecca Martinez',
    role: 'Professor of Psychology',
    department: 'Humanities',
    email: 'r.martinez@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4572',
    location: 'Humanities Building, Room 302',
    education: 'Ph.D., Psychology, University College London',
    specialization: ['Cognitive Psychology', 'Educational Psychology', 'Human Development'],
    bio: 'Dr. Martinez is a respected researcher in educational psychology and cognitive development. Her work focuses on how students learn and develop critical thinking skills.',
    image: '/images/staff/rebecca-martinez.jpg',
    featured: true,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 7,
    name: 'David Williams',
    role: 'Head of Student Affairs',
    department: 'Administration',
    email: 'd.williams@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4573',
    location: 'Student Center, Room 103',
    education: 'MA, Education Administration, University of Manchester',
    specialization: ['Student Support', 'Campus Life', 'Student Welfare'],
    bio: 'David Williams oversees all aspects of student life, from welfare to extracurricular activities. He is dedicated to creating a supportive and enriching environment for all students.',
    image: '/images/staff/david-williams.jpg',
    featured: false,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 8,
    name: 'Prof. Elizabeth Taylor',
    role: 'Chair of Humanities',
    department: 'Humanities',
    email: 'e.taylor@britanniainstitute.ac.uk',
    phone: '+44 20 7123 4574',
    location: 'Humanities Building, Room 401',
    education: 'Ph.D., English Literature, University of Edinburgh',
    specialization: ['Literary Theory', 'Cultural Studies', 'Critical Thinking'],
    bio: 'Professor Taylor leads our Humanities department with distinction. Her interdisciplinary approach has strengthened connections between literature, philosophy, and modern cultural studies.',
    image: '/images/staff/elizabeth-taylor.jpg',
    featured: false,
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

// Departments with their counts
const departments = [
  { name: 'Business', count: 2 },
  { name: 'Technology', count: 2 },
  { name: 'Humanities', count: 2 },
  { name: 'Administration', count: 2 },
];

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [filteredStaff, setFilteredStaff] = useState(staffData);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter staff based on search term and selected departments
  useEffect(() => {
    let result = staffData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(staff => 
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by selected departments
    if (selectedDepartments.length > 0) {
      result = result.filter(staff => selectedDepartments.includes(staff.department));
    }
    
    setFilteredStaff(result);
  }, [searchTerm, selectedDepartments]);

  // Toggle department selection
  const toggleDepartment = (department: string) => {
    setSelectedDepartments(prev => 
      prev.includes(department) 
        ? prev.filter(d => d !== department) 
        : [...prev, department]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartments([]);
  };

  // Get featured staff
  const featuredStaff = staffData.filter(staff => staff.featured);

  return (
    <>
      {/* Hero Section */}
      <Section variant="navy" padding="lg">
        <Container>
          <div className="flex flex-col items-center text-center text-white">
            <Animate type="fadeInDown">
              <Heading as="h1" size="2xl" font="serif" className="mb-6">
                Our Faculty & Staff
              </Heading>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.1}>
              <Text size="lg" leading="relaxed" className="max-w-3xl mb-10">
                Meet our dedicated team of professors, instructors, and administrative staff who are committed to providing an exceptional educational experience.
              </Text>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.2}>
              <div className="relative w-full max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-elegant pl-10 pr-4 py-4 w-full rounded-full text-gray-900"
                  placeholder="Search by name, role, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  className="absolute inset-y-0 right-0 px-4 py-2 bg-gold hover:bg-gold/90 text-navy-blue font-medium rounded-full mr-1 my-1 transition-colors"
                  onClick={() => setSearchTerm('')}
                >
                  {searchTerm ? 'Clear' : 'Search'}
                </button>
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
      
      {/* Featured Staff */}
      <Section padding="lg" className="bg-light-silver/30">
        <Container>
          <div className="mb-10">
            <Heading as="h2" size="xl" font="serif" className="mb-2">
              Leadership Team
            </Heading>
            <Text color="muted">
              Meet the exceptional leaders guiding our educational excellence
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStaff.map((staff) => (
              <Animate key={staff.id} type="fadeInUp">
                <Card className="h-full transform transition-transform hover:-translate-y-1 hover:shadow-elegant">
                  <div className="aspect-square bg-gray-200 rounded-t-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
                      <Badge variant="gold" className="font-medium">Leadership</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2">{staff.department}</Badge>
                    <h3 className="text-xl font-bold mb-1">{staff.name}</h3>
                    <p className="text-navy-blue font-medium text-sm mb-3">{staff.role}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{staff.bio}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <GraduationCap className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="line-clamp-1">{staff.education}</span>
                    </div>
                    
                    <Divider className="my-3" />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a href={`mailto:${staff.email}`} className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href={staff.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                      <Button.Link href={`/staff/${staff.id}`} size="sm" icon={<ChevronRight size={16} />} iconPosition="right">
                        Profile
                      </Button.Link>
                    </div>
                  </div>
                </Card>
              </Animate>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Main Staff Section */}
      <Section padding="lg">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Filters</h3>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-navy-blue hover:underline"
                  >
                    Clear All
                  </button>
                </div>
                
                {/* Departments */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Departments</h4>
                  <div className="space-y-2">
                    {departments.map((department) => (
                      <div key={department.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`department-${department.name}`}
                          checked={selectedDepartments.includes(department.name)}
                          onChange={() => toggleDepartment(department.name)}
                          className="h-4 w-4 text-navy-blue rounded border-gray-300 focus:ring-navy-blue"
                        />
                        <label 
                          htmlFor={`department-${department.name}`}
                          className="ml-2 text-sm text-gray-700 flex-1"
                        >
                          {department.name}
                        </label>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {department.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Divider />
                
                <div className="mt-6">
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Staff Grid */}
            <div className="md:w-3/4">
              {/* Mobile Filter Toggle */}
              <div className="md:hidden mb-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  icon={<Filter size={16} />}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
              
              {/* Results Info */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold">All Staff Members</h2>
                  <p className="text-gray-600 text-sm">
                    {filteredStaff.length} members found
                    {(searchTerm || selectedDepartments.length > 0) && (
                      <button 
                        className="ml-2 text-navy-blue hover:underline"
                        onClick={clearFilters}
                      >
                        Clear Filters
                      </button>
                    )}
                  </p>
                </div>
              </div>
              
              {/* Staff Cards */}
              {filteredStaff.length > 0 ? (
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredStaff.map((staff) => (
                    <Animate key={staff.id} type="fadeInUp">
                      <Card className="h-full hover:shadow-elegant transition-all">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 aspect-square md:aspect-auto bg-gray-200 rounded-t-xl md:rounded-l-xl md:rounded-tr-none relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-navy-blue/10">
                              <User className="h-12 w-12 text-navy-blue/30" />
                            </div>
                          </div>
                          
                          <div className="p-5 md:w-2/3">
                            <div className="flex justify-between items-start mb-1">
                              <Badge variant="outline" className="text-xs">{staff.department}</Badge>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-1">{staff.name}</h3>
                            <p className="text-navy-blue font-medium text-sm mb-3">{staff.role}</p>
                            
                            <div className="space-y-1 text-xs text-gray-600 mb-3">
                              <div className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                <a href={`mailto:${staff.email}`} className="hover:text-navy-blue">{staff.email}</a>
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                <span>{staff.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{staff.location}</span>
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <Button.Link href={`/staff/${staff.id}`} size="sm" variant="link" className="text-navy-blue">
                                View Profile
                              </Button.Link>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Animate>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-12 bg-light-silver/30 rounded-xl">
                  <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">No staff members found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Departments Section */}
      <Section padding="lg" className="bg-light-silver/30">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="xl" font="serif" className="mb-4">
              Our Departments
            </Heading>
            <Text color="muted" className="max-w-3xl mx-auto">
              Explore our diverse academic and administrative departments, each committed to excellence in their respective fields.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((department, index) => (
              <Animate key={department.name} type="fadeInUp" delay={index * 0.1}>
                <Card className="h-full hover:shadow-elegant transition-all text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-navy-blue/10 flex items-center justify-center mx-auto mb-4">
                    {department.name === 'Business' && <Briefcase className="h-8 w-8 text-navy-blue" />}
                    {department.name === 'Technology' && <Globe className="h-8 w-8 text-navy-blue" />}
                    {department.name === 'Humanities' && <BookOpen className="h-8 w-8 text-navy-blue" />}
                    {department.name === 'Administration' && <User className="h-8 w-8 text-navy-blue" />}
                  </div>
                  
                  <Heading as="h3" size="lg" className="mb-2">
                    {department.name}
                  </Heading>
                  
                  <Text color="muted" className="mb-4">
                    {department.count} faculty members
                  </Text>
                  
                  <Button.Link 
                    href={`/staff?department=${department.name}`} 
                    variant="outline"
                    className="mt-2"
                  >
                    View Department
                  </Button.Link>
                </Card>
              </Animate>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section variant="gold" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Animate type="fadeIn">
              <Heading as="h2" size="xl" font="serif" className="mb-4 text-navy-blue">
                Join Our Academic Community
              </Heading>
              <Text size="lg" className="mb-8 text-gray-700 max-w-2xl mx-auto">
                We're always looking for talented educators and professionals to join our team.
                Explore current opportunities and become part of our educational mission.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button.Link href="/careers" size="lg" variant="primary">
                  View Open Positions
                </Button.Link>
                <Button.Link href="/contact" size="lg" variant="secondary">
                  Contact HR Department
                </Button.Link>
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
    </>
  );
} 