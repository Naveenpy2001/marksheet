import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="home-container">
      <header className={`home-header ${isScrolled ? 'home-scrolled' : ''}`}>
        <div className="home-container-inner home-header-container">
          <div className="home-logo">
            <i className="fas fa-robot"></i>
            <span>Tsarit Services</span>
          </div>
          <nav className={`home-nav ${isMenuOpen ? 'home-nav-open' : ''}`}>
            <ul>
              <li><a href="/home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="/services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="/about" >About</a></li>
              <li><a href="/solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}>Solutions</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </nav>
          <button className="home-cta-button">Get Started</button>
          <div 
            className="home-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        <section className="home-hero" id="home">
          <div className="home-container-inner home-hero-content">
            <div className="home-hero-text">
              <h1>Transform Your Business with <span>AI-Powered</span> Solutions</h1>
              <p>Leverage cutting-edge artificial intelligence to optimize operations, enhance customer experiences, and drive innovation across your organization.</p>
              <div className="home-hero-buttons">
                <button className="home-cta-button">Explore Solutions</button>
                <button className="home-cta-button home-cta-button-light">Book a Demo</button>
              </div>
            </div>
            <div className="home-hero-image">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="AI Technology" />
            </div>
          </div>
        </section>

        <section className="home-services" id="services">
          <div className="home-container-inner">
            <div className="home-section-title">
              <h2>Our AI Services</h2>
              <p>We offer a comprehensive suite of artificial intelligence solutions tailored to your business needs.</p>
            </div>
            <div className="home-services-grid">
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Machine Learning</h3>
                <p>Develop predictive models that learn from your data to forecast trends, identify patterns, and automate decision-making processes.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Natural Language Processing</h3>
                <p>Implement AI that understands, interprets, and generates human language for chatbots, sentiment analysis, and content generation.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Predictive Analytics</h3>
                <p>Leverage historical data and AI algorithms to predict future outcomes, optimize operations, and identify new opportunities.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>Process Automation</h3>
                <p>Automate repetitive tasks and workflows with intelligent bots that learn and adapt to your business processes.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>AI Security</h3>
                <p>Protect your digital assets with AI-powered security systems that detect and respond to threats in real-time.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="home-service-card">
                <div className="home-service-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3>Cloud AI Solutions</h3>
                <p>Deploy scalable AI solutions on cloud infrastructure with minimal setup and maximum flexibility.</p>
                <a href="#" className="home-service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-about" id="about">
          <div className="home-container-inner home-about-content">
            <div className="home-about-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="About Tsarit Services" />
            </div>
            <div className="home-about-text">
              <h2>Leading the AI Revolution</h2>
              <p>Tsarit Services is at the forefront of artificial intelligence innovation, helping businesses transform their operations with cutting-edge AI solutions.</p>
              <p>Our team of data scientists, machine learning engineers, and AI specialists work collaboratively to deliver customized solutions that drive real business value.</p>
              <p>We believe in ethical AI development and prioritize transparency, fairness, and accountability in all our solutions.</p>
              <div className="home-stats">
                <div className="home-stat">
                  <div className="home-stat-number">150+</div>
                  <div className="home-stat-label">Projects Completed</div>
                </div>
                <div className="home-stat">
                  <div className="home-stat-number">98%</div>
                  <div className="home-stat-label">Client Satisfaction</div>
                </div>
                <div className="home-stat">
                  <div className="home-stat-number">5+</div>
                  <div className="home-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-cta">
          <div className="home-container-inner">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Schedule a free consultation with our AI experts to discover how our solutions can drive growth and efficiency for your organization.</p>
            <div className="home-cta-buttons">
              <button className="home-cta-button home-cta-button-light">Book a Consultation</button>
              <button className="home-cta-button">View Case Studies</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-container-inner">
          <div className="home-footer-content">
            <div className="home-footer-column">
              <h3>Tsarit Services</h3>
              <p>Leading AI solutions provider helping businesses harness the power of artificial intelligence for growth and innovation.</p>
              <div className="home-social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="home-footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Natural Language Processing</a></li>
                <li><a href="#">Predictive Analytics</a></li>
                <li><a href="#">Process Automation</a></li>
                <li><a href="#">AI Security</a></li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@tsaritservices.com</li>
              </ul>
            </div>
          </div>
          <div className="home-footer-bottom">
            <p>&copy; 2025 Tsarit Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;