'use client'

import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ClientFeedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const feedbacks = [
    {
      id: 1,
      name: "Prasada Rao",
      position: "BGM Founder",
      text: "Nice Services, This Company will Provide World wide NGO Projects.",
      direction: "left"
    },
    {
      id: 2,
      name: "Srinivasulu",
      position: "Jewelnidhi Manager",
      text: "Excellent Web Application Creation and Maintenance.",
      direction: "right"
    },
    {
      id: 3,
      name: "Umesh Kumar",
      position: "Zippr Manager",
      text: "Good Company to Supply Manpower in South India.",
      direction: "left"
    },
    {
      id: 4,
      name: "Ji Chandra",
      position: "Blue Morpho Manager",
      text: "Really Awesome Services and Take Caring of Projects.",
      direction: "right"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      position: "Tech Solutions CEO",
      text: "Outstanding commitment to quality and customer satisfaction.",
      direction: "left"
    },
    {
      id: 6,
      name: "Anita Sharma",
      position: "Digital Director",
      text: "Professional team with innovative solutions for complex challenges.",
      direction: "right"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
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
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const maxSlide = feedbacks.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      const maxSlide = feedbacks.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const getVisibleFeedbacks = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % feedbacks.length;
      visible.push(feedbacks[index]);
    }
    return visible;
  };

  const getAnimationClass = (direction) => {
    if (!isVisible) {
      switch(direction) {
        case 'left':
          return 'opacity-0 -translate-x-32';
        case 'right':
          return 'opacity-0 translate-x-32';
        case 'bottom':
          return 'opacity-0 translate-y-32';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0';
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with bottom animation */}
        <div 
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-linear-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-500/30 tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Clients Feedback
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover what our valued clients say about their experience working with us
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-4 sm:px-16 lg:px-20">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white rounded-full shadow-2xl shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white rounded-full shadow-2xl shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} strokeWidth={3} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden mx-12 sm:mx-16 lg:mx-20">
            <div className="flex gap-6 lg:gap-8 transition-transform duration-700 ease-in-out">
              {getVisibleFeedbacks().map((feedback, idx) => (
                <div
                  key={feedback.id}
                  className={`shrink-0 w-full transition-all duration-1000 ease-out delay-${idx * 100} ${getAnimationClass(feedback.direction)}`}
                  style={{ 
                    width: slidesToShow === 1 ? '100%' : 'calc(50% - 16px)',
                    transitionDelay: `${idx * 200}ms`
                  }}
                >
                  <div className="group h-full">
                    {/* Card Content - Larger size */}
                    <div className="relative bg-white rounded-3xl p-10 sm:p-12 lg:p-14 shadow-2xl hover:shadow-3xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col min-h-[450px] overflow-hidden">
                      {/* Animated linear overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-cyan-50/0 via-teal-50/0 to-cyan-50/0 group-hover:from-cyan-50/50 group-hover:via-teal-50/30 group-hover:to-cyan-50/50 rounded-3xl transition-all duration-500"></div>
                      
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-400/20 to-teal-400/20 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                      
                      {/* Quote Icon - Larger */}
                      <div className="relative mb-8 z-10">
                        <div className="inline-flex p-5 bg-linear-to-br from-cyan-500 to-teal-600 rounded-2xl shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <Quote size={40} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Testimonial Text - Larger */}
                      <p className="relative text-gray-700 text-xl sm:text-2xl leading-relaxed mb-8 grow font-medium z-10">
                        "{feedback.text}"
                      </p>

                      {/* Rating Stars */}
                      <div className="relative flex gap-1 mb-6 z-10">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Decorative divider */}
                      <div className="relative w-20 h-1 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full mb-6 z-10"></div>

                      {/* Author Info - Larger */}
                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                          {feedback.name}
                        </h3>
                        <p className="text-cyan-600/80 text-lg font-semibold tracking-wide">
                          {feedback.position}
                        </p>
                      </div>

                      {/* Floating decorative elements */}
                      <div className="absolute bottom-10 right-10 w-24 h-24 bg-linear-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Larger */}
          <div className="flex justify-center gap-3 mt-12 sm:mt-16">
            {Array.from({ length: Math.ceil(feedbacks.length / slidesToShow) }).map((_, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;