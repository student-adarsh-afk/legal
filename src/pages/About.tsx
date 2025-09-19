import React from 'react';
import { SecondaryNavbar } from '../components/SecondaryNavbar';
import { Footer } from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SecondaryNavbar />
      <main className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              About Legal Summariser
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a team of legal experts and AI engineers dedicated to making legal documents easier to understand.
            </p>
          </div>
          <div className="mt-16 text-lg text-gray-700 space-y-6">
            <p>
              Our mission is to empower individuals and businesses to navigate the complexities of legal contracts with confidence. We believe that everyone deserves to understand the documents they are signing, and our AI-powered tool is designed to provide clear, concise summaries that highlight the most important information.
            </p>
            <p>
              Legal Summariser was founded on the principle that technology can make legal services more accessible and affordable. Our team has years of experience in both the legal and technology industries, and we are passionate about using our expertise to solve real-world problems.
            </p>
            <p>
              We are committed to providing a secure and private platform for our users. Your documents are encrypted and processed securely, and we never store or share your data without your consent.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;