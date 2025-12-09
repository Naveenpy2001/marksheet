'use client';
import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-linear-to-br from-slate-50 via-cyan-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-3">About Our Company</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600">About</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500"> Us</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
                If you Take any Type of Project We are Ready to Install and Give Maintenance of project.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                We like challenges to solve and give solutions to your business growth and you can monitor your business and employees work easily. We will change your business hard work to easily.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                We offer services for a wide range of fields such as software development, web development, graphic development, cross platform development etc. For more information navigate to our services section.
              </p>

              <div className={`overflow-hidden transition-all duration-500 ${showFullContent ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-cyan-200 mt-4">
                  <p className="text-xl font-semibold text-cyan-700 mb-3 italic">
                    "Explore The Services We Offer For You"
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We are experts in these services, we have strong experience and technical expert team, we have our own German Technology server, our team will complete and give you project in time, we will provide our services like how clients feel comfortable, we can handle any type of project with low cost and we are expert in install and maintaining projects, we have strong man power in all over Andhra Pradesh and Telangana and Tamilnadu states.
                  </p>
                </div>
              </div>

              <button 
                onClick={toggleContent}
                className="mt-6 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                {showFullContent ? 'Read Less' : 'Read More'}
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${showFullContent ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats and Image */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Projects Completed", delay: "delay-100" },
                { number: "50+", label: "Expert Team", delay: "delay-200" },
                { number: "3", label: "States Coverage", delay: "delay-300" },
                { number: "100%", label: "Client Satisfaction", delay: "delay-400" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${stat.delay}`}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 z-20">
                <p className="text-white text-lg font-semibold">Our Dedicated Team</p>
                <p className="text-cyan-200 text-sm">Working together for your success</p>
              </div>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              {["German Tech Server", "On-Time Delivery", "24/7 Support", "Low Cost"].map((badge, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-cyan-700 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-cyan-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 bg-linear-to-r from-cyan-100 to-blue-100 px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-pink-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-indigo-500 border-2 border-white"></div>
            </div>
            <p className="text-gray-700 font-semibold">Trusted by businesses across 3 states</p>
          </div>
        </div>
      </div>
    </div>
  );
}