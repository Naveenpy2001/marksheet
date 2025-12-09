'use client'
import React, { useState, useEffect, useRef } from 'react';

const ProfessionalProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "Comprehensive healthcare management solution with patient records, appointment scheduling, and real-time analytics",
      image: "https://images.unsplash.com/photo-1516549655669-df6654e447e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Healthcare",
      features: ["Patient Management", "Analytics", "24/7 Support"]
    },
    {
      id: 2,
      title: "Education Management System",
      description: "Complete educational platform with student tracking, course management, and performance analytics",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Education",
      features: ["Student Portal", "Grade Management", "Attendance Tracking"]
    },
    {
      id: 3,
      title: "AI Chat Bot",
      description: "Intelligent conversational AI powered by advanced NLP for seamless customer engagement",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Artificial Intelligence",
      features: ["24/7 Availability", "Multi-language", "Smart Learning"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Scalable online shopping solution with advanced inventory management and payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Retail",
      features: ["Payment Gateway", "Inventory System", "Order Tracking"]
    },
    {
      id: 5,
      title: "Financial Analytics Suite",
      description: "Advanced financial data analysis with predictive modeling and comprehensive reporting tools",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Finance",
      features: ["Real-time Data", "Forecasting", "Risk Analysis"]
    },
    {
      id: 6,
      title: "Smart Home Automation",
      description: "IoT-based home automation with voice control, energy monitoring, and security integration",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "IoT",
      features: ["Voice Control", "Energy Monitor", "Smart Security"]
    }
  ];

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    setProgress(0);
    let currentProgress = 0;
    
    progressIntervalRef.current = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        currentProgress = 0;
      }
    }, 100);
    
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % products.length);
      setProgress(0);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    intervalRef.current = null;
    progressIntervalRef.current = null;
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    
    return () => {
      stopAutoplay();
    };
  }, [isPlaying, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
    setProgress(0);
    if (isPlaying) {
      stopAutoplay();
      startAutoplay();
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setProgress(0);
    if (isPlaying) {
      stopAutoplay();
      startAutoplay();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
    if (isPlaying) {
      stopAutoplay();
      startAutoplay();
    }
  };

  return (
    <div className="relative pt-10 w-full h-screen bg-black overflow-hidden">
      {/* Background Slides */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-8000 ease-out"
            style={{ 
              backgroundImage: `url(${product.image})`,
              transform: index === activeIndex ? 'scale(1)' : 'scale(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/90" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`transition-all duration-700 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-12 absolute'
                  }`}
                >
                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 bg-linear-to-r from-cyan-600 to-cyan-300 px-6 py-2 rounded-full mb-6 transform hover:scale-105 transition-transform">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white text-sm font-semibold tracking-wider uppercase">
                      {product.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {product.title}
                  </h1>

                  {/* Description */}
                  <p className="text-1xl text-gray-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm hover:bg-white/20 transition-all"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                      <span>Explore Solution</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content - Slide Counter */}
            <div className="hidden lg:flex items-center justify-end">
              <div className="text-right space-y-4">
                <div className="text-8xl font-bold text-white/20">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
                <div className="text-2xl text-white/60">
                  / {String(products.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Panel - Bottom Center */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all shadow-2xl"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators - Bottom Right */}
      <div className="absolute bottom-12 right-12 flex space-x-3 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-12 h-1 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/50'
            }`}>
              {index === activeIndex && (
                <div 
                  className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slide Number - Top Right */}
      <div className="absolute top-12 right-12 text-white z-20">
        {/* <div className="flex items-baseline space-x-2 font-mono">
          <span className="text-4xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="text-xl text-white/60">/ {String(products.length).padStart(2, '0')}</span>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 z-30"></div>
    </div>
  );
};

export default ProfessionalProductSlider;