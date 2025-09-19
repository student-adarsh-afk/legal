import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { SecondaryNavbar } from '../components/SecondaryNavbar';
import { Footer } from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SecondaryNavbar />
      <main className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Contact our team
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discuss pricing, plans, and use-cases for your organization.
            </p>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="mt-1">
                  <Input type="text" name="first-name" id="first-name" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <div className="mt-1">
                  <Input type="text" name="last-name" id="last-name" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="work-email" className="block text-sm font-medium text-gray-700">Work Email</label>
                <div className="mt-1">
                  <Input type="email" name="work-email" id="work-email" />
                </div>
              </div>
              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title</label>
                <div className="mt-1">
                  <Input type="text" name="job-title" id="job-title" />
                </div>
              </div>
              <div>
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
                <div className="mt-1">
                  <Input type="text" name="company-name" id="company-name" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">Company Size (Engineers)</label>
                <div className="mt-1">
                  <Input type="text" name="company-size" id="company-size" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="additional-details" className="block text-sm font-medium text-gray-700">Additional Details (Optional)</label>
                <div className="mt-1">
                  <Textarea name="additional-details" id="additional-details" rows={4} />
                </div>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full">Submit</Button>
              </div>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Trusted by millions of engineers at leading companies</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
