'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Smartphone, Phone, Users, Shield, Building, 
  FileText, Camera, TrendingUp, Map, Truck, UserPlus,
  Palette, Search, CheckCircle, ArrowRight, ChevronRight,
  Star, Rocket, Clock, Award, Headphones, Zap, Cpu,
  Database, Server, Cloud, Layers, Target, Mail,
  MapPin, Send, Sparkles, Calendar, ArrowUpRight, 
  Monitor, Code, ShoppingCart, BarChart3, Package
} from 'lucide-react';

const ServicePage = () => {
  const [activeService, setActiveService] = useState('web');
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  const services = [
    {
      id: 'web',
      name: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      description: 'Custom websites and web applications built with modern technologies',
      details: 'We create responsive, SEO-friendly websites and powerful web applications using React, Next.js, Node.js, and modern frameworks.',
      features: ['Custom Design', 'E-Commerce', 'Web Applications', 'SEO Optimization'],
      stats: '500+ Projects',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 'app',
      name: 'App Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      description: 'Native & cross-platform mobile applications',
      details: 'iOS and Android apps built with React Native, Flutter, Swift, and Kotlin for seamless mobile experiences.',
      features: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'App Store Optimization'],
      stats: '200+ Apps',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: 'bpo',
      name: 'BPO Projects',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      description: 'Business Process Outsourcing solutions',
      details: 'Complete BPO services including customer support, telemarketing, data entry, and back-office operations.',
      features: ['Customer Support', 'Telemarketing', 'Data Entry', 'Back Office'],
      stats: '24/7 Support',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'verification',
      name: 'Background Verifications',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 to-rose-50',
      borderColor: 'border-red-200',
      description: 'Comprehensive background check services',
      details: 'Employee verification, criminal record checks, education verification, and professional reference checks.',
      features: ['Employee Screening', 'Criminal Checks', 'Education Verification', 'Reference Checks'],
      stats: '99% Accuracy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      id: 'satellite',
      name: 'Satellite Projects',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-200',
      description: 'Satellite technology and communication solutions',
      details: 'Satellite communication systems, GPS tracking, remote sensing, and telemetry solutions.',
      features: ['Satellite Comms', 'GPS Tracking', 'Remote Sensing', 'Telemetry'],
      stats: 'Advanced Tech',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop'
    },
    {
      id: 'construction',
      name: 'Civil Construction',
      icon: <Building className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      description: 'Construction and infrastructure projects',
      details: 'Residential, commercial, and industrial construction projects with quality assurance.',
      features: ['Residential', 'Commercial', 'Industrial', 'Infrastructure'],
      stats: '50+ Projects',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
    },
    {
      id: 'manpower',
      name: 'Manpower Supply',
      icon: <Users className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200',
      description: 'Skilled workforce solutions',
      details: 'Providing skilled professionals across various industries with proper screening and training.',
      features: ['Skilled Labor', 'Technical Staff', 'Management', 'Training'],
      stats: '1000+ Professionals',
      image: 'https://images.unsplash.com/photo-1551836026-d5c2c3af8c4a?w=800&h=600&fit=crop'
    },
    {
      id: 'payroll',
      name: 'Payroll-Jobs',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-lime-500 to-green-500',
      bgColor: 'from-lime-50 to-green-50',
      borderColor: 'border-lime-200',
      description: 'Payroll management and job placement',
      details: 'Complete payroll processing, salary management, and job placement services.',
      features: ['Payroll Processing', 'Salary Management', 'Job Placement', 'Compliance'],
      stats: '500+ Companies',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
    },
    {
      id: 'ngo',
      name: 'NGO Consultancy',
      icon: <Users className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      description: 'Consultancy for non-profit organizations',
      details: 'Registration, compliance, fundraising, and project management for NGOs and non-profits.',
      features: ['Registration', 'Compliance', 'Fundraising', 'Project Management'],
      stats: '100+ NGOs',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop'
    },
    {
      id: 'editing',
      name: 'Photo & Video Editing',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-fuchsia-500 to-purple-500',
      bgColor: 'from-fuchsia-50 to-purple-50',
      borderColor: 'border-fuchsia-200',
      description: 'Professional media editing services',
      details: 'Photo editing, video production, animation, and visual effects for businesses and creators.',
      features: ['Photo Editing', 'Video Production', 'Animation', 'Visual Effects'],
      stats: 'Creative Team',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop'
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-50 to-amber-50',
      borderColor: 'border-yellow-200',
      description: 'Complete digital marketing solutions',
      details: 'SEO, social media marketing, PPC campaigns, content marketing, and brand strategy.',
      features: ['SEO', 'Social Media', 'PPC', 'Content Marketing'],
      stats: '200% ROI Average',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      id: 'survey',
      name: 'Survey',
      icon: <Map className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      description: 'Land and property surveying',
      details: 'Land surveying, topographic mapping, boundary surveys, and construction staking.',
      features: ['Land Surveying', 'Topographic Mapping', 'Boundary Surveys', 'Construction Staking'],
      stats: 'Precision Work',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
    },
    {
      id: 'distribution',
      name: 'Distribution',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50',
      borderColor: 'border-gray-200',
      description: 'Logistics and distribution services',
      details: 'Supply chain management, warehousing, transportation, and last-mile delivery solutions.',
      features: ['Supply Chain', 'Warehousing', 'Transportation', 'Last-Mile Delivery'],
      stats: 'Pan-India Network',
      image: 'https://images.unsplash.com/photo-1562887189-e5d078343de4?w=800&h=600&fit=crop'
    }
  ];

  const currentService = services.find(service => service.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'translate-y-0 bg-white/90 backdrop-blur-md shadow-lg' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TSAR-IT Services</span>
            </div>
            <div className="text-sm text-gray-600">
              {currentService.name}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl mb-8 scroll-animate">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-bold">Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight scroll-animate">
            <span className="block">Your Trusted Partner</span>
            <span className="block mt-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                For All Services
              </span>
            </span>
          </h1>
          
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 scroll-animate">
            From technology to construction, we provide end-to-end solutions with excellence and reliability.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto scroll-animate">
            {[
              { number: "1000+", label: "Projects", icon: <Target className="w-5 h-5" /> },
              { number: "500+", label: "Clients", icon: <Users className="w-5 h-5" /> },
              { number: "12+", label: "Services", icon: <Package className="w-5 h-5" /> },
              { number: "15+", label: "Years", icon: <Calendar className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 group hover:border-blue-300 transition-all">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold flex items-center justify-center gap-2">
                  {stat.icon}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-max">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 whitespace-nowrap ${
                    activeService === service.id
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service.icon}
                  {service.name}
                  {activeService === service.id && (
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs">Active</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center scroll-animate">
            {/* Service Details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentService.color} text-white`}>
                  {currentService.icon}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Active Service
                  </div>
                  <h2 className="text-4xl font-black text-gray-900">
                    {currentService.name}
                  </h2>
                </div>
              </div>
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                {currentService.description}
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentService.details}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-current transition-colors">
                      <CheckCircle className={`w-5 h-5 ${activeService === 'web' ? 'text-green-500' : 'text-blue-500'}`} />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={`group bg-gradient-to-r ${currentService.color} text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform flex items-center gap-3`}>
                Get This Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            {/* Service Image & Stats */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={currentService.image} 
                  alt={currentService.name}
                  className="w-full h-96 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-3xl font-black mb-2">{currentService.name}</div>
                  <div className="text-lg opacity-90">{currentService.stats}</div>
                </div>
              </div>
              
              <div className={`mt-8 bg-gradient-to-r ${currentService.bgColor} border ${currentService.borderColor} rounded-2xl p-8`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Award className="w-5 h-5" />, text: 'Industry Expertise' },
                    { icon: <Clock className="w-5 h-5" />, text: 'Timely Delivery' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Quality Assurance' },
                    { icon: <Headphones className="w-5 h-5" />, text: '24/7 Support' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-white/80 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Explore Our <span className="text-blue-600">Complete Suite</span> of Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions across multiple domains to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`scroll-animate bg-white rounded-2xl shadow-lg overflow-hidden border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  activeService === service.id ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-200'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  {activeService === service.id && (
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                        Active
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-medium">
                      {service.stats}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Ready to <span className="text-blue-600">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your project requirements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-xl border-2 border-gray-300 hover:border-blue-500 hover:scale-105 transition-all transform flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              Email Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className={`fixed bottom-6 right-6 z-50 ${isScrolled ? 'translate-x-0' : 'translate-x-32'} transition-transform duration-500`}>
        <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform flex items-center gap-3">
          <Phone className="w-4 h-4" />
          Contact Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServicePage;