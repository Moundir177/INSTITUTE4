'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Filter, Search, 
  Globe, ChevronDown, Tag, ArrowRight, ThumbsUp, ChevronRight
} from 'lucide-react';

// Event types
const eventTypes = [
  { id: 'all', name: 'All Events' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'webinar', name: 'Webinars' },
  { id: 'networking', name: 'Networking' },
  { id: 'career', name: 'Career Fair' },
  { id: 'conference', name: 'Conferences' }
];

// Event data
const eventsData = [
  {
    id: 1,
    title: 'Data Science Fundamentals Workshop',
    description: 'A hands-on workshop covering the basics of data analysis with Python, including data visualization and statistical methods.',
    type: 'workshop',
    date: '2023-08-15T09:00:00',
    endDate: '2023-08-15T16:00:00',
    location: 'London Campus',
    address: '123 Oxford Street, London',
    isOnline: false,
    capacity: 30,
    spotsLeft: 8,
    image: null, // In a real app, this would be an image URL
    host: 'Dr. James Wilson',
    tags: ['Data Science', 'Python', 'Beginner'],
    price: '£99',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Digital Marketing Strategy Webinar',
    description: 'Learn the latest digital marketing strategies to grow your business online, including social media, SEO, and content marketing.',
    type: 'webinar',
    date: '2023-08-22T14:00:00',
    endDate: '2023-08-22T15:30:00',
    location: 'Online',
    isOnline: true,
    capacity: 200,
    spotsLeft: 76,
    image: null,
    host: 'Emma Johnson',
    tags: ['Marketing', 'Digital', 'Strategy'],
    price: 'Free',
    isFeatured: true
  },
  {
    id: 3,
    title: 'Business Networking Mixer',
    description: 'Connect with professionals from various industries in this networking event. Great opportunity to expand your professional network.',
    type: 'networking',
    date: '2023-08-25T18:00:00',
    endDate: '2023-08-25T21:00:00',
    location: 'The Grand Hotel',
    address: '45 Park Lane, London',
    isOnline: false,
    capacity: 100,
    spotsLeft: 32,
    image: null,
    host: 'Britannia Institute',
    tags: ['Networking', 'Business', 'Professional'],
    price: '£15',
    isFeatured: false
  },
  {
    id: 4,
    title: 'Project Management Fundamentals',
    description: 'An introduction to modern project management methodologies including Agile, Scrum, and Kanban.',
    type: 'workshop',
    date: '2023-08-30T10:00:00',
    endDate: '2023-08-30T15:00:00',
    location: 'Manchester Campus',
    address: '78 Deansgate, Manchester',
    isOnline: false,
    capacity: 25,
    spotsLeft: 5,
    image: null,
    host: 'Sarah Thompson',
    tags: ['Project Management', 'Agile', 'Intermediate'],
    price: '£125',
    isFeatured: false
  },
  {
    id: 5,
    title: 'Tech Industry Career Fair',
    description: 'Meet representatives from leading tech companies in the UK. Bring your CV and be ready for on-the-spot interviews.',
    type: 'career',
    date: '2023-09-05T10:00:00',
    endDate: '2023-09-05T16:00:00',
    location: 'London Campus',
    address: '123 Oxford Street, London',
    isOnline: false,
    capacity: 500,
    spotsLeft: 210,
    image: null,
    host: 'Britannia Institute',
    tags: ['Career', 'Technology', 'Recruitment'],
    price: 'Free',
    isFeatured: true
  },
  {
    id: 6,
    title: 'Financial Analysis Excel Workshop',
    description: 'Master financial modeling in Excel with hands-on exercises covering valuation, forecasting, and sensitivity analysis.',
    type: 'workshop',
    date: '2023-09-12T09:30:00',
    endDate: '2023-09-12T16:30:00',
    location: 'Birmingham Campus',
    address: '56 New Street, Birmingham',
    isOnline: false,
    capacity: 20,
    spotsLeft: 3,
    image: null,
    host: 'Michael Chen',
    tags: ['Finance', 'Excel', 'Intermediate'],
    price: '£149',
    isFeatured: false
  },
  {
    id: 7,
    title: 'UX Design Principles Webinar',
    description: 'Explore the fundamental principles of user experience design and how to create intuitive, user-friendly digital products.',
    type: 'webinar',
    date: '2023-09-14T13:00:00',
    endDate: '2023-09-14T14:30:00',
    location: 'Online',
    isOnline: true,
    capacity: 150,
    spotsLeft: 83,
    image: null,
    host: 'Linda Davies',
    tags: ['UX', 'Design', 'Beginner'],
    price: '£25',
    isFeatured: false
  },
  {
    id: 8,
    title: 'UK Business Innovation Conference',
    description: 'A two-day conference featuring keynote speakers from leading companies discussing the future of business innovation.',
    type: 'conference',
    date: '2023-09-20T09:00:00',
    endDate: '2023-09-21T17:00:00',
    location: 'The Royal Conference Center',
    address: '123 Victoria Street, London',
    isOnline: false,
    capacity: 400,
    spotsLeft: 145,
    image: null,
    host: 'UK Business Association & Britannia Institute',
    tags: ['Business', 'Innovation', 'Conference'],
    price: '£299',
    isFeatured: true
  }
];

// Format date helper function
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    weekday: 'long',
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

// Format time helper function
const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
};

