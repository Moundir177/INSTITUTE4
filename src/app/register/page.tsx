'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section, Container } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { Animate } from '@/components/ui/Animate';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Password strength checker
  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, text: '' };
    
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 8;
    
    const criteria = [hasLowercase, hasUppercase, hasNumber, hasSpecialChar, isLongEnough];
    const score = criteria.filter(Boolean).length;
    
    let text = '';
    if (score <= 2) text = 'Weak';
    else if (score <= 4) text = 'Good';
    else text = 'Strong';
    
    return { score, text };
  };

  const passwordStrength = getPasswordStrength(formData.password);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      // Simulate registration API call
      setTimeout(() => {
        setIsLoading(false);
        console.log('Registration attempted with:', formData);
        // Handle registration success - redirect or show success message
      }, 1500);
    }
  };

  return (
    <Section variant="light" padding="lg">
      <Container size="md">
        <div className="flex flex-col items-center">
          <Animate type="fadeInDown">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold mb-8">
              <User className="text-navy-blue h-10 w-10" />
            </div>
          </Animate>
          
          <Animate type="fadeInUp" delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">
              Create Your Account
            </h1>
          </Animate>
          
          <Animate type="fadeInUp" delay={0.3}>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Join Britannia Institute today and access premium educational courses and resources.
            </p>
          </Animate>

          <Animate type="fadeInUp" delay={0.4}>
            <div className="w-full max-w-2xl">
              <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`input-elegant pl-10 w-full ${errors.firstName ? 'border-red' : ''}`}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`input-elegant pl-10 w-full ${errors.lastName ? 'border-red' : ''}`}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2">
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
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-elegant pl-10 w-full ${errors.email ? 'border-red' : ''}`}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password */}
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
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className={`input-elegant pl-10 pr-10 w-full ${errors.password ? 'border-red' : ''}`}
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
                      {formData.password && (
                        <div className="mt-2">
                          <div className="flex items-center">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full transition-all ${
                                  passwordStrength.score <= 2 ? 'bg-red' : 
                                  passwordStrength.score <= 4 ? 'bg-gold' : 'bg-green-500'
                                }`} 
                                style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-xs text-gray-600">{passwordStrength.text}</span>
                          </div>
                          <ul className="mt-1 text-xs text-gray-500 space-y-1">
                            <li className="flex items-center">
                              <CheckCircle className={`h-3 w-3 mr-1 ${formData.password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                              At least 8 characters
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className={`h-3 w-3 mr-1 ${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                              At least one uppercase letter
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className={`h-3 w-3 mr-1 ${/[0-9]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                              At least one number
                            </li>
                          </ul>
                        </div>
                      )}
                      {errors.password && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`input-elegant pl-10 pr-10 w-full ${errors.confirmPassword ? 'border-red' : ''}`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="md:col-span-2 mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={() => setAgreeTerms(!agreeTerms)}
                            className="h-4 w-4 text-navy-blue focus:ring-navy-blue border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="text-gray-600">
                            I agree to the{' '}
                            <Link href="/terms-conditions" className="text-navy-blue hover:underline">
                              Terms and Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy-policy" className="text-navy-blue hover:underline">
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>
                      {errors.terms && (
                        <p className="mt-1 text-sm text-red flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.terms}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-6">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full"
                        size="lg"
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Login Link */}
                <div className="mt-8 text-center text-sm">
                  <span className="text-gray-600">Already have an account?</span>{' '}
                  <Link
                    href="/login"
                    className="font-medium text-navy-blue hover:text-royal-blue transition-colors"
                  >
                    Sign in
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