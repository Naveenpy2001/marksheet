import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  Shield,
  Cloud,
  Bot,
  MessageSquare,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Brain size={48} />,
      title: "Machine Learning Development",
      description: "Data-driven models for forecasting, classification, and predictive analytics.",
      fullDescription: "We build custom machine learning models tailored to your specific business needs. From data preprocessing to model deployment, we handle the entire ML lifecycle.",
      features: [
        "Predictive modeling and forecasting",
        "Classification and clustering algorithms",
        "Deep learning and neural networks",
        "Model optimization and tuning",
        "Real-time inference systems"
      ],
      useCases: ["Demand forecasting", "Customer segmentation", "Fraud detection", "Predictive maintenance"],
      color: "#8b5cf6"
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Generative AI",
      description: "Content generation, summarization, and creative AI tools for modern businesses.",
      fullDescription: "Leverage the power of generative AI for content creation, document processing, and creative applications. We implement state-of-the-art language models and image generation systems.",
      features: [
        "Text generation and summarization",
        "Image and video generation",
        "Document processing automation",
        "Creative content assistance",
        "Multi-modal AI systems"
      ],
      useCases: ["Content marketing", "Document automation", "Creative design", "Customer support"],
      color: "#06b6d4"
    },
    {
      icon: <Database size={48} />,
      title: "Data Engineering",
      description: "Robust data pipelines and ETL processes to make your data production-ready.",
      fullDescription: "We build scalable data infrastructure that ensures your AI systems have access to clean, reliable, and timely data. Our data engineering solutions power your AI initiatives.",
      features: [
        "Data pipeline development",
        "ETL/ELT processes",
        "Data warehousing solutions",
        "Real-time data streaming",
        "Data quality monitoring"
      ],
      useCases: ["Data consolidation", "Real-time analytics", "ML pipeline integration", "Business intelligence"],
      color: "#10b981"
    },
    {
      icon: <BarChart3 size={48} />,
      title: "AI Strategy & Consulting",
      description: "Comprehensive roadmaps and audits to align AI with business objectives.",
      fullDescription: "Our strategic consulting helps organizations identify AI opportunities, build implementation roadmaps, and measure ROI. We ensure your AI investments deliver maximum value.",
      features: [
        "AI opportunity assessment",
        "Implementation roadmap",
        "ROI analysis and metrics",
        "Team training and upskilling",
        "Ethical AI framework design"
      ],
      useCases: ["Digital transformation", "Process optimization", "Competitive analysis", "Innovation strategy"],
      color: "#f59e0b"
    },
    {
      icon: <Shield size={48} />,
      title: "AI Security & Governance",
      description: "Secure AI deployments with robust governance frameworks and threat protection.",
      fullDescription: "Protect your AI systems from adversarial attacks and ensure compliance with regulatory requirements. We implement comprehensive security measures and governance protocols.",
      features: [
        "Adversarial attack prevention",
        "Model explainability and transparency",
        "Data privacy compliance",
        "AI governance frameworks",
        "Security auditing and testing"
      ],
      useCases: ["Financial services", "Healthcare compliance", "Government contracts", "Enterprise security"],
      color: "#ef4444"
    },
    {
      icon: <Cloud size={48} />,
      title: "Cloud AI Solutions",
      description: "Scalable AI deployments on cloud infrastructure with optimized performance.",
      fullDescription: "Deploy and scale your AI solutions on leading cloud platforms. We optimize for performance, cost, and reliability while ensuring seamless integration with your existing infrastructure.",
      features: [
        "Cloud platform optimization",
        "Auto-scaling AI workloads",
        "Cost optimization strategies",
        "Multi-cloud deployments",
        "Disaster recovery planning"
      ],
      useCases: ["Scalable applications", "Global deployments", "Cost optimization", "Hybrid cloud setups"],
      color: "#3b82f6"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business needs and data landscape to identify AI opportunities."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI implementation roadmap with clear milestones."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build and rigorously test AI models with continuous iteration and improvement."
    },
    {
      step: "04",
      title: "Deployment & Integration",
      description: "Seamlessly integrate AI solutions into your existing workflows and systems."
    },
    {
      step: "05",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and maintenance for long-term success."
    }
  ];

  return (
    <div className="services-container">
      <header className={`services-header ${isScrolled ? 'services-scrolled' : ''}`}>
        <div className="services-container-inner services-header-container">
          <div className="services-logo">
            <i className="fas fa-robot"></i>
            <span>Tsarit Services</span>
          </div>
          <nav className={`services-nav ${isMenuOpen ? 'services-nav-open' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services" className="services-active">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <button className="services-cta-button">Get Started</button>
          <div 
            className="services-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="services-banner">
          <div 
            className="services-banner-background"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1557437370-0b49c3b5b6b8?q=80&w=1600&auto=format&fit=crop')`
            }}
          />
          <div className="services-container-inner services-banner-content">
            <h1>Our AI Services</h1>
            <p>End-to-end AI solutions from research to production deployment</p>
            <div className="services-banner-stats">
              <div className="services-banner-stat">
                <div className="services-stat-number">50+</div>
                <div className="services-stat-label">AI Projects Deployed</div>
              </div>
              <div className="services-banner-stat">
                <div className="services-stat-number">24/7</div>
                <div className="services-stat-label">Support & Monitoring</div>
              </div>
              <div className="services-banner-stat">
                <div className="services-stat-number">99.9%</div>
                <div className="services-stat-label">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-main">
          <div className="services-container-inner">
            <div className="services-section-header">
              <h2>Comprehensive AI Services</h2>
              <p>From concept to deployment, we provide end-to-end AI solutions tailored to your business needs</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="services-card"
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div 
                    className="services-card-icon"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="services-card-features">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="services-feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="services-learn-more">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service View */}
        <section className="services-detailed">
          <div className="services-container-inner">
            <div className="services-detailed-content">
              <div className="services-detailed-info">
                <div 
                  className="services-detailed-icon"
                  style={{ color: services[activeService].color }}
                >
                  {services[activeService].icon}
                </div>
                <h2>{services[activeService].title}</h2>
                <p className="services-detailed-description">
                  {services[activeService].fullDescription}
                </p>
                <div className="services-features-list">
                  <h4>Key Features</h4>
                  <div className="services-features-grid">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="services-feature-detail">
                        <CheckCircle size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="services-use-cases">
                  <h4>Common Use Cases</h4>
                  <div className="services-use-cases-tags">
                    {services[activeService].useCases.map((useCase, index) => (
                      <span key={index} className="services-use-case-tag">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="services-detailed-visual">
                <div 
                  className="services-visual-card"
                  style={{ 
                    background: `linear-gradient(135deg, ${services[activeService].color}20, ${services[activeService].color}40)`,
                    borderColor: services[activeService].color
                  }}
                >
                  <Zap size={64} style={{ color: services[activeService].color }} />
                  <h3>Ready to Get Started?</h3>
                  <p>Schedule a consultation to discuss how {services[activeService].title} can transform your business</p>
                  <button 
                    className="services-cta-button services-visual-cta"
                    style={{ background: services[activeService].color }}
                  >
                    Start Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="services-process">
          <div className="services-container-inner">
            <div className="services-section-header">
              <h2>Our Proven Process</h2>
              <p>We follow a structured approach to ensure successful AI implementation and maximum ROI</p>
            </div>
            <div className="services-process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="services-process-step">
                  <div className="services-step-number">{step.step}</div>
                  <div className="services-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="services-step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="services-container-inner">
            <div className="services-cta-content">
              <div className="services-cta-text">
                <h2>Start Your AI Journey Today</h2>
                <p>Book a free consultation with our AI experts to discover how our services can drive innovation and growth for your organization.</p>
                <div className="services-cta-buttons">
                  <button className="services-cta-button services-cta-primary">
                    Schedule Consultation <Play size={16} />
                  </button>
                  <button className="services-cta-button services-cta-secondary">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="services-cta-visual">
                <Brain size={120} className="services-cta-icon" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="services-footer">
        <div className="services-container-inner">
          <div className="services-footer-content">
            <div className="services-footer-column">
              <h3>Tsarit Services</h3>
              <p>Your trusted partner for enterprise AI solutions and digital transformation.</p>
              <div className="services-social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="services-footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Generative AI</a></li>
                <li><a href="#">Data Engineering</a></li>
                <li><a href="#">AI Strategy</a></li>
              </ul>
            </div>
            <div className="services-footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> info@tsaritservices.com</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</li>
              </ul>
            </div>
            <div className="services-footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">AI Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="services-footer-bottom">
            <p>&copy; 2023 Tsarit Services. All rights reserved. Building the future with responsible AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;