export default function Events() {
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
  // Filter events based on type and search query
  const filterEvents = () => {
    let filtered = [...eventsData];
    
    // Filter by type
    if (activeType !== 'all') {
      filtered = filtered.filter(event => event.type === activeType);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.host.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Sort by date (closest first)
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    setFilteredEvents(filtered);
  };
  
  // Apply filters when type or search changes
  useEffect(() => {
    filterEvents();
  }, [activeType, searchQuery]);

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
              Upcoming Events
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100 mb-8"
            >
              Join our workshops, webinars, and networking events to expand your knowledge and connections
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
                placeholder="Search for events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Categories Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-center overflow-x-auto py-2 hide-scrollbar">
              <nav className="flex space-x-2 md:space-x-4">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`px-4 py-2 rounded-full flex items-center whitespace-nowrap ${
                      activeType === type.id
                        ? 'bg-navy-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {type.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {filteredEvents.some(event => event.isFeatured) && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-blue mb-8">Featured Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents
                .filter(event => event.isFeatured)
                .map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                  >
                    {/* Event image or placeholder */}
                    <div className="h-48 bg-navy-blue/10 relative">
                      <div className="absolute top-0 left-0 bg-red text-white text-xs px-3 py-1">
                        Featured
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                          {eventTypes.find(type => type.id === event.type)?.name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Event details */}
                    <div className="p-6 flex-grow">
                      <h3 className="font-bold text-navy-blue mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-red mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-700">{formatDate(event.date)}</p>
                            <p className="text-gray-500 text-sm">
                              {formatTime(event.date)} - {formatTime(event.endDate)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          {event.isOnline ? (
                            <Globe className="h-5 w-5 text-navy-blue mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <MapPin className="h-5 w-5 text-navy-blue mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="text-gray-700">{event.location}</p>
                            {event.address && (
                              <p className="text-gray-500 text-sm">{event.address}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-gray-500 mr-2" />
                          <p className="text-gray-600 text-sm">
                            {event.spotsLeft} spots left of {event.capacity}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="inline-block px-2 py-1 bg-navy-blue/10 text-navy-blue text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Event action */}
                    <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                      <div className="font-bold text-red">{event.price}</div>
                      <Link 
                        href={`/events/${event.id}`}
                        className="inline-flex items-center px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                      >
                        Register Now
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="#all-events"
                className="inline-flex items-center text-navy-blue hover:text-royal-blue"
              >
                See all events
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section id="all-events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-navy-blue">
              {activeType === 'all' ? 'All Upcoming Events' : 
               `${eventTypes.find(type => type.id === activeType)?.name}`}
            </h2>
            <p className="text-gray-600">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
            </p>
          </div>
          
          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery 
                  ? `No events match your search for "${searchQuery}"`
                  : `No upcoming ${activeType === 'all' ? '' : eventTypes.find(type => type.id === activeType)?.name.toLowerCase()} events at the moment`}
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('all');
                }}
                className="px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Events list */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  {/* Date column */}
                  <div className="md:w-48 bg-navy-blue text-white p-6 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm uppercase">{new Date(event.date).toLocaleDateString('en-GB', { month: 'short' })}</p>
                      <p className="text-3xl font-bold">{new Date(event.date).getDate()}</p>
                      <p className="text-sm">{new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long' })}</p>
                      <div className="mt-2 px-3 py-1 bg-white/20 rounded-full text-xs">
                        {eventTypes.find(type => type.id === event.type)?.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div className="p-6 md:flex-1">
                    <h3 className="font-bold text-navy-blue text-xl mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-red mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-700">{formatTime(event.date)} - {formatTime(event.endDate)}</p>
                          <p className="text-gray-500 text-sm">
                            {new Date(event.endDate).getTime() - new Date(event.date).getTime() > 86400000 ? 'Multiple Days' : 'Single Day'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        {event.isOnline ? (
                          <Globe className="h-5 w-5 text-navy-blue mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <MapPin className="h-5 w-5 text-navy-blue mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="text-gray-700">{event.location}</p>
                          {event.address && (
                            <p className="text-gray-500 text-sm">{event.address}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-gray-600 text-sm">
                          {event.spotsLeft} spots left of {event.capacity}
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <Tag className="h-5 w-5 text-gray-500 mr-2" />
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="inline-block px-2 py-0.5 bg-navy-blue/10 text-navy-blue text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-600 text-sm">Hosted by:</span>
                        <span className="ml-1 font-medium text-gray-800">{event.host}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 font-bold text-red">{event.price}</div>
                        <Link 
                          href={`/events/${event.id}`}
                          className="inline-flex items-center px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                        >
                          Register
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Host Your Event CTA */}
      <section className="py-16 bg-navy-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to Host Your Own Event?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Britannia Institute offers venue rental and event organization services for corporate training, workshops, and networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?reason=venue-rental" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red text-white font-medium hover:bg-red/90 transition-colors"
              >
                Inquire About Venues
              </Link>
              <Link 
                href="/services/event-planning" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Integration CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-navy-blue mb-4">
                  Never Miss an Event
                </h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our events calendar to stay updated on upcoming workshops, webinars, and networking opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-navy-blue text-white rounded-lg hover:bg-royal-blue transition-colors"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Google Calendar
                  </Link>
                  <Link 
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-royal-blue text-white rounded-lg hover:bg-navy-blue transition-colors"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Apple Calendar
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 p-8 bg-navy-blue/5">
                <h3 className="text-xl font-bold text-navy-blue mb-4">
                  Event Updates
                </h3>
                <p className="text-gray-600 mb-4">
                  Get notified about new events and exclusive invitations.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-navy-blue focus:border-transparent"
                  />
                  <button
                    className="px-4 py-2 bg-red text-white rounded-r-lg hover:bg-red/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  We care about your data in our <Link href="/privacy" className="text-navy-blue hover:underline">privacy policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 