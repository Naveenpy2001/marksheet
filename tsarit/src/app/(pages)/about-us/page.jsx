'use client'
import { useState, useEffect, useRef } from 'react';
import { 
  Home,
  ChevronRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Rocket,
  Quote,
  CheckCircle,
  Clock,
  Lightbulb,
  Globe,
  Star
} from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate sections one by one
          [0, 1, 2, 3, 4].forEach((index) => {
            setTimeout(() => {
              setVisibleSections(prev => [...prev, index]);
            }, index * 200);
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

  const values = [
    { icon: <Rocket size={24} />, title: 'Innovation', description: 'Creative and unique software solutions' },
    { icon: <Users size={24} />, title: 'Client-Centric', description: 'Tailor-made solutions for every business' },
    { icon: <Shield size={24} />, title: 'Quality', description: 'Highest standards in every project' },
    { icon: <TrendingUp size={24} />, title: 'Excellence', description: 'Striving for the best outcomes' }
  ];

  const highlights = [
    { icon: <Globe size={24} />, text: 'Global IT Services Outsourcing' },
    { icon: <Users size={24} />, text: 'Young & Trained Team' },
    { icon: <Star size={24} />, text: 'Sustainable Client Base' },
    { icon: <Lightbulb size={24} />, text: 'Innovative Solutions' },
    { icon: <Award size={24} />, text: 'Industry Leaders' },
    { icon: <CheckCircle size={24} />, text: 'Proven Track Record' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-linear-to-r from-cyan-50 to-teal-50 border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Home size={16} className="text-cyan-600" />
            <span className="text-gray-600">Home</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-cyan-600 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="relative py-16 px-4 sm:py-20 lg:py-28 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Page Title */}
          <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                About
              </span>
              {' '}
              <span className="text-gray-800">TSAR IT</span>
            </h1>
            <div className="w-24 h-1.5 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Innovative Solutions & Consultancy - Your Trusted IT Partner
            </p>
          </div>

          {/* CEO Quote */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative bg-linear-to-br from-cyan-500 to-teal-600 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <Quote size={48} className="text-white" />
                  </div>
                </div>
                
                <blockquote className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
                    "Acquiring the right talent is the most important key to growth. Hiring was and still is - the most important thing we do."
                  </p>
                  <footer className="flex flex-col items-center gap-3">
                    <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                    <div className="text-center">
                      <cite className="not-italic text-xl font-bold text-white block">
                        Wesly Rakesh
                      </cite>
                      <span className="text-cyan-100 text-sm">Chief Executive Officer</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className={`mb-20 transition-all duration-1000 ease-out ${
            visibleSections.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Side */}
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Mission"
                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-600/30 to-teal-600/30"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 p-4 bg-white rounded-2xl shadow-xl">
                    <Target size={32} className="text-cyan-600" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-cyan-500 to-teal-600 opacity-20 rounded-full blur-2xl"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-teal-600 rounded-full"></div>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    To provide the best in class, creative, unique Software Solutions that can solve all our client's business problems that they face on day to day bases. We provide software & solutions for companies of all sizes and all industry sectors.
                  </p>
                  <p>
                    We thrive in achieving excellence in providing the best IT solutions to our clients so that they can meet their business needs in the most effective and efficient way.
                  </p>
                  <p>
                    Our dedicated team provides you solutions that make achieving business objectives easier and in a much efficient way. We provide the highest standard of products to our client base belonging to all verticals.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl">
                    <CheckCircle size={24} className="text-cyan-600 shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">Best in Class Solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl">
                    <CheckCircle size={24} className="text-teal-600 shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">All Industry Sectors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-200 ${
            visibleSections.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6 lg:order-2">
                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-600 rounded-full"></div>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    TSAR IT vision helps us understand and provide a sense of direction on how we drive our business. It serves as a beacon directing all our thoughts and efforts towards achieving our goal.
                  </p>
                  <p>
                    Since inception, TSAR IT has truly evolved over the years from a start-up IT services company to a trusted IT partner for leaders in the telecom world. Our vision is to be amongst the top five software services companies focused on the communications industry.
                  </p>
                  <p>
                    We focus on high quality & timely delivery of our Services. We provide cost effective and customized solutions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                  <span className="px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
                    Top 5 Company Goal
                  </span>
                  <span className="px-4 py-2 bg-linear-to-r from-cyan-500 to-teal-500 text-white rounded-full text-sm font-semibold">
                    Trusted IT Partner
                  </span>
                  <span className="px-4 py-2 bg-linear-to-r from-teal-500 to-emerald-500 text-white rounded-full text-sm font-semibold">
                    Quality & Timely Delivery
                  </span>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative group lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Vision"
                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 to-cyan-600/30"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 p-4 bg-white rounded-2xl shadow-xl">
                    <Eye size={32} className="text-blue-600" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-blue-500 to-cyan-600 opacity-20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-400 ${
            visibleSections.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Side */}
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Commitment"
                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-teal-600/30 to-emerald-600/30"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-6 right-6 p-4 bg-white rounded-2xl shadow-xl">
                    <Heart size={32} className="text-teal-600" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-teal-500 to-emerald-600 opacity-20 rounded-full blur-2xl"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Our Commitment
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-teal-500 to-emerald-600 rounded-full"></div>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    We outsource IT services to different industries across the globe which includes Complex Software Solutions, web application & Other IT services. Our team members are young and trained.
                  </p>
                  <p>
                    We listen and provide services to our clients that are tailor made for their business. We have sustainable base of clients who trust us for our quality service in the field of Software & Web Application development.
                  </p>
                  <p>
                    We are delivering long-lasting impact through our actions as a company and through our pacts with stakeholders for a more sustainable future.
                  </p>
                </div>

                <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-teal-500 to-emerald-600 rounded-xl">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Sustainable Partnership</h4>
                      <p className="text-sm text-gray-600">Building long-lasting relationships with our clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Expertise Section */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-600 ${
            visibleSections.includes(3) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6 lg:order-2">
                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    With over 15 years of industry experience, TSAR IT has established itself as a leader in providing comprehensive IT solutions. Our expertise spans across multiple domains and technologies.
                  </p>
                  <p>
                    We specialize in Complex Software Solutions, Web Applications, Mobile Development, IT Consulting, and Managed Services. Our team combines technical excellence with industry knowledge to deliver exceptional results.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[
                    'Software Development',
                    'Web Applications',
                    'IT Consulting',
                    'Managed Services'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                      <Award size={20} className="text-cyan-600 shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="relative group lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Expertise"
                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-600/30 to-blue-600/30"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 p-4 bg-white rounded-2xl shadow-xl">
                    <Award size={32} className="text-cyan-600" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-cyan-500 to-blue-600 opacity-20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Key Highlights Section */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-800 ${
            visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Why Choose TSAR IT?
                </span>
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex p-4 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className={`transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex p-4 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="text-center p-6 bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
              <div className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center p-6 bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
              <div className="text-4xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-linear-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
              <div className="text-4xl font-bold bg-linear-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;