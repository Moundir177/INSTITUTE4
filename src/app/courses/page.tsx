'use client';

import React, { useState, useEffect } from 'react';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Animate, StaggerContainer } from '@/components/ui/Animate';
import { Search, Filter, Clock, Calendar, Star, Users, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';

// Mock course data
const coursesData = [
  {
    id: 1,
    title: 'Advanced Business Management',
    category: 'Business',
    level: 'Advanced',
    duration: '12 weeks',
    schedule: 'Flexible',
    instructor: 'Dr. Robert Williams',
    rating: 4.9,
    students: 1250,
    price: 799,
    discount: 649,
    image: '/images/courses/business-management.jpg', // These would need actual images
    featured: true,
    popular: true,
    tags: ['Leadership', 'Strategy', 'Management'],
    description: 'Master advanced business management concepts and techniques to lead organizations effectively in today\'s competitive global market.',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    category: 'Technology',
    level: 'Beginner',
    duration: '10 weeks',
    schedule: 'Twice Weekly',
    instructor: 'Prof. Emma Thompson',
    rating: 4.7,
    students: 985,
    price: 699,
    discount: 549,
    image: '/images/courses/data-science.jpg',
    featured: true,
    popular: true,
    tags: ['Python', 'Statistics', 'Machine Learning'],
    description: 'Learn the essential concepts and tools for data analysis, visualization, and building predictive models.',
  },
  {
    id: 3,
    title: 'Digital Marketing Essentials',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '8 weeks',
    schedule: 'Weekly',
    instructor: 'James Anderson',
    rating: 4.8,
    students: 1430,
    price: 549,
    discount: 449,
    image: '/images/courses/digital-marketing.jpg',
    featured: false,
    popular: true,
    tags: ['SEO', 'Social Media', 'Content Marketing'],
    description: 'Master digital marketing strategies to grow your brand\'s online presence and drive measurable results.',
  },
  {
    id: 4,
    title: 'Project Management Professional',
    category: 'Business',
    level: 'Intermediate',
    duration: '6 weeks',
    schedule: 'Flexible',
    instructor: 'Dr. Lisa Chen',
    rating: 4.6,
    students: 875,
    price: 649,
    discount: 499,
    image: '/images/courses/project-management.jpg',
    featured: false,
    popular: false,
    tags: ['PMP', 'Agile', 'Scrum'],
    description: 'Prepare for the PMP certification while learning practical project management methodologies and frameworks.',
  },
  {
    id: 5,
    title: 'Graphic Design Masterclass',
    category: 'Design',
    level: 'Beginner',
    duration: '8 weeks',
    schedule: 'Weekly',
    instructor: 'Sarah Jenkins',
    rating: 4.8,
    students: 1050,
    price: 599,
    discount: 499,
    image: '/images/courses/graphic-design.jpg',
    featured: true,
    popular: false,
    tags: ['Adobe', 'UI/UX', 'Typography'],
    description: 'Learn professional graphic design techniques using industry-standard tools and creative principles.',
  },
  {
    id: 6,
    title: 'Financial Planning and Analysis',
    category: 'Finance',
    level: 'Advanced',
    duration: '10 weeks',
    schedule: 'Twice Weekly',
    instructor: 'Michael Roberts',
    rating: 4.7,
    students: 680,
    price: 749,
    discount: 649,
    image: '/images/courses/financial-planning.jpg',
    featured: false,
    popular: false,
    tags: ['Budgeting', 'Forecasting', 'Investment'],
    description: 'Develop expertise in financial planning, analysis, and strategy to make data-driven financial decisions.',
  },
  {
    id: 7,
    title: 'Mobile App Development with React Native',
    category: 'Technology',
    level: 'Intermediate',
    duration: '12 weeks',
    schedule: 'Weekly',
    instructor: 'David Kim',
    rating: 4.9,
    students: 925,
    price: 799,
    discount: 699,
    image: '/images/courses/app-development.jpg',
    featured: true,
    popular: true,
    tags: ['React', 'JavaScript', 'Mobile'],
    description: 'Build cross-platform mobile applications using React Native and modern JavaScript frameworks.',
  },
  {
    id: 8,
    title: 'Content Creation and Strategy',
    category: 'Marketing',
    level: 'Beginner',
    duration: '6 weeks',
    schedule: 'Flexible',
    instructor: 'Rebecca Moore',
    rating: 4.5,
    students: 785,
    price: 449,
    discount: 349,
    image: '/images/courses/content-creation.jpg',
    featured: false,
    popular: false,
    tags: ['Writing', 'Social Media', 'Storytelling'],
    description: 'Master the art of content creation and develop strategic content plans for multiple platforms.',
  },
];

// Categories with their counts
const categories = [
  { name: 'Business', count: 2 },
  { name: 'Technology', count: 2 },
  { name: 'Marketing', count: 2 },
  { name: 'Design', count: 1 },
  { name: 'Finance', count: 1 },
];

// Levels with their counts
const levels = [
  { name: 'Beginner', count: 3 },
  { name: 'Intermediate', count: 3 },
  { name: 'Advanced', count: 2 },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('popular');

  // Filter courses based on search term, selected categories, and levels
  useEffect(() => {
    let result = coursesData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter(course => selectedCategories.includes(course.category));
    }
    
    // Filter by selected levels
    if (selectedLevels.length > 0) {
      result = result.filter(course => selectedLevels.includes(course.level));
    }
    
    // Sort courses
    switch (sortOption) {
      case 'popular':
        result = [...result].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result = [...result].sort((a, b) => a.discount - b.discount);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.discount - a.discount);
        break;
      default:
        break;
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategories, selectedLevels, sortOption]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Toggle level selection
  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSortOption('popular');
  };

  // Get featured courses
  const featuredCourses = coursesData.filter(course => course.featured);

  return (
    <>
      {/* Hero Section */}
      <Section variant="navy" padding="lg">
        <Container>
          <div className="flex flex-col items-center text-center text-white">
            <Animate type="fadeInDown">
              <Heading as="h1" size="2xl" font="serif" className="mb-6">
                Explore Our Courses
              </Heading>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.1}>
              <Text size="lg" leading="relaxed" className="max-w-3xl mb-10">
                Discover a wide range of professional courses designed to enhance your skills and advance your career.
                Learn from industry experts and join our community of lifelong learners.
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
                  placeholder="Search for courses, topics, or skills..."
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
      
      {/* Featured Courses */}
      <Section padding="lg" className="bg-light-silver/30">
        <Container>
          <div className="mb-10">
            <Heading as="h2" size="xl" font="serif" className="mb-2">
              Featured Courses
            </Heading>
            <Text color="muted">
              Our most popular and highly rated learning opportunities
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.slice(0, 4).map((course) => (
              <Animate key={course.id} type="fadeInUp">
                <Card className="h-full transform transition-transform hover:-translate-y-1 hover:shadow-elegant">
                  <div className="aspect-video bg-gray-200 rounded-t-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
                      <Badge variant="gold" className="font-medium">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2">{course.category}</Badge>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <Star className="h-4 w-4 mr-1 text-gold" />
                      <span>{course.rating}</span>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-lg font-bold text-navy-blue">£{course.discount}</span>
                          {course.discount < course.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">£{course.price}</span>
                          )}
                        </div>
                        <Button.Link href={`/courses/${course.id}`} size="sm">
                          View Course
                        </Button.Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </Animate>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Main Courses Section */}
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
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category.name}`}
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="h-4 w-4 text-navy-blue rounded border-gray-300 focus:ring-navy-blue"
                        />
                        <label 
                          htmlFor={`category-${category.name}`}
                          className="ml-2 text-sm text-gray-700 flex-1"
                        >
                          {category.name}
                        </label>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Divider />
                
                {/* Levels */}
                <div className="my-6">
                  <h4 className="font-medium mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <div key={level.name} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`level-${level.name}`}
                          checked={selectedLevels.includes(level.name)}
                          onChange={() => toggleLevel(level.name)}
                          className="h-4 w-4 text-navy-blue rounded border-gray-300 focus:ring-navy-blue"
                        />
                        <label 
                          htmlFor={`level-${level.name}`}
                          className="ml-2 text-sm text-gray-700 flex-1"
                        >
                          {level.name}
                        </label>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {level.count}
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
            
            {/* Courses Grid */}
            <div className="md:w-3/4">
              {/* Mobile Filter Toggle & Sort */}
              <div className="md:hidden mb-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1"
                  icon={<Filter size={16} />}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
                
                <select 
                  className="input-elegant flex-1 py-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              {/* Results Info & Sort (Desktop) */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold">All Courses</h2>
                  <p className="text-gray-600 text-sm">
                    {filteredCourses.length} courses found
                    {(searchTerm || selectedCategories.length > 0 || selectedLevels.length > 0) && (
                      <button 
                        className="ml-2 text-navy-blue hover:underline"
                        onClick={clearFilters}
                      >
                        Clear Filters
                      </button>
                    )}
                  </p>
                </div>
                
                <div className="hidden md:flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select 
                    className="input-elegant py-1 pl-3 pr-8 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              {/* Course Cards */}
              {filteredCourses.length > 0 ? (
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <Animate key={course.id} type="fadeInUp">
                      <Card className="h-full transform transition-all hover:-translate-y-1 hover:shadow-elegant">
                        <div className="aspect-video bg-gray-200 rounded-t-xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
                            {course.popular && (
                              <Badge variant="navy" className="font-medium">Popular</Badge>
                            )}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="text-xs">{course.category}</Badge>
                            <Badge variant="default" className="text-xs">{course.level}</Badge>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2 line-clamp-2">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{course.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-gold" />
                              <span>{course.rating} (rated)</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              <span>{course.students} students</span>
                            </div>
                          </div>
                          
                          <Divider className="my-3" />
                          
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-lg font-bold text-navy-blue">£{course.discount}</span>
                              {course.discount < course.price && (
                                <span className="text-sm text-gray-500 line-through ml-2">£{course.price}</span>
                              )}
                            </div>
                            <Button.Link href={`/courses/${course.id}`} size="sm" icon={<ChevronRight size={16} />} iconPosition="right">
                              Details
                            </Button.Link>
                          </div>
                        </div>
                      </Card>
                    </Animate>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-12 bg-light-silver/30 rounded-xl">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">No courses found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section variant="gold" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Animate type="fadeIn">
              <Heading as="h2" size="xl" font="serif" className="mb-4 text-navy-blue">
                Ready to Advance Your Career?
              </Heading>
              <Text size="lg" className="mb-8 text-gray-700 max-w-2xl mx-auto">
                Join thousands of satisfied students and start your learning journey today.
                Our courses are designed to provide practical skills that you can apply immediately.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button.Link href="/register" size="lg" variant="primary">
                  Get Started
                </Button.Link>
                <Button.Link href="/contact" size="lg" variant="secondary">
                  Contact Us
                </Button.Link>
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
    </>
  );
} 