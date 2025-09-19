import React from 'react';
import { Button } from '../components/ui/button';
import { SecondaryNavbar } from '../components/SecondaryNavbar';
import { Footer } from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SecondaryNavbar />
      <main className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Choose Your Plan
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start for free, then upgrade to our Pro plan for more features and unlimited access.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Free</h2>
              <p className="mt-4 text-gray-500">For personal use and occasional summaries.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-lg font-medium text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 documents per month
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic summary generation
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <Button variant="outline" className="mt-8 w-full">Get Started</Button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-semibold text-primary">Pro</h2>
              <p className="mt-4 text-gray-500">For professionals and teams who need more power.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">₹499</span>
                <span className="text-lg font-medium text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited documents
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced summary generation
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Priority email support
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Team collaboration features
                </li>
              </ul>
              <Button className="mt-8 w-full">Choose Pro</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;