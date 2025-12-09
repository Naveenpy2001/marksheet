// components/ProductSlider.js
'use client';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';
import './ProductSlider.css';

const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);
  const progressBarRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "Comprehensive healthcare management solution for hospitals and clinics",
      image: "https://images.unsplash.com/photo-1516549655669-df6654e447e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Healthcare",
      link: "/products/hospital-management"
    },
    {
      id: 2,
      title: "Education Management System",
      description: "Complete educational institution management platform",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Education",
      link: "/products/education-management"
    },
    {
      id: 3,
      title: "AI Chat Bot",
      description: "Intelligent conversational AI for customer service and support",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Artificial Intelligence",
      link: "/products/ai-chatbot"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Scalable online shopping solution with advanced features",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Retail",
      link: "/products/ecommerce-platform"
    },
    {
      id: 5,
      title: "Financial Analytics Suite",
      description: "Advanced financial data analysis and reporting tools",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Finance",
      link: "/products/financial-analytics"
    },
    {
      id: 6,
      title: "Smart Home Automation",
      description: "IoT-based home automation and control system",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "IoT",
      link: "/products/smart-home"
    }
  ];

  const togglePlayPause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setIsPlaying(false);
      } else {
        swiper.autoplay.start();
        setIsPlaying(true);
      }
    }
  };

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      if (swiperRef.current && swiperRef.current.swiper && progressBarRef.current) {
        const swiper = swiperRef.current.swiper;
        const progress = (swiper.activeIndex + 1) / products.length;
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };

    updateProgress();
  }, [activeIndex, products.length]);

  return (
    <section className="product-slider-section">
      <div className="slider-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectCreative, Parallax]}
          effect="creative"
          creativeEffect={{
            prev: {
              translate: ["-120%", 0, -500],
              rotate: [0, 0, -90],
            },
            next: {
              translate: ["120%", 0, -500],
              rotate: [0, 0, 90],
            },
          }}
          speed={1000}
          parallax={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onAutoplayStart={() => setIsPlaying(true)}
          onAutoplayStop={() => setIsPlaying(false)}
          className="product-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div 
                className="slide-background"
                style={{ backgroundImage: `url(${product.image})` }}
                data-swiper-parallax="-25%"
              >
                <div className="parallax-overlay"></div>
                
                <div className="slide-content" data-swiper-parallax-opacity="0">
                  <div className="content-wrapper">
                    <span 
                      className="product-category"
                      data-swiper-parallax="-100"
                    >
                      {product.category}
                    </span>
                    
                    <h2 
                      className="product-title"
                      data-swiper-parallax="-200"
                    >
                      {product.title}
                    </h2>
                    
                    <p 
                      className="product-description"
                      data-swiper-parallax="-300"
                    >
                      {product.description}
                    </p>
                    
                    <div 
                      className="product-actions"
                      data-swiper-parallax="-400"
                    >
                      <button 
                        className="view-product-btn"
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateX(8px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateX(0)';
                        }}
                        onClick={() => window.location.href = product.link}
                      >
                        View Product
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Progress Bar */}
          
        </Swiper>

        {/* Custom Controls */}
        <div className="slider-controls">
          <div className="control-group">
            <button 
              className="control-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="control-btn play-pause-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              )}
            </button>
            
            <button 
              className="control-btn next-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="slide-counter">
            <span className="current-slide">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="counter-divider">/</span>
            <span className="total-slides">{String(products.length).padStart(2, '0')}</span>
          </div>
        </div>
              
      </div>
    </section>
  );
};

export default ProductSlider;
