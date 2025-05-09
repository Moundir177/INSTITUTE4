'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <Link href="/" className="flex items-center justify-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-navy-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BI</span>
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red rounded-full border-2 border-white"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-navy-blue to-royal-blue bg-clip-text text-transparent">
              Britannia<span className="text-red">Institute</span>
            </span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-navy-blue">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>
        
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Check your email</h3>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions to reset your password.
              </p>
              <div className="mt-6 flex flex-col space-y-4">
                <Link 
                  href="/login" 
                  className="inline-flex justify-center items-center px-4 py-2 bg-navy-blue text-white rounded-md hover:bg-royal-blue transition-colors"
                >
                  Back to Login
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Try a different email
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      error ? 'border-red' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-blue focus:border-navy-blue sm:text-sm`}
                    placeholder="you@example.com"
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red">{error}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-blue hover:bg-royal-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-blue ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending reset link...
                    </>
                  ) : (
                    'Send password reset link'
                  )}
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <Link 
                href="/login" 
                className="inline-flex items-center text-sm text-navy-blue hover:text-royal-blue"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 