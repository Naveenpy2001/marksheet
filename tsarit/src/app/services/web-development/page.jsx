'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Zap, CheckCircle, ArrowRight, Globe, Palette, ShoppingCart, Monitor, Layers, Target, Rocket, Award, Users, TrendingUp, Star, Clock, Mail, Phone, MapPin, Send, Sparkles, Shield, Calendar, ArrowUpRight, ChevronRight, Smartphone as Mobile, Cpu, BarChart3, Globe as Web, Database, Cloud, Server, Headphones, ThumbsUp, Target as Bullseye, User, Building, AlertCircle, XCircle, CheckCircle2 } from 'lucide-react';
import './dev.css'

export default function WebDevServices() {
  const [scrollY, setScrollY] = useState(0);
  const [serviceType, setServiceType] = useState('web');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: 'web'
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const observerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, [serviceType]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setFormStatus({ type: 'error', message: 'First name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!formData.phone.trim()) {
      setFormStatus({ type: 'error', message: 'Phone number is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({ type: 'loading', message: 'Sending...' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! We have received your message and will contact you within 24 hours.' 
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          serviceType: serviceType
        });
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const webServices = [
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Custom Website Development",
      description: "Get a website that's uniquely yours! We craft stunning, high-performance websites tailored to your brand. Stand out from the competition.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      stats: "100+ Sites Built",
      features: ["Custom Design", "SEO Optimized", "Fast Loading", "Mobile First"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-600" />,
      title: "E-Commerce Solutions",
      description: "Ready to sell online? We build complete e-commerce stores that convert visitors into customers. Payment integration, inventory management - all included!",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      stats: "₹50Cr+ Revenue Generated",
      features: ["Payment Gateway", "Inventory System", "User Dashboard", "Analytics"]
    },
    {
      icon: <Monitor className="w-12 h-12 text-green-600" />,
      title: "Responsive Web Design",
      description: "Your website will look perfect on every device! 60% of users browse on mobile - don't lose them with a poor mobile experience.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      stats: "100% Mobile Optimized",
      features: ["Responsive Layout", "Touch Friendly", "Fast Performance", "Cross Browser"]
    },
    {
      icon: <Palette className="w-12 h-12 text-green-600" />,
      title: "Premium UI/UX Design",
      description: "First impressions matter! Our designers create stunning interfaces that users love. Beautiful design that drives real business results.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      stats: "Award-Winning Designs",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
    },
    {
      icon: <Code className="w-12 h-12 text-green-600" />,
      title: "Web Applications",
      description: "Need something special? We build powerful web apps with custom features that automate your business and save time.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      stats: "50+ Custom Apps",
      features: ["React/Next.js", "API Integration", "Real-time Updates", "Scalable"]
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Performance Optimization",
      description: "Speed matters! Slow websites lose customers. We optimize for blazing-fast load times and better Google rankings.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      stats: "< 2 Sec Load Time",
      features: ["Speed Audit", "Image Optimization", "Caching", "CDN Setup"]
    }
  ];

  const appServices = [
    {
      icon: <Smartphone className="w-12 h-12 text-red-600" />,
      title: "iOS App Development",
      description: "Native iOS apps that leverage the full power of Apple devices. Swift, elegant, and built for performance on iPhone and iPad.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      stats: "50+ iOS Apps",
      features: ["SwiftUI", "App Store Ready", "Push Notifications", "AR Integration"]
    },
    {
      icon: <Monitor className="w-12 h-12 text-red-600" />,
      title: "Android App Development",
      description: "Reach billions of Android users! We create powerful native Android apps with seamless user experiences and top performance.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop",
      stats: "80+ Android Apps",
      features: ["Kotlin", "Material Design", "Play Store Ready", "Background Services"]
    },
    {
      icon: <Layers className="w-12 h-12 text-red-600" />,
      title: "Cross-Platform Apps",
      description: "One codebase, multiple platforms! Build with React Native or Flutter for iOS and Android simultaneously. Save time and money.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      stats: "40+ Cross-Platform",
      features: ["React Native", "Flutter", "Single Codebase", "Native Performance"]
    },
    {
      icon: <Palette className="w-12 h-12 text-red-600" />,
      title: "Mobile UI/UX Design",
      description: "Intuitive mobile interfaces that users love! Every tap, swipe, and interaction designed for the best mobile experience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      stats: "Mobile-First Design",
      features: ["User Flows", "Mobile Prototypes", "Gesture Design", "Accessibility"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-600" />,
      title: "App Store Optimization",
      description: "Get discovered! We optimize your app listing for maximum downloads and visibility in App Store and Play Store.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      stats: "2M+ Downloads",
      features: ["Keyword Research", "Screenshots", "Reviews", "Localization"]
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "App Maintenance & Updates",
      description: "Keep your app running smoothly! Regular updates, bug fixes, and new features to keep users engaged.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      stats: "24/7 Support",
      features: ["Bug Fixes", "Updates", "Monitoring", "Security Patches"]
    }
  ];

  const webStack = [
    { name: "React", icon: <Code className="w-8 h-8 text-green-600" />, level: "Expert" },
    { name: "Next.js", icon: <Cpu className="w-8 h-8 text-green-600" />, level: "Advanced" },
    { name: "Node.js", icon: <Server className="w-8 h-8 text-green-600" />, level: "Expert" },
    { name: "Tailwind", icon: <Palette className="w-8 h-8 text-green-600" />, level: "Master" },
    { name: "TypeScript", icon: <Code className="w-8 h-8 text-green-600" />, level: "Advanced" },
    { name: "MongoDB", icon: <Database className="w-8 h-8 text-green-600" />, level: "Expert" }
  ];

  const appStack = [
    { name: "React Native", icon: <Smartphone className="w-8 h-8 text-red-600" />, level: "Expert" },
    { name: "Flutter", icon: <Layers className="w-8 h-8 text-red-600" />, level: "Advanced" },
    { name: "Swift", icon: <Cpu className="w-8 h-8 text-red-600" />, level: "Expert" },
    { name: "Kotlin", icon: <Code className="w-8 h-8 text-red-600" />, level: "Advanced" },
    { name: "Firebase", icon: <Cloud className="w-8 h-8 text-red-600" />, level: "Master" },
    { name: "AWS", icon: <Server className="w-8 h-8 text-red-600" />, level: "Expert" }
  ];

  const currentServices = serviceType === 'web' ? webServices : appServices;
  const currentStack = serviceType === 'web' ? webStack : appStack;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Service Type Selector */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <div className={`backdrop-blur-xl bg-white/90 border ${serviceType === 'web' ? 'border-green-200' : 'border-red-200'} rounded-2xl shadow-2xl p-4`}>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold text-gray-600 mb-2">Switch Between Services</span>
              <div className="flex gap-3">
                <button
                  onClick={() => setServiceType('web')}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 relative overflow-hidden group ${
                    serviceType === 'web'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl shadow-green-500/50'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Web className="w-5 h-5" />
                  <span>Web Development</span>
                  {serviceType === 'web' && (
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs">Active</span>
                  )}
                </button>
                <button
                  onClick={() => setServiceType('app')}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 relative overflow-hidden group ${
                    serviceType === 'app'
                      ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-xl shadow-red-500/50'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Mobile className="w-5 h-5" />
                  <span>Mobile App</span>
                  {serviceType === 'app' && (
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs">Active</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className={`bg-gradient-to-r ${serviceType === 'web' ? 'from-emerald-50 via-green-50 to-teal-50 border-green-200' : 'from-red-50 via-rose-50 to-pink-50 border-red-200'} border-b-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center space-x-3 text-base">
            <span className="text-gray-800 font-semibold hover:text-green-600 transition cursor-pointer">Home</span>
            <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} font-bold`}>›</span>
            <span className="text-gray-800 font-semibold hover:text-green-600 transition cursor-pointer">Services</span>
            <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} font-bold`}>›</span>
            <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} font-bold`}>
              {serviceType === 'web' ? 'Web Development' : 'Mobile App Development'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={serviceType === 'web' 
              ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop"
              : "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop"
            } 
            alt={serviceType === 'web' ? "Web Development" : "Mobile App Development"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className={`inline-flex items-center space-x-3 ${serviceType === 'web' ? 'bg-green-600' : 'bg-red-600'} text-white px-6 py-3 rounded-full shadow-2xl mb-8 scroll-animate`}>
              <Sparkles className="w-5 h-5" />
              <span className="text-xl font-bold">TSAR-IT Pvt Ltd</span>
              <Shield className="w-5 h-5" />
            </div>
            
            {/* Hero Text */}
            <div className="mb-12 scroll-animate">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-left">
                {serviceType === 'web' ? (
                  <>
                    <span className="block">
                      Transform Your
                    </span>
                    <span className="block mt-4">
                      <span className="relative inline-block">
                        <span className="text-white">Business With</span>
                      </span>
                    </span>
                    <span className="block mt-4">
                      <span className="relative inline-block">
                        <span className={`${serviceType === 'web' ? 'text-green-300' : 'text-red-300'}`}>Stunning Websites</span>
                        <svg 
                          className="absolute -bottom-4 left-0 w-full h-6 text-current"
                          viewBox="0 0 300 40"
                          preserveAspectRatio="none"
                        >
                          <path 
                            d="M0,20 Q50,5 100,20 T200,20 Q250,35 300,20" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          />
                        </svg>
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">
                      Build Amazing
                    </span>
                    <span className="block mt-4">
                      <span className="relative inline-block">
                        <span className="text-white">Mobile Apps</span>
                        <svg 
                          className="absolute -bottom-4 left-0 w-full h-6 text-current"
                          viewBox="0 0 300 40"
                          preserveAspectRatio="none"
                        >
                          <path 
                            d="M0,20 Q50,35 100,20 T200,20 Q250,5 300,20" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="block mt-4">
                      <span className={`${serviceType === 'web' ? 'text-green-300' : 'text-red-300'}`}>That Users Love</span>
                    </span>
                  </>
                )}
              </h1>
              
              <div className="flex items-start gap-4 mt-8 text-left">
                <Rocket className="w-8 h-8 mt-1 shrink-0 text-green-400" />
                <p className="text-2xl text-gray-200 leading-relaxed">
                  <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    500+ Successful Projects.
                  </span>{' '}
                  We don't just build {serviceType === 'web' ? 'websites' : 'mobile apps'} - we create digital experiences that convert visitors into customers and drive real growth for your business.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 scroll-animate text-left">
              <button className={`group bg-gradient-to-r ${serviceType === 'web' ? 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green-500/50' : 'from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 shadow-red-500/50'} text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform flex items-center justify-center gap-3 relative overflow-hidden w-full sm:w-auto`}>
                Get Your Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group bg-white/95 backdrop-blur text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-2xl border-2 border-current hover:scale-105 transform flex items-center justify-center gap-3 w-full sm:w-auto">
                See Our Work
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 scroll-animate text-left">
              {[
                { number: "500+", label: "Projects", icon: <Target className="w-5 h-5 text-green-400" /> },
                { number: "200+", label: "Happy Clients", icon: <ThumbsUp className="w-5 h-5 text-green-400" /> },
                { number: "15+", label: "Years Experience", icon: <Calendar className="w-5 h-5 text-green-400" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 group hover:bg-white/20 transition-all">
                  <div className={`text-4xl font-black ${serviceType === 'web' ? 'text-green-400 group-hover:text-green-300' : 'text-red-400 group-hover:text-red-300'} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-semibold flex items-center gap-2">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Bar */}
      <section className={`bg-gradient-to-r ${serviceType === 'web' ? 'from-green-600 to-emerald-700' : 'from-red-600 to-rose-700'} py-10 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-10 text-white text-center">
            {[
              { icon: <CheckCircle className="w-7 h-7" />, text: "Money-Back Guarantee", sub: "30 Days" },
              { icon: <Star className="w-7 h-7 fill-current" />, text: "4.9/5 Rating", sub: "Client Reviews" },
              { icon: <Rocket className="w-7 h-7" />, text: "Quick Turnaround", sub: "7-14 Days" },
              { icon: <Award className="w-7 h-7" />, text: "Award Winning", sub: "Design Team" },
              { icon: <Headphones className="w-7 h-7" />, text: "24/7 Support", sub: "Always Available" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-lg">{item.text}</div>
                  <div className="text-sm opacity-90">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${serviceType === 'web' ? 'from-white to-green-50' : 'from-white to-red-50'} relative`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Our <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} underline underline-offset-8 decoration-4`}>Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentStack.map((tech, index) => (
              <div 
                key={index}
                className={`scroll-animate bg-white p-8 rounded-2xl shadow-xl border-2 ${serviceType === 'web' ? 'border-green-200 hover:border-green-500' : 'border-red-200 hover:border-red-500'} hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-110 group`}
              >
                <div className="text-3xl mb-4 flex justify-center text-gray-800">
                  {tech.icon}
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg mb-2">{tech.name}</div>
                  <div className={`text-sm font-semibold ${serviceType === 'web' ? 'text-green-600' : 'text-red-600'}`}>
                    {tech.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${serviceType === 'web' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`text-sm font-bold uppercase tracking-wider ${serviceType === 'web' ? 'text-green-600' : 'text-red-600'}`}>
                Premium Services
              </span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              <span className="text-gray-900">Everything You Need To</span>
              <span className="block mt-2">
                <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} underline underline-offset-8 decoration-4`}>
                  Dominate {serviceType === 'web' ? 'Online' : 'Mobile'}
                </span>
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              All under one roof. Complete solutions from design to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentServices.map((service, index) => (
              <div 
                key={index}
                className="scroll-animate group relative"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${index === activeService ? (serviceType === 'web' ? 'border-green-500 shadow-green-500/20' : 'border-red-500 shadow-red-500/20') : (serviceType === 'web' ? 'border-green-100' : 'border-red-100')} transition-all duration-500 hover:transform hover:scale-105`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className={`absolute top-4 right-4 ${serviceType === 'web' ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      {service.stats}
                    </div>
                    <div className={`absolute bottom-4 left-4 p-3 rounded-xl ${serviceType === 'web' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className={`w-2 h-2 rounded-full ${serviceType === 'web' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`${serviceType === 'web' ? 'text-green-600 hover:text-green-700' : 'text-red-600 hover:text-red-700'} font-bold flex items-center gap-2 group/btn`}>
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Type Toggle at Bottom */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border">
              <span className="text-gray-700 font-semibold">Looking for something else?</span>
              <button
                onClick={() => setServiceType(serviceType === 'web' ? 'app' : 'web')}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                  serviceType === 'web'
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {serviceType === 'web' ? (
                  <>
                    <Smartphone className="w-5 h-5" />
                    Switch to Mobile Apps
                  </>
                ) : (
                  <>
                    <Monitor className="w-5 h-5" />
                    Switch to Web Development
                  </>
                )}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${serviceType === 'web' ? 'from-green-50 via-emerald-50 to-teal-50' : 'from-red-50 via-rose-50 to-pink-50'} relative overflow-hidden`}>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-current opacity-5 rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-current opacity-5 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Ready To
              <span className="block mt-2">
                <span className={`${serviceType === 'web' ? 'text-green-600' : 'text-red-600'} underline underline-offset-8 decoration-4`}>
                  Start Your Project?
                </span>
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
              Get a free consultation and quote within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="scroll-animate space-y-8">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${serviceType === 'web' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    <Headphones className="w-6 h-6" />
                  </div>
                  Get In Touch
                </h3>
                
                <div className="space-y-8">
                  {[
                    { icon: <Phone className="w-5 h-5" />, title: "Phone", items: ["+91 9876543210", "+91 9876543211"] },
                    { icon: <Mail className="w-5 h-5" />, title: "Email", items: ["info@tsarit.com", "sales@tsarit.com"] },
                    { icon: <MapPin className="w-5 h-5" />, title: "Address", items: ["TSAR-IT Pvt Ltd", "Tech Park, Bangalore", "Karnataka, India - 560001"] }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className={`${serviceType === 'web' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' : 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'} p-4 rounded-xl transition-all`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{contact.title}</h4>
                        {contact.items.map((item, i) => (
                          <p key={i} className="text-gray-700 group-hover:text-gray-900 transition">{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate">
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-shadow">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-900 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-900 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Building className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Service Type
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setServiceType('web');
                          setFormData({...formData, serviceType: 'web'});
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl border-2 transition flex items-center justify-center gap-3 ${
                          serviceType === 'web'
                            ? 'border-green-500 bg-green-50 text-green-700 font-bold'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Web className="w-5 h-5" />
                        Web Development
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setServiceType('app');
                          setFormData({...formData, serviceType: 'app'});
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl border-2 transition flex items-center justify-center gap-3 ${
                          serviceType === 'app'
                            ? 'border-red-500 bg-red-50 text-red-700 font-bold'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Mobile className="w-5 h-5" />
                        Mobile App
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-current focus:outline-none transition bg-gray-50 resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and budget..."
                    />
                  </div>

                  {/* Status Messages */}
                  {formStatus.type === 'error' && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-xl flex items-center gap-3">
                      <XCircle className="w-6 h-6" />
                      <span className="font-bold">{formStatus.message}</span>
                    </div>
                  )}

                  {formStatus.type === 'success' && (
                    <div className="bg-green-100 text-green-700 p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="font-bold">{formStatus.message}</span>
                    </div>
                  )}

                  {formStatus.type === 'loading' && (
                    <div className="bg-blue-100 text-blue-700 p-4 rounded-xl flex items-center gap-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-700"></div>
                      <span className="font-bold">{formStatus.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className={`w-full group bg-gradient-to-r ${
                      serviceType === 'web'
                        ? 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green-500/50'
                        : 'from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 shadow-red-500/50'
                    } text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {formStatus.type === 'loading' ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className={`fixed bottom-6 right-6 z-50 ${isScrolled ? 'translate-x-0' : 'translate-x-32'} transition-transform duration-500`}>
        <button className={`bg-gradient-to-r ${serviceType === 'web' ? 'from-green-500 to-emerald-600' : 'from-red-500 to-rose-600'} text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 flex items-center gap-3 group`}>
          <Smartphone className="w-5 h-5" />
          Get Free Quote
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
}