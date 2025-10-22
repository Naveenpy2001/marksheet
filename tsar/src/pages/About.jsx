import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield,
  Heart,
  TrendingUp,
  Code,
  Brain,
  Zap
} from 'lucide-react';
import './About.css';

const About = () => {
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

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist",
      bio: "PhD in Machine Learning from Stanford. Former AI researcher at Google.",
      expertise: ["Machine Learning", "Neural Networks", "Research"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      bio: "15+ years in software architecture and AI system design.",
      expertise: ["System Architecture", "Cloud AI", "DevOps"]
    },
    {
      name: "Dr. Elena Petrova",
      role: "AI Ethics Lead",
      bio: "Expert in responsible AI and algorithmic fairness.",
      expertise: ["AI Ethics", "Fairness", "Governance"]
    },
    {
      name: "James Kim",
      role: "Product Director",
      bio: "Specializes in transforming AI research into business solutions.",
      expertise: ["Product Strategy", "Business AI", "Innovation"]
    }
  ];

  const values = [
    {
      icon: <Shield size={48} />,
      title: "Trust & Security",
      description: "We prioritize data security and build transparent, auditable AI systems."
    },
    {
      icon: <Globe size={48} />,
      title: "Global Impact",
      description: "Our solutions are designed to create positive change across industries worldwide."
    },
    {
      icon: <Heart size={48} />,
      title: "Ethical AI",
      description: "We're committed to developing AI that's fair, unbiased, and beneficial to society."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Continuous Innovation",
      description: "We stay at the forefront of AI research and development."
    }
  ];

  const milestones = [
    { year: "2018", event: "Company Founded", description: "Started with a vision to democratize AI" },
    { year: "2019", event: "First Major Client", description: "Deployed AI solutions for Fortune 500 company" },
    { year: "2020", event: "Research Division", description: "Established dedicated AI research team" },
    { year: "2021", event: "Global Expansion", description: "Opened offices in 3 new countries" },
    { year: "2022", event: "Ethics Framework", description: "Published industry-leading AI ethics guidelines" },
    { year: "2023", event: "AI Innovation Award", description: "Recognized for breakthrough in NLP technology" }
  ];

  return (
    <div className="about-container">
      <header className={`about-header ${isScrolled ? 'about-scrolled' : ''}`}>
        <div className="about-container-inner about-header-container">
          <div className="about-logo">
            <i className="fas fa-robot"></i>
            <span>Tsarit Services</span>
          </div>
          <nav className={`about-nav ${isMenuOpen ? 'about-nav-open' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about" className="about-active">About</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <button className="about-cta-button">Get Started</button>
          <div 
            className="about-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="about-banner">
          <div 
            className="about-banner-background"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')`
            }}
          />
          <div className="about-container-inner about-banner-content">
            <h1>About Tsarit Services</h1>
            <p>Pioneering Responsible AI Solutions for a Better Tomorrow</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container-inner">
            <div className="about-mission-content">
              <div className="about-mission-text">
                <h2>Our Mission</h2>
                <p className="about-mission-statement">
                  To make artificial intelligence accessible, secure, and valuable for organizations of all sizes, 
                  while ensuring ethical development and positive societal impact.
                </p>
                <p className="about-mission-description">
                  We believe AI should augment human capabilities, not replace them. Our mission is to create 
                  intelligent systems that empower businesses, enhance decision-making, and drive innovation 
                  while maintaining the highest standards of ethics and security.
                </p>
                <div className="about-stats">
                  <div className="about-stat">
                    <div className="about-stat-icon">
                      <Target size={32} />
                    </div>
                    <div className="about-stat-content">
                      <div className="about-stat-number">150+</div>
                      <div className="about-stat-label">Projects Completed</div>
                    </div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-icon">
                      <Users size={32} />
                    </div>
                    <div className="about-stat-content">
                      <div className="about-stat-number">20+</div>
                      <div className="about-stat-label">AI Experts</div>
                    </div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-icon">
                      <Award size={32} />
                    </div>
                    <div className="about-stat-content">
                      <div className="about-stat-number">98%</div>
                      <div className="about-stat-label">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-mission-image">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI Innovation" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container-inner">
            <div className="about-section-header">
              <h2>Our Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <div key={index} className="about-value-card">
                  <div className="about-value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-container-inner">
            <div className="about-section-header">
              <h2>Meet Our Team</h2>
              <p>The brilliant minds behind our AI solutions</p>
            </div>
            <div className="about-team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="about-team-card">
                  <div className="about-team-image">
                    <div className="about-team-avatar">
                      <Users size={40} />
                    </div>
                  </div>
                  <div className="about-team-info">
                    <h3>{member.name}</h3>
                    <p className="about-team-role">{member.role}</p>
                    <p className="about-team-bio">{member.bio}</p>
                    <div className="about-team-expertise">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="about-expertise-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="about-timeline">
          <div className="about-container-inner">
            <div className="about-section-header">
              <h2>Our Journey</h2>
              <p>Milestones in our pursuit of AI excellence</p>
            </div>
            <div className="about-timeline-container">
              {milestones.map((milestone, index) => (
                <div key={index} className="about-timeline-item">
                  <div className="about-timeline-marker">
                    <div className="about-timeline-dot"></div>
                    {index < milestones.length - 1 && (
                      <div className="about-timeline-line"></div>
                    )}
                  </div>
                  <div className="about-timeline-content">
                    <div className="about-timeline-year">{milestone.year}</div>
                    <h3>{milestone.event}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-container-inner">
            <div className="about-cta-content">
              <Brain size={64} className="about-cta-icon" />
              <h2>Ready to Transform Your Business with AI?</h2>
              <p>Join the growing number of companies leveraging our expertise to drive innovation and growth.</p>
              <div className="about-cta-buttons">
                <button className="about-cta-button about-cta-primary">Start Your AI Journey</button>
                <button className="about-cta-button about-cta-secondary">Meet Our Team</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-container-inner">
          <div className="about-footer-content">
            <div className="about-footer-column">
              <h3>Tsarit Services</h3>
              <p>Leading the way in responsible AI development and implementation.</p>
              <div className="about-social-links">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="about-footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> info@tsaritservices.com</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</li>
              </ul>
            </div>
            <div className="about-footer-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/solutions">Case Studies</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">AI Insights Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="about-footer-bottom">
            <p>&copy; 2023 Tsarit Services. All rights reserved. Committed to ethical AI development.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;