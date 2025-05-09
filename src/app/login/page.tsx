'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { Animate } from '@/components/ui/Animate';
import { Mail, Lock, ArrowRight, User, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication (replace with real auth logic)
    setTimeout(() => {
      setIsLoading(false);
      // Handle login success 
      console.log('Login attempted with:', { email, password });
    }, 1500);
  };

  return (
    <Section variant="light" padding="lg">
      <Container size="sm">
        <div className="flex flex-col items-center">
          <Animate type="fadeInDown">
            <div className="w-20 h-20 bg-gradient-navy rounded-full flex items-center justify-center shadow-navy mb-8">
              <User className="text-white h-10 w-10" />
            </div>
          </Animate>
          
          <Animate type="fadeInUp" delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">
              Welcome Back
            </h1>
          </Animate>
          
          <Animate type="fadeInUp" delay={0.3}>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Sign in to access your account, track your courses, and continue your learning journey.
            </p>
          </Animate>

          <Animate type="fadeInUp" delay={0.4}>
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-elegant pl-10 w-full"
                          placeholder="yourname@example.com"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input-elegant pl-10 pr-10 w-full"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 text-navy-blue focus:ring-navy-blue border-gray-300 rounded"
                        />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <Link
                          href="/forgot-password"
                          className="font-medium text-navy-blue hover:text-royal-blue transition-colors"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    {/* Login Button */}
                    <div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full"
                        icon={isLoading ? undefined : <ArrowRight />}
                        iconPosition="right"
                      >
                        {isLoading ? "Signing in..." : "Sign in"}
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Divider */}
                <div className="relative mt-8 mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="btn-outline py-2 px-4 text-sm flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="btn-outline py-2 px-4 text-sm flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                      />
                    </svg>
                    Facebook
                  </button>
                </div>

                {/* Register Link */}
                <div className="mt-8 text-center text-sm">
                  <span className="text-gray-600">Don't have an account?</span>{' '}
                  <Link
                    href="/register"
                    className="font-medium text-navy-blue hover:text-royal-blue transition-colors"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </Section>
  );
} 