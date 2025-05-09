'use client';

import React, { useState } from 'react';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Animate, StaggerContainer } from '@/components/ui/Animate';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { 
  User, 
  Book, 
  Award, 
  Settings, 
  CreditCard, 
  Calendar, 
  Clock, 
  FileText,
  Bell,
  CheckCircle2,
  BookOpen,
  Layout
} from 'lucide-react';

// Mock data for the profile page
const userData = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  role: 'Student',
  joined: 'January 2023',
  completedCourses: 3,
  activeCourses: 2,
  certificates: 2,
};

const coursesData = [
  {
    id: 1,
    title: 'Advanced Business Management',
    progress: 78,
    lastAccessed: '2 days ago',
    duration: '12 weeks',
    instructor: 'Dr. Robert Williams',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    progress: 45,
    lastAccessed: '4 hours ago',
    duration: '10 weeks',
    instructor: 'Prof. Emma Thompson',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Digital Marketing Essentials',
    progress: 100,
    lastAccessed: '2 weeks ago',
    duration: '8 weeks',
    instructor: 'James Anderson',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Project Management Professional',
    progress: 100,
    lastAccessed: '1 month ago',
    duration: '6 weeks',
    instructor: 'Dr. Lisa Chen',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Social Media Strategy',
    progress: 100,
    lastAccessed: '3 months ago',
    duration: '4 weeks',
    instructor: 'Mark Davis',
    status: 'Completed',
  },
];

const certificatesData = [
  {
    id: 1,
    title: 'Digital Marketing Essentials',
    issueDate: 'May 15, 2023',
    expires: 'May 15, 2026',
    credentialID: 'DME-7823-UK',
  },
  {
    id: 2,
    title: 'Project Management Professional',
    issueDate: 'April 3, 2023',
    expires: 'April 3, 2026',
    credentialID: 'PMP-5621-UK',
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Filter courses based on status
  const activeCourses = coursesData.filter(course => course.status === 'In Progress');
  const completedCourses = coursesData.filter(course => course.status === 'Completed');

  return (
    <Section padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Animate type="fadeInLeft" className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden sticky top-24">
              <div className="bg-gradient-navy p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <p className="text-sm text-white/80">{userData.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-1">
                <button 
                  onClick={() => setActiveTab('dashboard')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-navy-blue/10 text-navy-blue font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Layout size={18} />
                  <span>Dashboard</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('courses')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                    activeTab === 'courses' 
                      ? 'bg-navy-blue/10 text-navy-blue font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Book size={18} />
                  <span>My Courses</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('certificates')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                    activeTab === 'certificates' 
                      ? 'bg-navy-blue/10 text-navy-blue font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Award size={18} />
                  <span>Certificates</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('settings')} 
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-navy-blue/10 text-navy-blue font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
              </div>
              
              <Divider className="my-2" />
              
              <div className="p-4 pt-0">
                <Button variant="outline" className="w-full" size="sm">
                  Sign Out
                </Button>
              </div>
            </div>
          </Animate>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <StaggerContainer className="space-y-8">
                <Animate type="fadeInUp">
                  <Heading size="xl" className="mb-6">
                    Welcome back, {userData.name.split(' ')[0]}!
                  </Heading>
                </Animate>
                
                {/* Stats Cards */}
                <Animate type="fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card variant="bordered" className="bg-light-gold/30">
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <div>
                            <Text size="sm" color="muted">Active Courses</Text>
                            <Heading as="h3" size="lg" className="mt-1">{userData.activeCourses}</Heading>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-light-gold flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-gold" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card variant="bordered" className="bg-navy-blue/10">
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <div>
                            <Text size="sm" color="muted">Completed Courses</Text>
                            <Heading as="h3" size="lg" className="mt-1">{userData.completedCourses}</Heading>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-navy-blue/20 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-navy-blue" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card variant="bordered" className="bg-light-silver">
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <div>
                            <Text size="sm" color="muted">Certificates</Text>
                            <Heading as="h3" size="lg" className="mt-1">{userData.certificates}</Heading>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center">
                            <Award className="h-5 w-5 text-gray-600" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Animate>
                
                {/* Active Courses */}
                <Animate type="fadeInUp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Continue Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {activeCourses.map((course) => (
                          <div key={course.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-card transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
                              </div>
                              <Badge variant="navy">{course.status}</Badge>
                            </div>
                            
                            <div className="mt-4">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div 
                                  className="h-full bg-gradient-to-r from-navy-blue to-royal-blue rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-between">
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>Last: {course.lastAccessed}</span>
                              </div>
                              <Button variant="link-gold" size="sm">
                                Continue Course
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Animate>
                
                {/* Recent Achievements */}
                <Animate type="fadeInUp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border border-gray-100 rounded-xl p-4 bg-light-gold/10">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gold rounded-full mr-4 flex items-center justify-center">
                              <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Course Completed</h3>
                              <p className="text-gray-600">You completed "Digital Marketing Essentials"</p>
                              <p className="text-sm text-gray-500 mt-1">2 weeks ago</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-100 rounded-xl p-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-navy-blue rounded-full mr-4 flex items-center justify-center">
                              <CheckCircle2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Perfect Score</h3>
                              <p className="text-gray-600">100% on "Marketing Strategy" final exam</p>
                              <p className="text-sm text-gray-500 mt-1">1 month ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Animate>
              </StaggerContainer>
            )}
            
            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <StaggerContainer className="space-y-8">
                <Animate type="fadeInUp">
                  <Heading size="xl" className="mb-6">
                    My Courses
                  </Heading>
                </Animate>
                
                {/* Active Courses */}
                <Animate type="fadeInUp">
                  <div className="mb-8">
                    <Heading as="h2" size="lg" className="mb-4">
                      Active Courses ({activeCourses.length})
                    </Heading>
                    
                    <div className="space-y-4">
                      {activeCourses.map((course) => (
                        <Card key={course.id}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <p className="text-gray-600">Instructor: {course.instructor}</p>
                                <div className="flex items-center mt-2 text-sm text-gray-500">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span className="mr-4">Duration: {course.duration}</span>
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>Last accessed: {course.lastAccessed}</span>
                                </div>
                              </div>
                              <Badge variant="navy" size="lg">{course.status}</Badge>
                            </div>
                            
                            <div className="mt-6">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span className="font-medium">{course.progress}%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div 
                                  className="h-full bg-gradient-to-r from-navy-blue to-royal-blue rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-end">
                              <Button variant="primary" size="sm">
                                Continue Course
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Animate>
                
                {/* Completed Courses */}
                <Animate type="fadeInUp">
                  <div>
                    <Heading as="h2" size="lg" className="mb-4">
                      Completed Courses ({completedCourses.length})
                    </Heading>
                    
                    <div className="space-y-4">
                      {completedCourses.map((course) => (
                        <Card key={course.id} variant="bordered">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <p className="text-gray-600">Instructor: {course.instructor}</p>
                                <div className="flex items-center mt-2 text-sm text-gray-500">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span className="mr-4">Duration: {course.duration}</span>
                                  <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
                                  <span className="text-green-500">Completed</span>
                                </div>
                              </div>
                              <Badge variant="default" size="lg">{course.status}</Badge>
                            </div>
                            
                            <div className="mt-4 flex justify-end space-x-3">
                              <Button variant="outline" size="sm">
                                View Certificate
                              </Button>
                              <Button variant="ghost" size="sm">
                                Review Course
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Animate>
              </StaggerContainer>
            )}
            
            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <StaggerContainer className="space-y-8">
                <Animate type="fadeInUp">
                  <Heading size="xl" className="mb-6">
                    My Certificates
                  </Heading>
                  <Text color="muted" className="mb-8">
                    View and download your earned certificates
                  </Text>
                </Animate>
                
                <Animate type="fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesData.map(certificate => (
                      <Card key={certificate.id} className="bg-white border border-gray-100">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Award className="h-8 w-8 text-gold" />
                            <Badge variant="outline">Verified</Badge>
                          </div>
                          
                          <Heading as="h3" size="md" className="mb-2">
                            {certificate.title}
                          </Heading>
                          
                          <div className="space-y-2 mt-4 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Issue Date:</span>
                              <span>{certificate.issueDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Expiry Date:</span>
                              <span>{certificate.expires}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Credential ID:</span>
                              <span className="font-mono">{certificate.credentialID}</span>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-between">
                            <Button variant="outline" size="sm">
                              View Certificate
                            </Button>
                            <Button variant="ghost" size="sm">
                              Download PDF
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </Animate>
              </StaggerContainer>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <StaggerContainer className="space-y-8">
                <Animate type="fadeInUp">
                  <Heading size="xl" className="mb-6">
                    Account Settings
                  </Heading>
                </Animate>
                
                <Animate type="fadeInUp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Sarah"
                            className="input-elegant w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Johnson"
                            className="input-elegant w-full"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="input-elegant w-full"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button>
                          Save Changes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Animate>
                
                <Animate type="fadeInUp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="input-elegant w-full"
                            placeholder="••••••••"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="input-elegant w-full"
                            placeholder="••••••••"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="input-elegant w-full"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button>
                          Update Password
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Animate>
                
                <Animate type="fadeInUp">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="email_notifications"
                              name="email_notifications"
                              type="checkbox"
                              defaultChecked
                              className="h-4 w-4 text-navy-blue focus:ring-navy-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="email_notifications" className="font-medium text-gray-700">
                              Email Notifications
                            </label>
                            <p className="text-gray-500">Receive course updates and announcements</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="marketing_emails"
                              name="marketing_emails"
                              type="checkbox"
                              defaultChecked
                              className="h-4 w-4 text-navy-blue focus:ring-navy-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="marketing_emails" className="font-medium text-gray-700">
                              Marketing Emails
                            </label>
                            <p className="text-gray-500">Receive information about new courses and promotions</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button>
                          Save Preferences
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Animate>
              </StaggerContainer>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
} 