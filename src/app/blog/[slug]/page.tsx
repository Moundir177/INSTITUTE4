'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { Animate } from '@/components/ui/Animate';
import { 
  Calendar, User, Tag, Clock, ChevronRight, Share2, 
  Facebook, Twitter, Linkedin, Copy, ArrowLeft, BookOpen
} from 'lucide-react';

// Sample blog data - in a real implementation, this would be fetched from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Education: How Technology is Transforming Learning',
    slug: 'future-of-education-technology',
    content: `
      <p>Education is undergoing a profound transformation, driven by technological advancements that are reshaping how knowledge is delivered, absorbed, and applied. From artificial intelligence to virtual reality, emerging technologies are creating new possibilities for learners of all ages and backgrounds.</p>

      <h2>The Rise of Personalized Learning</h2>
      <p>One of the most significant impacts of technology on education is the ability to personalize learning experiences. AI-powered platforms can now analyze individual learning patterns, strengths, and weaknesses to create customized learning paths. This level of personalization was previously impossible in traditional classroom settings where a single teacher must manage the needs of dozens of students simultaneously.</p>
      
      <p>Adaptive learning systems can adjust content difficulty, pacing, and format based on real-time performance data. For instance, if a student struggles with algebraic concepts, the system might provide additional examples, visual aids, or more practice problems until mastery is achieved. This ensures that no student is left behind or held back by the pace of the class.</p>
      
      <h2>Immersive Learning Environments</h2>
      <p>Virtual reality (VR) and augmented reality (AR) are transforming abstract concepts into tangible experiences. Medical students can practice surgical procedures in virtual operating rooms before touching real patients. History classes can "travel" to ancient civilizations or significant historical events. Science students can manipulate molecular structures in three-dimensional space.</p>
      
      <p>These immersive technologies increase engagement and retention by converting passive learning into active experiences. They're particularly valuable for visual and kinesthetic learners who benefit from seeing and interacting with content rather than simply reading about it.</p>
      
      <h2>Global Classrooms Without Boundaries</h2>
      <p>Digital platforms have eliminated geographical barriers to quality education. Students in remote villages can now access lectures from world-renowned professors at leading universities. Online learning communities bring together diverse perspectives from around the globe, enriching discussions and fostering cross-cultural understanding.</p>
      
      <p>This democratization of education is perhaps technology's greatest contribution to learning. Knowledge is no longer confined to those with the privilege of proximity to educational institutions or financial resources to attend them.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite its transformative potential, educational technology comes with challenges that must be addressed. The digital divide remains a significant concern, with many students lacking reliable internet access or necessary devices. Privacy considerations around student data collection require careful attention. And the human element of teaching—mentorship, emotional support, and inspiration—remains irreplaceable.</p>
      
      <p>Moreover, educators need proper training and support to effectively integrate technology into their teaching practices. Technology should enhance rather than replace good pedagogy.</p>
      
      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect to see further integration of emerging technologies like blockchain for secure credential verification, more sophisticated AI tutoring systems that approach human-level guidance, and expanded use of data analytics to identify educational trends and opportunities for improvement.</p>
      
      <p>The most effective educational models will likely blend technology with traditional human-centered approaches—creating hybrid systems that leverage the best of both worlds. Technology will handle content delivery, basic assessment, and personalization, while teachers focus on higher-order thinking skills, social-emotional development, and creative exploration.</p>
      
      <h2>Conclusion</h2>
      <p>The technological transformation of education represents an unprecedented opportunity to address longstanding challenges in learning accessibility, engagement, and effectiveness. By embracing these innovations thoughtfully, we can work toward an educational future that is more personalized, engaging, and equitable than ever before.</p>
      
      <p>At Britannia Institute, we remain committed to leveraging these technologies responsibly to enhance our educational offerings while maintaining the human connection that remains at the heart of meaningful learning experiences.</p>
    `,
    category: 'Education Technology',
    author: {
      name: 'Dr. Emma Thompson',
      role: 'Director of Educational Technology',
      bio: 'Dr. Thompson has over 15 years of experience in educational technology research and implementation. She holds a Ph.D. in Learning Sciences from Cambridge University and regularly consults for educational institutions on technology integration strategies.',
      image: '/images/authors/emma-thompson.jpg'
    },
    date: 'May 15, 2023',
    readTime: '8 min read',
    tags: ['Education', 'Technology', 'AI in Education', 'Future Learning'],
    featured: true,
    image: '/images/blog/education-tech.jpg'
  },
  {
    id: 2,
    title: 'Developing Essential Skills for the Modern Workplace',
    slug: 'essential-skills-modern-workplace',
    excerpt: 'What skills are employers looking for in 2023? This article examines the most in-demand professional capabilities and how to develop them through continuous learning.',
    category: 'Career Development',
    author: {
      name: 'James Wilson',
      role: 'Career Development Specialist',
      bio: 'James Wilson is a certified career coach with expertise in professional skills development. He has helped hundreds of professionals transition careers and develop relevant skills for today\'s job market.',
      image: '/images/authors/james-wilson.jpg'
    },
    date: 'April 28, 2023',
    readTime: '6 min read',
    tags: ['Career', 'Skills Development', 'Professional Growth'],
    featured: true,
    image: '/images/blog/workplace-skills.jpg'
  },
  // More blog posts would be defined here
];

