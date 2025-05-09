import React from 'react';
import Link from 'next/link';
import { Section, Container } from '@/components/ui';
import { Heading, Text } from '@/components/ui/Typography';
import { Divider } from '@/components/ui/Divider';
import { Animate } from '@/components/ui/Animate';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, FileText, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy | Britannia Institute',
  description: 'Our refund policy explains the terms and conditions for requesting a refund for our courses and services.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Section variant="light" padding="md">
        <Container>
          <div className="flex flex-col items-center mb-8">
            <Animate type="fadeInDown">
              <div className="w-16 h-16 bg-gradient-navy rounded-full flex items-center justify-center shadow-navy mb-6">
                <FileText className="text-white h-8 w-8" />
              </div>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.1}>
              <Heading as="h1" size="2xl" font="serif" className="text-center mb-4">
                Refund Policy
              </Heading>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.2}>
              <Text color="muted" className="text-center max-w-2xl mb-6">
                Last updated: June 5, 2023
              </Text>
            </Animate>
            
            <Animate type="fadeInUp" delay={0.3}>
              <Divider variant="gold" className="w-24 my-6" />
            </Animate>
          </div>
        </Container>
      </Section>
      
      <Section padding="lg">
        <Container size="md">
          <div className="bg-white rounded-2xl shadow-elegant p-8 md:p-10">
            <div className="prose prose-lg max-w-none">
              <Animate type="fadeInUp" delay={0.1}>
                <Text leading="relaxed" className="mb-6">
                  Thank you for choosing Britannia Institute for your educational needs. We strive to provide the highest quality learning experience. This Refund Policy outlines the terms and conditions for refunds related to our courses and services.
                </Text>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.15}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  1. Course Refund Eligibility
                </Heading>
                
                <Text leading="relaxed" className="mb-4">
                  <strong>14-Day Money-Back Guarantee:</strong> For most of our courses, we offer a 14-day money-back guarantee from the date of purchase. If you are not satisfied with your course, you may request a full refund within 14 days of enrollment, provided that:
                </Text>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>You have not completed more than 20% of the course content.</li>
                  <li>You have not downloaded course materials or resources.</li>
                  <li>You have not received a certificate of completion.</li>
                </ul>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.2}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  2. Non-Refundable Items
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  The following items are non-refundable:
                </Text>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Course fees after the 14-day refund period has expired.</li>
                  <li>Certification exam fees once the exam has been scheduled or taken.</li>
                  <li>Digital resources and materials that have been downloaded.</li>
                  <li>Subscription fees for ongoing membership services, after the first 7 days.</li>
                  <li>Processing fees and administrative charges.</li>
                </ul>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.25}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  3. Special Circumstances
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  We understand that extraordinary circumstances may arise. Refund requests after the 14-day period may be considered on a case-by-case basis for the following:
                </Text>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Medical emergencies (with supporting documentation).</li>
                  <li>Technical issues with our platform that significantly impact course access.</li>
                  <li>Significant discrepancy between course description and actual content.</li>
                </ul>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.3}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  4. How to Request a Refund
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  To request a refund, please follow these steps:
                </Text>
                
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Log in to your Britannia Institute account.</li>
                  <li>Go to "My Courses" and select the course you wish to receive a refund for.</li>
                  <li>Click on the "Request Refund" button.</li>
                  <li>Complete the refund request form, providing all required information.</li>
                  <li>Submit your request.</li>
                </ol>
                
                <Text leading="relaxed" className="mb-6">
                  Alternatively, you can contact our customer support team at <a href="mailto:refunds@britanniainstitute.ac.uk" className="text-navy-blue hover:underline">refunds@britanniainstitute.ac.uk</a>.
                </Text>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.35}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  5. Refund Processing
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  Once your refund request is approved:
                </Text>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Refunds will be processed within 5-10 business days.</li>
                  <li>The amount will be credited back to the original payment method used for the purchase.</li>
                  <li>You will receive an email confirmation once the refund has been processed.</li>
                </ul>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.4}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  6. Cancellations by Britannia Institute
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  If Britannia Institute cancels a course or program:
                </Text>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Students will receive a full refund of all fees paid for the canceled course.</li>
                  <li>Alternatively, students may choose to transfer to another course of equal value.</li>
                  <li>We will notify all enrolled students of cancellations at least 7 days before the scheduled start date, where possible.</li>
                </ul>
              </Animate>
              
              <Animate type="fadeInUp" delay={0.45}>
                <Heading as="h2" size="lg" className="mt-8 mb-4">
                  7. Policy Modifications
                </Heading>
                
                <Text leading="relaxed" className="mb-6">
                  Britannia Institute reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes indicates your acceptance of the revised Refund Policy.
                </Text>
              </Animate>
            </div>
            
            <Animate type="fadeInUp" delay={0.5}>
              <Divider variant="gold" className="my-10" />
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button.Link href="/" icon={<ArrowLeft size={16} />} variant="outline">
                  Return to Home
                </Button.Link>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button.Link href="/contact" icon={<HelpCircle size={16} />} variant="secondary">
                    Contact Support
                  </Button.Link>
                  <Button.Link href="/privacy-policy" variant="link">
                    Privacy Policy
                  </Button.Link>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </Section>
    </>
  );
} 