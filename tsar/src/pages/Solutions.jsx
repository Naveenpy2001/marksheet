import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Heart, 
  ShoppingCart, 
  Factory,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  BarChart3,
  Brain,
  Target,
  Award,
  Clock
} from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);

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

  const industries = [
    {
      icon: <TrendingUp size={48} />,
      title: "Finance & Banking",
      shortDescription: "Risk models & fraud detection for financial institutions.",
      fullDescription: "Transform your financial operations with AI-powered solutions that enhance security, optimize investments, and improve customer experiences.",
      challenges: [
        "Fraud detection and prevention",
        "Credit risk assessment",
        "Regulatory compliance",
        "Customer churn prediction"
      ],
      solutions: [
        "Real-time fraud detection systems",
        "AI-driven investment strategies",
        "Automated compliance monitoring",
        "Personalized banking experiences"
      ],
      results: [
        "40% reduction in fraudulent activities",
        "25% improvement in risk assessment accuracy",
        "60% faster compliance reporting",
        "35% increase in customer satisfaction"
      ],
      caseStudy: {
        client: "Global Bank Inc.",
        challenge: "High false positives in fraud detection",
        solution: "Custom ML model with real-time monitoring",
        outcome: "Reduced false positives by 75% while maintaining 99.8% detection accuracy"
      },
      color: "#10b981"
    },
    {
      icon: <Heart size={48} />,
      title: "Healthcare",
      shortDescription: "Medical diagnostics & patient care analytics.",
      fullDescription: "Revolutionize healthcare delivery with AI solutions that enhance diagnostics, optimize treatment plans, and improve patient outcomes.",
      challenges: [
        "Early disease detection",
        "Treatment optimization",
        "Patient monitoring",
        "Medical imaging analysis"
      ],
      solutions: [
        "AI-powered diagnostic tools",
        "Personalized treatment recommendations",
        "Remote patient monitoring systems",
        "Medical image analysis automation"
      ],
      results: [
        "30% faster diagnosis times",
        "20% improvement in treatment outcomes",
        "50% reduction in manual analysis time",
        "40% better patient engagement"
      ],
      caseStudy: {
        client: "Metro Health System",
        challenge: "Delayed diagnosis of critical conditions",
        solution: "AI-assisted diagnostic platform",
        outcome: "Reduced diagnosis time by 45% and improved accuracy by 28%"
      },
      color: "#ef4444"
    },
    {
      icon: <ShoppingCart size={48} />,
      title: "Retail & E-commerce",
      shortDescription: "Personalized recommendations & demand forecasting.",
      fullDescription: "Elevate customer experiences and optimize operations with AI-driven retail solutions that predict trends and personalize engagements.",
      challenges: [
        "Inventory management",
        "Customer personalization",
        "Demand forecasting",
        "Supply chain optimization"
      ],
      solutions: [
        "AI-powered recommendation engines",
        "Predictive inventory management",
        "Customer behavior analysis",
        "Dynamic pricing optimization"
      ],
      results: [
        "35% increase in conversion rates",
        "25% reduction in inventory costs",
        "50% improvement in forecast accuracy",
        "45% higher customer retention"
      ],
      caseStudy: {
        client: "StyleRetail Chain",
        challenge: "Low personalization and high cart abandonment",
        solution: "AI recommendation and engagement platform",
        outcome: "Increased conversions by 42% and reduced cart abandonment by 60%"
      },
      color: "#8b5cf6"
    },
    {
      icon: <Factory size={48} />,
      title: "Manufacturing",
      shortDescription: "Predictive maintenance & quality control systems.",
      fullDescription: "Optimize manufacturing processes with AI solutions that predict equipment failures, ensure quality control, and streamline operations.",
      challenges: [
        "Equipment maintenance costs",
        "Quality control variability",
        "Production inefficiencies",
        "Supply chain disruptions"
      ],
      solutions: [
        "Predictive maintenance systems",
        "AI-powered quality inspection",
        "Production line optimization",
        "Supply chain risk prediction"
      ],
      results: [
        "50% reduction in unplanned downtime",
        "30% improvement in product quality",
        "25% increase in production efficiency",
        "40% faster time-to-market"
      ],
      caseStudy: {
        client: "Precision Manufacturing Co.",
        challenge: "Frequent equipment failures and quality issues",
        solution: "IoT and AI predictive maintenance system",
        outcome: "Reduced downtime by 65% and improved quality compliance by 35%"
      },
      color: "#f59e0b"
    }
  ];

  const successMetrics = [
    { metric: "150+", label: "AI Projects Deployed", icon: <Target size={32} /> },
    { metric: "98%", label: "Client Satisfaction Rate", icon: <Award size={32} /> },
    { metric: "45%", label: "Average Efficiency Gain", icon: <Zap size={32} /> },
    { metric: "2.3x", label: "Average ROI", icon: <TrendingUp size={32} /> }
  ];

  const process = [
    {
      step: "Discovery",
      description: "In-depth analysis of your industry challenges and opportunities",
      icon: <Brain size={32} />
    },
    {
      step: "Design",
      description: "Custom AI solution architecture tailored to your specific needs",
      icon: <BarChart3 size={32} />
    },
    {
      step: "Development",
      description: "Agile development with continuous testing and validation",
      icon: <Users size={32} />
    },
    {
      step: "Deployment",
      description: "Seamless integration and comprehensive training",
      icon: <Clock size={32} />
    }
  ];

  return (
    <div className="solutions-container">
      <header className={`solutions-header ${isScrolled ? 'solutions-scrolled' : ''}`}>
        <div className="solutions-container-inner solutions-header-container">
          <div className="solutions-logo">
            <i className="fas fa-robot"></i>
            <span>Tsarit Services</span>
          </div>
          <nav className={`solutions-nav ${isMenuOpen ? 'solutions-nav-open' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/solutions" className="solutions-active">Solutions</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <button className="solutions-cta-button">Get Started</button>
          <div 
            className="solutions-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="solutions-banner">
          <div 
            className="solutions-banner-background"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1526378729154-3f47a5c4f8c5?q=80&w=1600&auto=format&fit=crop')`
            }}
          />
          <div className="solutions-container-inner solutions-banner-content">
            <h1>AI Solutions for Industry</h1>
            <p>Transforming businesses across Healthcare, Finance, Retail & Manufacturing with cutting-edge AI</p>
            <div className="solutions-banner-stats">
              {successMetrics.map((item, index) => (
                <div key={index} className="solutions-banner-stat">
                  <div className="solutions-stat-icon">{item.icon}</div>
                  <div className="solutions-stat-number">{item.metric}</div>
                  <div className="solutions-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="solutions-industries">
          <div className="solutions-container-inner">
            <div className="solutions-section-header">
              <h2>Industry-Specific AI Solutions</h2>
              <p>Tailored AI implementations that address unique challenges and drive measurable results in your sector</p>
            </div>
            <div className="solutions-industries-grid">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className={`solutions-industry-card ${activeIndustry === index ? 'solutions-industry-active' : ''}`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <div 
                    className="solutions-industry-icon"
                    style={{ color: industry.color }}
                  >
                    {industry.icon}
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.shortDescription}</p>
                  <div className="solutions-industry-features">
                    {industry.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="solutions-feature-item">
                        <CheckCircle size={16} />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Industry View */}
        <section className="solutions-detailed">
          <div className="solutions-container-inner">
            <div className="solutions-detailed-content">
              <div className="solutions-detailed-main">
                <div className="solutions-industry-header">
                  <div 
                    className="solutions-detailed-icon"
                    style={{ color: industries[activeIndustry].color }}
                  >
                    {industries[activeIndustry].icon}
                  </div>
                  <div>
                    <h2>{industries[activeIndustry].title}</h2>
                    <p className="solutions-industry-description">
                      {industries[activeIndustry].fullDescription}
                    </p>
                  </div>
                </div>

                <div className="solutions-details-grid">
                  <div className="solutions-detail-section">
                    <h4>Industry Challenges</h4>
                    <div className="solutions-detail-list">
                      {industries[activeIndustry].challenges.map((challenge, index) => (
                        <div key={index} className="solutions-detail-item">
                          <div className="solutions-detail-marker"></div>
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="solutions-detail-section">
                    <h4>Our AI Solutions</h4>
                    <div className="solutions-detail-list">
                      {industries[activeIndustry].solutions.map((solution, index) => (
                        <div key={index} className="solutions-detail-item">
                          <CheckCircle size={20} />
                          <span>{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="solutions-detail-section">
                    <h4>Measurable Results</h4>
                    <div className="solutions-results-list">
                      {industries[activeIndustry].results.map((result, index) => (
                        <div key={index} className="solutions-result-item">
                          <Zap size={20} />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="solutions-case-study">
                <div 
                  className="solutions-case-study-card"
                  style={{ 
                    background: `linear-gradient(135deg, ${industries[activeIndustry].color}20, ${industries[activeIndustry].color}40)`,
                    borderLeft: `4px solid ${industries[activeIndustry].color}`
                  }}
                >
                  <h4>Success Story</h4>
                  <div className="solutions-case-study-content">
                    <div className="solutions-case-study-client">
                      <strong>Client:</strong> {industries[activeIndustry].caseStudy.client}
                    </div>
                    <div className="solutions-case-study-challenge">
                      <strong>Challenge:</strong> {industries[activeIndustry].caseStudy.challenge}
                    </div>
                    <div className="solutions-case-study-solution">
                      <strong>Solution:</strong> {industries[activeIndustry].caseStudy.solution}
                    </div>
                    <div className="solutions-case-study-outcome">
                      <strong>Outcome:</strong> {industries[activeIndustry].caseStudy.outcome}
                    </div>
                  </div>
                  <button 
                    className="solutions-cta-button solutions-case-study-cta"
                    style={{ background: industries[activeIndustry].color }}
                  >
                    View Full Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="solutions-process">
          <div className="solutions-container-inner">
            <div className="solutions-section-header">
              <h2>Our Implementation Process</h2>
              <p>A structured approach to ensure successful AI integration and maximum business impact</p>
            </div>
            <div className="solutions-process-steps">
              {process.map((step, index) => (
                <div key={index} className="solutions-process-step">
                  <div className="solutions-step-icon">{step.icon}</div>
                  <div className="solutions-step-number">0{index + 1}</div>
                  <h3>{step.step}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="solutions-cta">
          <div className="solutions-container-inner">
            <div className="solutions-cta-content">
              <div className="solutions-cta-text">
                <h2>Ready to Transform Your Industry with AI?</h2>
                <p>Schedule a personalized consultation to discover how our industry-specific AI solutions can drive growth, efficiency, and innovation for your organization.</p>
                <div className="solutions-cta-buttons">
                  <button className="solutions-cta-button solutions-cta-primary">
                    Book Industry Consultation <Play size={16} />
                  </button>
                  <button className="solutions-cta-button solutions-cta-secondary">
                    Download Solutions Guide
                  </button>
                </div>
              </div>
              <div className="solutions-cta-visual">
                <Brain size={120} className="solutions-cta-icon" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="solutions-footer">
        <div className="solutions-container-inner">
          <div className="solutions-footer-content">
            <div className="solutions-footer-column">
              <h3>Tsarit Services</h3>
              <p>Delivering industry-transforming AI solutions that drive measurable business outcomes.</p>
              <div className="solutions-social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="solutions-footer-column">
              <h3>Industries</h3>
              <ul>
                <li><a href="#">Finance & Banking</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Retail & E-commerce</a></li>
                <li><a href="#">Manufacturing</a></li>
              </ul>
            </div>
            <div className="solutions-footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> info@tsaritservices.com</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</li>
              </ul>
            </div>
            <div className="solutions-footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Industry Reports</a></li>
                <li><a href="#">White Papers</a></li>
                <li><a href="#">AI Insights</a></li>
              </ul>
            </div>
          </div>
          <div className="solutions-footer-bottom">
            <p>&copy; 2023 Tsarit Services. All rights reserved. Powering industry transformation with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;