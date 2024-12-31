'use client'

import React from 'react';

export default function Contact() {
  return (
    <div className="bg-everready-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-white">
        {/* Main Content */}
        <div className="text-center sm:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-12">
            We're here to help you connect and find solutions to your needs. Our team is ready to provide the support and information you're looking for.
          </p>

          {/* Contact Details */}
          <div className="space-y-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <a 
                href="mailto:admin@ever-ready.ai" 
                className="text-xl text-everready-primary hover:text-everready-primary/80 transition-colors"
              >
                admin@ever-ready.ai
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">WhatsApp</h2>
              <a 
                href="https://wa.me/447768932956" 
                className="text-xl text-everready-primary hover:text-everready-primary/80 transition-colors"
              >
                +44 7768 932956
              </a>
            </div>
          </div>

          {/* Tagline with gradient */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 via-everready-primary to-everready-primary bg-clip-text text-transparent">
              We are ready when you are !!
            </h2>
          </div>

          {/* Feedback Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Feedback</h2>
            <p className="text-xl leading-relaxed">
              Your feedback helps us improve. If you have suggestions or comments about our services, 
              please let us know at{' '}
              <a 
                href="mailto:admin@ever-ready.ai" 
                className="text-red-500 hover:text-red-400 transition-colors underline"
              >
                admin@ever-ready.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
