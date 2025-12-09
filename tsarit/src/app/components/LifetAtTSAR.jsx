'use client'

import { useState, useEffect, useRef } from "react";
import { 
  Rocket, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  Heart,
  Sparkles
} from "lucide-react";

export default function LifeAtTSAR() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const values = [
    {
      icon: <Rocket size={28} />,
      title: "Take Risks",
      description: "Embrace innovation and push boundaries to achieve extraordinary results",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Users size={28} />,
      title: "Put Customers First",
      description: "Deliver exceptional value and build lasting relationships with our clients",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Target size={28} />,
      title: "Drive Excellence",
      description: "Strive for the highest standards in everything we do",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Shield size={28} />,
      title: "Build Credibility",
      description: "Earn trust through transparency, reliability, and consistent delivery",
      color: "from-cyan-600 to-teal-600"
    },
    {
      icon: <Zap size={28} />,
      title: "Stay Agile",
      description: "Adapt quickly to changing markets and evolving customer needs",
      color: "from-teal-600 to-emerald-600"
    },
    {
      icon: <Heart size={28} />,
      title: "Be Humane",
      description: "Foster a culture of empathy, respect, and genuine care for people",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          values.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
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

  return (
    <div 
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-20 lg:py-28 bg-linear-to-br from-gray-50 via-cyan-50/30 to-teal-50/40 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full shadow-lg shadow-cyan-500/30">
                <Sparkles size={18} className="text-white" />
                <span className="text-white text-sm font-semibold tracking-wide">OUR VALUES</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Bring your big ideas
                </span>
                <br />
                <span className="text-gray-800">and dreams</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                We ensure that the work is engaging, our culture is empowering and the learning opportunities are enriching.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* linear overlay on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex p-4 rounded-xl bg-linear-to-br ${value.color} mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${value.color} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Section */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team at TSAR" 
                  className="w-full h-[500px] lg:h-[650px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* linear overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-600/20 via-transparent to-teal-600/20 group-hover:from-cyan-600/30 group-hover:to-teal-600/30 transition-all duration-500"></div>
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-cyan-100 transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                        500+
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Team Members</div>
                    </div>
                  </div>
                </div>

                {/* Bottom card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-cyan-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-teal-500 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-500 to-emerald-500 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-600 to-blue-600 border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-bold text-white">+50</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Join Our Team</div>
                      <div className="text-xs text-gray-600">Growing every day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-cyan-400 to-teal-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-linear-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}