// Sample related posts function
const getRelatedPosts = (currentSlug: string, currentTags: string[]) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => ({
      ...post,
      relevanceScore: post.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(post.slug, post.tags);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };
  
  return (
    <>
      <Section variant="navy" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Animate type="fadeInDown">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Link>
              
              <Badge variant="gold" className="mb-4">{post.category}</Badge>
              
              <Heading as="h1" size="2xl" font="serif" className="text-white mb-6">
                {post.title}
              </Heading>
              
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg" className="-mt-16 relative z-10">
        <Container size="md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Animate type="fadeInUp">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    {/* Featured image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-blue/10">
                      <BookOpen className="h-16 w-16 text-navy-blue/30" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <article className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>
                    
                    <Divider className="my-8" />
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, index) => (
                        <Link key={index} href={`/blog?tag=${tag}`}>
                          <Badge variant="outline" className="hover:bg-gray-50 transition-colors">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Text color="muted" size="sm">
                        Share this article:
                      </Text>
                      <div className="flex gap-2">
                        <button 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="h-4 w-4" />
                        </button>
                        <button 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="h-4 w-4" />
                        </button>
                        <button 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-blue/10 hover:bg-navy-blue hover:text-white transition-colors"
                          onClick={copyToClipboard}
                          aria-label="Copy link"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.1}>
                <Card className="mt-8">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-24 h-24 rounded-full bg-navy-blue/10 flex items-center justify-center flex-shrink-0">
                        <User className="h-12 w-12 text-navy-blue/40" />
                      </div>
                      <div>
                        <Heading as="h3" size="lg" className="mb-1">
                          {post.author.name}
                        </Heading>
                        <Text size="sm" color="muted" className="mb-3">
                          {post.author.role}
                        </Text>
                        <Text className="mb-4">
                          {post.author.bio}
                        </Text>
                        <div className="flex gap-2">
                          <Button.Link href="#" variant="outline" size="sm">
                            View Profile
                          </Button.Link>
                          <Button.Link href="#" variant="ghost" size="sm">
                            View All Articles
                          </Button.Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Animate>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Animate type="fadeInRight">
                  <Card>
                    <div className="p-6">
                      <Heading as="h3" size="md" className="mb-4">
                        Related Articles
                      </Heading>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="flex items-start">
                            <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 mr-3"></div>
                            <div>
                              <Link href={`/blog/${relatedPost.slug}`}>
                                <Text size="sm" weight="medium" className="hover:text-navy-blue transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </Text>
                              </Link>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{relatedPost.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button.Link href="/blog" variant="link" className="w-full justify-center">
                          View All Articles
                        </Button.Link>
                      </div>
                    </div>
                  </Card>
                </Animate>
                
                <Animate type="fadeInRight" delay={0.1}>
                  <Card>
                    <div className="p-6">
                      <Heading as="h3" size="md" className="mb-3">
                        Subscribe to Our Newsletter
                      </Heading>
                      <Text color="muted" className="mb-4">
                        Get the latest articles and educational resources delivered straight to your inbox.
                      </Text>
                      <div className="space-y-3">
                        <input
                          type="email"
                          className="input-elegant w-full"
                          placeholder="Your email address"
                        />
                        <Button className="w-full">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Animate>
                
                <Animate type="fadeInRight" delay={0.2}>
                  <Card>
                    <div className="p-6">
                      <Heading as="h3" size="md" className="mb-4">
                        Categories
                      </Heading>
                      <div className="space-y-2">
                        <Link 
                          href="/blog?category=Education Technology"
                          className="block py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Education Technology
                        </Link>
                        <Link 
                          href="/blog?category=Career Development"
                          className="block py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Career Development
                        </Link>
                        <Link 
                          href="/blog?category=Learning Science"
                          className="block py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Learning Science
                        </Link>
                        <Link 
                          href="/blog"
                          className="block py-1.5 px-2 rounded-lg text-navy-blue hover:bg-navy-blue/5 transition-colors font-medium"
                        >
                          View All Categories
                        </Link>
                      </div>
                    </div>
                  </Card>
                </Animate>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg" className="bg-light-silver/30">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="xl" font="serif" className="mb-4">
              Explore More Articles
            </Heading>
            <Text color="muted" className="max-w-2xl mx-auto">
              Discover more insights, guides, and expert perspectives on education, career development, and professional growth.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).filter(p => p.slug !== post.slug).map((post) => (
              <Animate key={post.id} type="fadeInUp">
                <Card className="h-full hover:shadow-card transition-shadow">
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2">{post.category}</Badge>
                    <Link href={`/blog/${post.slug}`}>
                      <Heading as="h3" size="md" className="mb-2 hover:text-navy-blue transition-colors line-clamp-2">
                        {post.title}
                      </Heading>
                    </Link>
                    <Text color="muted" className="mb-4 line-clamp-2">
                      {post.excerpt}
                    </Text>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {post.date}
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-navy-blue hover:text-royal-blue transition-colors text-sm font-medium flex items-center"
                      >
                        Read more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Animate>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button.Link href="/blog" variant="outline">
              View All Articles
            </Button.Link>
          </div>
        </Container>
      </Section>
    </>
  );
} 