import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { FileUpload } from "./components/FileUpload";
import { LoadingState } from "./components/LoadingState";
import { ResultsPanel } from "./components/ResultsPanel";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import AboutPage from "./pages/About";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import Chatbot from "./components/Chatbot";

type AppState = 'upload' | 'loading' | 'results';

export default function App() {
  const [appState, setAppState] = useState<AppState>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAppState('loading');
    
    // Simulate processing
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAppState('results');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const resetApp = () => {
    setAppState('upload');
    setSelectedFile(null);
    setLoadingProgress(0);
  };

  if (route === '/about') {
    return (
      <div className="min-h-screen bg-background">
        <AboutPage />
        <Chatbot />
      </div>
    );
  }

  if (route === '/pricing') {
    return (
      <div className="min-h-screen bg-background">
        <PricingPage />
        <Chatbot />
      </div>
    );
  }

  if (route === '/contact') {
    return (
      <div className="min-h-screen bg-background">
        <ContactPage />
        <Chatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section - shown only on upload state */}
        {appState === 'upload' && (
          <>
            {/* Hero Background */}
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
              <div className="absolute inset-0 opacity-5">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1653378972269-aae6d81e2c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDAwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Legal documents background"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">
                      Understand Your Contracts
                      <span className="block text-dark-gray">in Simple Language</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Upload your legal documents and get clear, actionable summaries that highlight 
                      what matters most - dates, money, and potential red flags.
                    </p>
                  </div>
                  
                  <FileUpload onFileSelect={handleFileSelect} />
                  
                  <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>AI-Powered Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Instant Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-light-gray">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-dark-gray mb-4">
                    Why Choose Legal Summariser?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get professional-grade document analysis without the legal fees
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-gray">Smart Analysis</h3>
                    <p className="text-muted-foreground">AI identifies key clauses, dates, and financial terms automatically</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-gray">Secure & Private</h3>
                    <p className="text-muted-foreground">Your documents are processed securely and never stored or shared</p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orange/10 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-gray">Instant Results</h3>
                    <p className="text-muted-foreground">Get comprehensive summaries in under 60 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Loading State */}
        {appState === 'loading' && selectedFile && (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <LoadingState fileName={selectedFile.name} progress={loadingProgress} />
            </div>
          </div>
        )}

        {/* Results State */}
        {appState === 'results' && selectedFile && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-dark-gray">Document Analysis Complete</h1>
                  <p className="text-muted-foreground">Analysis for: {selectedFile.name}</p>
                </div>
                <button
                  onClick={resetApp}
                  className="text-accent hover:text-primary transition-colors font-medium"
                >
                  ← Analyze New Document
                </button>
              </div>
              
              <ResultsPanel fileName={selectedFile.name} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}