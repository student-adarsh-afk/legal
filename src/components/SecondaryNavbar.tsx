import { Scale } from "lucide-react";
import { Button } from "./ui/button";

export function SecondaryNavbar() {
  return (
    <nav className="bg-gray-100 shadow-md rounded-full my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Legal Summariser</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-dark-gray hover:text-primary transition-colors" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
              Home
            </a>
            <a href="/pricing" className="text-dark-gray hover:text-primary transition-colors" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/pricing');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
              Pricing
            </a>
            <a href="/about" className="text-dark-gray hover:text-primary transition-colors" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/about');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
              About
            </a>
            <a href="/contact" className="text-dark-gray hover:text-primary transition-colors" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
