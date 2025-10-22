import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  AlertCircle,
  Building,
  Globe
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://api.tsaritservices.com/contact', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website-contact-form'
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          service: '',
          budget: '',
          message: ''
        });
        
        // Reset form after success
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Fallback to email if API fails
      const mailtoLink = `mailto:info@tsaritservices.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={32} />,
      title: "Visit Our Office",
      details: ["123 AI Street, Tech City", "San Francisco, CA 94105"],
      description: "Come visit us to discuss your AI project in person"
    },
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Available Monday-Friday, 9AM-6PM PST"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      details: ["info@tsaritservices.com", "support@tsaritservices.com"],
      description: "We typically respond within 2 business hours"
    },
    {
      icon: <Clock size={32} />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Weekend: Emergency Support"],
      description: "24/7 emergency support for existing clients"
    }
  ];

  const services = [
    "Machine Learning Development",
    "Generative AI",
    "Data Engineering",
    "AI Strategy & Consulting",
    "AI Security & Governance",
    "Cloud AI Solutions"
  ];

  const budgetRanges = [
    "Less than $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+"
  ];

  return (
    <div className="ct-container">
      <header className={`ct-header ${isScrolled ? 'ct-scrolled' : ''}`}>
        <div className="ct-container-inner ct-header-container">
          <div className="ct-logo">
            <i className="fas fa-robot"></i>
            <span>Tsarit Services</span>
          </div>
          <nav className={`ct-nav ${isMenuOpen ? 'ct-nav-open' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/contact" className="ct-active">Contact</a></li>
            </ul>
          </nav>
          <button className="ct-cta-button">Get Started</button>
          <div 
            className="ct-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="ct-banner">
          <div 
            className="ct-banner-background"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')`
            }}
          />
          <div className="ct-container-inner ct-banner-content">
            <h1>Contact Tsarit Services</h1>
            <p>Let's build your AI future together. Start the conversation today.</p>
            <div className="ct-banner-stats">
              <div className="ct-banner-stat">
                <div className="ct-stat-number">24h</div>
                <div className="ct-stat-label">Avg. Response Time</div>
              </div>
              <div className="ct-banner-stat">
                <div className="ct-stat-number">98%</div>
                <div className="ct-stat-label">Client Satisfaction</div>
              </div>
              <div className="ct-banner-stat">
                <div className="ct-stat-number">50+</div>
                <div className="ct-stat-label">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="ct-contact">
          <div className="ct-container-inner">
            <div className="ct-contact-content">
              {/* Contact Form */}
              <div className="ct-form-section">
                <div className="ct-form-header">
                  <MessageCircle size={48} className="ct-form-icon" />
                  <h2>Start Your AI Journey</h2>
                  <p>Fill out the form below and our AI experts will get back to you within 24 hours.</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="ct-alert ct-alert-success">
                    <CheckCircle size={20} />
                    <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="ct-alert ct-alert-error">
                    <AlertCircle size={20} />
                    <span>There was an error sending your message. Please try again or email us directly.</span>
                  </div>
                )}

                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-row">
                    <div className="ct-form-group">
                      <label htmlFor="name" className="ct-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`ct-input ${errors.name ? 'ct-input-error' : ''}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <span className="ct-error">{errors.name}</span>}
                    </div>
                    <div className="ct-form-group">
                      <label htmlFor="email" className="ct-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`ct-input ${errors.email ? 'ct-input-error' : ''}`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <span className="ct-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="ct-form-row">
                    <div className="ct-form-group">
                      <label htmlFor="company" className="ct-label">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="ct-input"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="ct-form-group">
                      <label htmlFor="service" className="ct-label">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="ct-input"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="ct-form-row">
                    <div className="ct-form-group">
                      <label htmlFor="subject" className="ct-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="ct-input"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                    <div className="ct-form-group">
                      <label htmlFor="budget" className="ct-label">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="ct-input"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="ct-form-group">
                    <label htmlFor="message" className="ct-label">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`ct-textarea ${errors.message ? 'ct-input-error' : ''}`}
                      rows="6"
                      placeholder="Tell us about your project, challenges, and goals..."
                    />
                    {errors.message && <span className="ct-error">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="ct-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="ct-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="ct-info-section">
                <div className="ct-info-header">
                  <h3>Get in Touch</h3>
                  <p>Multiple ways to reach our AI experts</p>
                </div>

                <div className="ct-info-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="ct-info-card">
                      <div className="ct-info-icon">
                        {info.icon}
                      </div>
                      <div className="ct-info-content">
                        <h4>{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="ct-info-detail">
                            {detail}
                          </p>
                        ))}
                        <p className="ct-info-description">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ct-map-section">
                  <div className="ct-map-placeholder">
                    <Globe size={48} />
                    <h4>Global Reach</h4>
                    <p>We serve clients worldwide with remote AI implementation and support</p>
                    <button className="ct-cta-button ct-secondary">
                      <Calendar size={18} />
                      Schedule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ct-cta-section">
          <div className="ct-container-inner">
            <div className="ct-cta-content">
              <Building size={64} className="ct-cta-icon" />
              <h2>Ready to Transform Your Business with AI?</h2>
              <p>Book a free 30-minute consultation with our AI experts to discuss your project requirements and get a customized solution proposal.</p>
              <div className="ct-cta-buttons">
                <button className="ct-cta-button ct-primary">
                  <Calendar size={18} />
                  Schedule Free Consultation
                </button>
                <button className="ct-cta-button ct-secondary">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ct-footer">
        <div className="ct-container-inner">
          <div className="ct-footer-content">
            <div className="ct-footer-column">
              <h3>Tsarit Services</h3>
              <p>Your trusted partner for enterprise AI solutions and digital transformation.</p>
              <div className="ct-social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="ct-footer-column">
              <h3>Office</h3>
              <ul>
                <li><MapPin size={16} /> 123 AI Street, Tech City</li>
                <li><i className="fas fa-city"></i> San Francisco, CA 94105</li>
                <li><i className="fas fa-flag"></i> United States</li>
              </ul>
            </div>
            <div className="ct-footer-column">
              <h3>Contact</h3>
              <ul>
                <li><Mail size={16} /> info@tsaritservices.com</li>
                <li><Phone size={16} /> +1 (555) 123-4567</li>
                <li><Clock size={16} /> Mon-Fri, 9AM-6PM PST</li>
              </ul>
            </div>
            <div className="ct-footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/solutions">Case Studies</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="ct-footer-bottom">
            <p>&copy; 2023 Tsarit Services. All rights reserved. Building intelligent futures together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;