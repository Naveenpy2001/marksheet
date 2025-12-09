'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Award, TrendingUp } from 'lucide-react';

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    { id: 1, name: 'Microsoft', logo: 'https://tsaritservices.com/media/client-3.png' },
    { id: 2, name: 'Google', logo: 'https://tsaritservices.com/media/client-4.png' },
    { id: 3, name: 'Apple', logo: 'https://tsaritservices.com/media/client-5.png' },
    { id: 4, name: 'Amazon', logo: 'https://tsaritservices.com/media/client-6.png' },
    { id: 5, name: 'Tesla', logo: 'https://tsaritservices.com/media/client-1.png' },
    { id: 6, name: 'Meta', logo: 'https://tsaritservices.com/media/client-2.png' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const maxSlide = clients.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      const maxSlide = clients.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % clients.length;
      visible.push(clients[index]);
    }
    return visible;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500/10 to-teal-500/10 border-2 border-cyan-200 rounded-full">
              <Award size={20} className="text-cyan-600" />
              <span className="text-cyan-700 text-sm font-bold tracking-wider uppercase">
                Trusted Partners
              </span>
              <Sparkles size={18} className="text-teal-600" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Valued
            </span>
            {' '}
            <span className="bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            We are proud to work with industry leaders and innovative companies
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="group">
              <div className="flex items-center gap-2 text-cyan-600 mb-1">
                <TrendingUp size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  500+
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium">Projects Delivered</p>
            </div>
            <div className="group">
              <div className="flex items-center gap-2 text-orange-600 mb-1">
                <Award size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  98%
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className={`relative px-4 sm:px-16 lg:px-20 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white rounded-full shadow-xl shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
            aria-label="Previous clients"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white rounded-full shadow-xl shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
            aria-label="Next clients"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>

          {/* Client Cards */}
          <div className="overflow-hidden mx-10 sm:mx-14 lg:mx-16">
            <div className="flex gap-6 lg:gap-8 transition-transform duration-700 ease-in-out">
              {getVisibleClients().map((client, idx) => (
                <div
                  key={client.id}
                  className="shrink-0 w-full"
                  style={{ 
                    width: slidesToShow === 1 ? '100%' : slidesToShow === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)'
                  }}
                >
                  <div className="group relative">
                    {/* Card */}
                    <div className="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-cyan-200 transition-all duration-500 hover:-translate-y-3 overflow-hidden min-h-[280px] flex items-center justify-center">
                      
                      {/* linear background on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-cyan-50/0 to-teal-50/0 group-hover:from-cyan-50/70 group-hover:to-teal-50/50 transition-all duration-500 rounded-3xl"></div>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-400/10 to-teal-400/10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                      
                      {/* Logo */}
                      <div className="relative z-10 w-full max-w-[280px]">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DbGllbnQgTG9nbzwvdGV4dD48L3N2Zz4=';
                          }}
                        />
                      </div>

                      {/* Hover badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-linear-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        Trusted Partner
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute bottom-6 right-6 w-20 h-20 bg-linear-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12 sm:mt-16">
            {Array.from({ length: Math.ceil(clients.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * slidesToShow)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / slidesToShow) === index
                    ? 'w-12 bg-linear-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30'
                    : 'w-3 bg-gray-300 hover:bg-cyan-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom decorative text */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              Trusted by the world's leading companies
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;