'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  File, FileText, Download, BookOpen, Video, BarChart, Clock, Filter, 
  Search, Star, Bookmark, Lock, ChevronDown, ChevronUp, Calendar, User, Check, Play
} from 'lucide-react';

// Resource categories
const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'guides', name: 'Study Guides' },
  { id: 'templates', name: 'Templates' },
  { id: 'videos', name: 'Video Tutorials' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'webinars', name: 'Webinar Recordings' }
];

// Resource data
const resourcesData = [
  {
    id: 1,
    title: 'Business Plan Template',
    description: 'A comprehensive template for creating a professional business plan with financial projections and market analysis sections.',
    category: 'templates',
    format: 'DOCX, PDF',
    size: '2.4 MB',
    downloadCount: 1248,
    thumbnail: null, // In a real app, this would be an image URL
    relatedCourse: 'Business Management',
    isPremium: false,
    dateAdded: 'April 15, 2023'
  },
  {
    id: 2,
    title: 'Data Analysis with Python Guide',
    description: 'A step-by-step guide to performing data analysis using Python, including code examples and visualization techniques.',
    category: 'guides',
    format: 'PDF',
    size: '8.7 MB',
    downloadCount: 2189,
    thumbnail: null,
    relatedCourse: 'Data Science Fundamentals',
    isPremium: false,
    dateAdded: 'May 22, 2023'
  },
  {
    id: 3,
    title: 'Social Media Campaign Strategy Template',
    description: 'A ready-to-use template for planning and executing successful social media marketing campaigns across multiple platforms.',
    category: 'templates',
    format: 'XLSX, PDF',
    size: '3.1 MB',
    downloadCount: 1672,
    thumbnail: null,
    relatedCourse: 'Digital Marketing Strategy',
    isPremium: false,
    dateAdded: 'March 8, 2023'
  },
  {
    id: 4,
    title: 'Introduction to Machine Learning',
    description: 'Video lecture that explains the core concepts of machine learning, algorithms, and practical applications.',
    category: 'videos',
    format: 'MP4',
    duration: '45 minutes',
    views: 3254,
    thumbnail: null,
    relatedCourse: 'Data Science Fundamentals',
    isPremium: true,
    dateAdded: 'June 10, 2023'
  },
  {
    id: 5,
    title: 'Project Management Framework Guide',
    description: 'Comprehensive guide to project management methodologies including Agile, Waterfall, and hybrid approaches.',
    category: 'guides',
    format: 'PDF',
    size: '5.3 MB',
    downloadCount: 982,
    thumbnail: null,
    relatedCourse: 'Project Management Professional',
    isPremium: false,
    dateAdded: 'April 28, 2023'
  },
  {
    id: 6,
    title: 'Retail Business Case Study',
    description: 'Analysis of a successful retail business transformation, including challenges, strategies, and outcomes.',
    category: 'case-studies',
    format: 'PDF',
    size: '3.8 MB',
    downloadCount: 756,
    thumbnail: null,
    relatedCourse: 'Business Management',
    isPremium: false,
    dateAdded: 'January 15, 2023'
  },
  {
    id: 7,
    title: 'UX Research Methods Webinar',
    description: 'Recorded webinar featuring industry experts discussing effective user experience research methods and tools.',
    category: 'webinars',
    format: 'MP4',
    duration: '90 minutes',
    views: 1245,
    thumbnail: null,
    relatedCourse: 'User Experience Design',
    isPremium: true,
    dateAdded: 'May 5, 2023'
  },
  {
    id: 8,
    title: 'Financial Modeling Excel Templates',
    description: 'Collection of Excel templates for financial modeling, including cash flow projections, valuation models, and ratio analysis.',
    category: 'templates',
    format: 'XLSX',
    size: '4.2 MB',
    downloadCount: 1847,
    thumbnail: null,
    relatedCourse: 'Financial Analysis and Reporting',
    isPremium: true,
    dateAdded: 'February 18, 2023'
  },
  {
    id: 9,
    title: 'SEO Best Practices Guide',
    description: 'Comprehensive guide to search engine optimization techniques, including on-page and off-page strategies.',
    category: 'guides',
    format: 'PDF',
    size: '6.1 MB',
    downloadCount: 2156,
    thumbnail: null,
    relatedCourse: 'Digital Marketing Strategy',
    isPremium: false,
    dateAdded: 'March 30, 2023'
  },
  {
    id: 10,
    title: 'Supply Chain Optimization Case Study',
    description: 'Real-world case study of how a global company optimized their supply chain for efficiency and cost reduction.',
    category: 'case-studies',
    format: 'PDF',
    size: '2.9 MB',
    downloadCount: 648,
    thumbnail: null,
    relatedCourse: 'Supply Chain Management',
    isPremium: false,
    dateAdded: 'April 12, 2023'
  },
  {
    id: 11,
    title: 'Digital Transformation Webinar',
    description: 'Expert panel discussion on implementing successful digital transformation strategies in traditional businesses.',
    category: 'webinars',
    format: 'MP4',
    duration: '75 minutes',
    views: 892,
    thumbnail: null,
    relatedCourse: 'Business Management',
    isPremium: true,
    dateAdded: 'June 5, 2023'
  },
  {
    id: 12,
    title: 'Data Visualization Tutorial',
    description: 'Step-by-step video tutorial on creating effective data visualizations using Tableau and PowerBI.',
    category: 'videos',
    format: 'MP4',
    duration: '60 minutes',
    views: 1876,
    thumbnail: null,
    relatedCourse: 'Data Science Fundamentals',
    isPremium: false,
    dateAdded: 'May 18, 2023'
  }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [filteredResources, setFilteredResources] = useState(resourcesData);
  
  // Apply filtering and sorting
  useEffect(() => {
    let result = [...resourcesData];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(resource => resource.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        resource => 
          resource.title.toLowerCase().includes(query) || 
          resource.description.toLowerCase().includes(query) ||
          resource.relatedCourse.toLowerCase().includes(query)
      );
    }
    
    // Apply premium filter
    if (showPremiumOnly) {
      result = result.filter(resource => resource.isPremium);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'date':
        // Since we don't have actual Date objects, but formatted strings, this is a simplification
        result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case 'popularity':
        result.sort((a, b) => {
          const aPopularity = a.downloadCount || a.views || 0;
          const bPopularity = b.downloadCount || b.views || 0;
          return bPopularity - aPopularity;
        });
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    setFilteredResources(result);
  }, [activeCategory, searchQuery, showPremiumOnly, sortBy]);
  
  // Helper function to get appropriate icon for resource category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'guides':
        return <BookOpen className="h-5 w-5" />;
      case 'templates':
        return <File className="h-5 w-5" />;
      case 'videos':
        return <Video className="h-5 w-5" />;
      case 'case-studies':
        return <FileText className="h-5 w-5" />;
      case 'webinars':
        return <Video className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
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
              Learning Resources
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Access study guides, templates, tutorials, and more to enhance your learning experience
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
                placeholder="Search for resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar/Filters */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-navy-blue">Resource Categories</h2>
                  </div>
                  
                  {/* Category navigation */}
                  <div className="p-4">
                    <nav className="space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                            activeCategory === category.id
                              ? 'bg-navy-blue/10 text-navy-blue font-medium'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {category.name}
                          {activeCategory === category.id && (
                            <span className="ml-auto bg-navy-blue text-white text-xs px-2 py-0.5 rounded-full">
                              {category.id === 'all' 
                                ? resourcesData.length 
                                : resourcesData.filter(r => r.category === category.id).length}
                            </span>
                          )}
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Additional filters - mobile toggle */}
                  <div className="lg:hidden p-4 border-t border-gray-100">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-lg"
                    >
                      <span className="flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        Advanced Filters
                      </span>
                      {showFilters ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  
                  {/* Additional filters - content */}
                  <div className={`p-4 border-t border-gray-100 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                    <h3 className="font-medium text-gray-900 mb-3">Filters</h3>
                    
                    <div className="space-y-4">
                      {/* Premium filter */}
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={showPremiumOnly}
                            onChange={() => setShowPremiumOnly(!showPremiumOnly)}
                            className="h-4 w-4 text-navy-blue border-gray-300 rounded"
                          />
                          <span className="ml-2 text-gray-700">Premium Resources Only</span>
                        </label>
                      </div>
                      
                      {/* Sort options */}
                      <div>
                        <label className="block text-gray-700 mb-2">Sort By</label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-navy-blue focus:border-navy-blue"
                        >
                          <option value="date">Newest First</option>
                          <option value="popularity">Most Popular</option>
                          <option value="title">Title A-Z</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                {/* Results header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-navy-blue">
                    {searchQuery ? 'Search Results' : 
                     activeCategory === 'all' ? 'All Resources' : 
                     categories.find(c => c.id === activeCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
                  </p>
                </div>
                
                {/* Empty state */}
                {filteredResources.length === 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No resources found</h3>
                    <p className="text-gray-500 mb-4">
                      {searchQuery 
                        ? `No resources match your search for "${searchQuery}"`
                        : 'No resources match your current filters'}
                    </p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                        setShowPremiumOnly(false);
                      }}
                      className="px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
                
                {/* Resources grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                    >
                      {/* Resource thumbnail or placeholder */}
                      <div className="h-40 bg-gray-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-navy-blue/5">
                          <div className="p-4 rounded-full bg-navy-blue/10 flex items-center justify-center">
                            {getCategoryIcon(resource.category)}
                          </div>
                        </div>
                        {/* Premium badge */}
                        {resource.isPremium && (
                          <div className="absolute top-2 right-2 bg-gold text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <Lock className="h-3 w-3 mr-1" />
                            Premium
                          </div>
                        )}
                        {/* Category badge */}
                        <div className="absolute bottom-2 left-2 bg-white/90 text-navy-blue text-xs px-2 py-1 rounded-full">
                          {categories.find(c => c.id === resource.category)?.name}
                        </div>
                      </div>
                      
                      {/* Resource details */}
                      <div className="p-6 flex-grow">
                        <h3 className="font-bold text-navy-blue mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{resource.dateAdded}</span>
                          <span className="mx-2">•</span>
                          {resource.format.includes('MP4') ? (
                            <>
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{resource.duration}</span>
                            </>
                          ) : (
                            <>
                              <FileText className="h-4 w-4 mr-1" />
                              <span>{resource.format}</span>
                            </>
                          )}
                        </div>
                        
                        <div className="text-sm text-gray-600">
                          <p className="mb-1">
                            <span className="font-medium">Related Course:</span> {resource.relatedCourse}
                          </p>
                          <p>
                            {resource.downloadCount ? (
                              <>
                                <Download className="h-4 w-4 inline mr-1" />
                                <span>{resource.downloadCount.toLocaleString()} downloads</span>
                              </>
                            ) : resource.views ? (
                              <>
                                <BarChart className="h-4 w-4 inline mr-1" />
                                <span>{resource.views.toLocaleString()} views</span>
                              </>
                            ) : null}
                          </p>
                        </div>
                      </div>
                      
                      {/* Resource actions */}
                      <div className="px-6 py-4 border-t border-gray-100 flex justify-between">
                        <button className="text-navy-blue hover:text-royal-blue flex items-center">
                          <Bookmark className="h-4 w-4 mr-1" />
                          <span className="text-sm">Save</span>
                        </button>
                        
                        <Link 
                          href="#"
                          className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                            resource.isPremium
                              ? 'bg-gold/10 text-gold hover:bg-gold/20'
                              : 'bg-navy-blue text-white hover:bg-royal-blue'
                          } transition-colors flex items-center`}
                        >
                          {resource.format.includes('MP4') ? (
                            <>
                              <Play className="h-4 w-4 mr-1" />
                              Watch
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </>
                          )}
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium subscription CTA */}
      <section className="py-16 bg-navy-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-2xl font-bold text-navy-blue mb-4">
                  Upgrade to Premium
                </h2>
                <p className="text-gray-600 mb-6">
                  Get unlimited access to all premium resources, including templates, webinars, and exclusive content to accelerate your learning journey.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-900">Unlimited downloads</span> of all premium templates and guides
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-900">Exclusive webinars</span> with industry experts and thought leaders
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-medium text-gray-900">Early access</span> to new resources and course materials
                    </p>
                  </li>
                </ul>
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-navy-blue text-white font-medium hover:bg-royal-blue transition-colors"
                >
                  See Premium Plans
                </Link>
              </div>
              
              <div className="md:flex-1 bg-gradient-to-br from-navy-blue to-royal-blue p-8 text-white flex items-center">
                <div>
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-gold fill-current" />
                    ))}
                    <span className="ml-2 text-white/80">4.9/5 rating</span>
                  </div>
                  <blockquote className="italic mb-6">
                    "The premium resources have been invaluable for my professional development. The templates alone saved me countless hours of work."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-bold">Michael Robertson</p>
                      <p className="text-white/80 text-sm">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 