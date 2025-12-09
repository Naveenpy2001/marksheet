'use client'
import { useState, useEffect, useRef } from "react";
import { 
  Code, 
  Smartphone, 
  Headphones, 
  DollarSign, 
  Heart, 
  TrendingUp, 
  GraduationCap, 
  Settings,
  ChevronDown,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    { 
      title: "Web Development", 
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Modern, responsive websites that drive business growth and deliver exceptional user experiences",
      icon: <Code size={32} />,
      linear: "from-cyan-500 to-blue-600"
    },
    { 
      title: "App Development", 
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone size={32} />,
      linear: "from-teal-500 to-cyan-600"
    },
    { 
      title: "IT Consulting", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Strategic IT solutions and digital transformation consulting",
      icon: <Headphones size={32} />,
      linear: "from-blue-500 to-indigo-600"
    },
    { 
      title: "Payroll Solutions", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Efficient payroll management and automated processing systems",
      icon: <DollarSign size={32} />,
      linear: "from-cyan-600 to-teal-600"
    },
    { 
      title: "NGO Consultancy", 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Expert guidance and strategic planning for non-profit organizations",
      icon: <Heart size={32} />,
      linear: "from-teal-600 to-emerald-600"
    },
    { 
      title: "Digital Marketing", 
      image: "https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Data-driven marketing strategies to accelerate your growth",
      icon: <TrendingUp size={32} />,
      linear: "from-cyan-500 to-teal-500"
    },
    { 
      title: "Career Development", 
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Professional training programs and internship opportunities",
      icon: <GraduationCap size={32} />,
      linear: "from-blue-600 to-cyan-600"
    },
    { 
      title: "Managed Services", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Comprehensive IT infrastructure management and support",
      icon: <Settings size={32} />,
      linear: "from-teal-500 to-cyan-600"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          const cardsToShow = showAll ? services.length : 6;
          Array.from({ length: cardsToShow }).forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
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
  }, [showAll]);

  const displayedServices = showAll ? services : services.slice(0, 6);

  const handleViewMore = () => {
    setShowAll(!showAll);
    if (!showAll) {
      // Reset and animate new cards
      setVisibleCards(Array.from({ length: 6 }, (_, i) => i));
      services.slice(6).forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, 6 + index]);
        }, index * 100);
      });
    } else {
      setVisibleCards(Array.from({ length: 6 }, (_, i) => i));
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500/10 to-teal-500/10 border-2 border-cyan-200 rounded-full mb-6">
            <Sparkles size={20} className="text-cyan-600" />
            <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
              What We Offer
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our
            </span>
            {' '}
            <span className="text-gray-800">
              Services
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full mx-auto mb-6"></div>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology solutions and expert consultancy services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cyan-200 transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* linear overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.linear} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-5 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                  <ArrowRight size={20} className="text-cyan-600" />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Bottom linear line */}
                <div className={`w-0 h-1 bg-linear-to-r ${service.linear} rounded-full group-hover:w-full transition-all duration-500`}></div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${service.linear} opacity-0 group-hover:opacity-10 rounded-bl-full transform group-hover:scale-150 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {services.length > 6 && (
          <div className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={handleViewMore}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {showAll ? 'Show Less Services' : 'View More Services'}
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}
              />
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="text-center p-6 bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
            <div className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
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
  );
}