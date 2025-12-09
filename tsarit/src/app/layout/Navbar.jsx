'use client'
import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, ChevronRight, ArrowRight, MoreVertical } from 'lucide-react';
import './Navbar.css'
import Image from 'next/image';
import logo from '../../../public/logo-main.jpeg'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const navItems = [
    { label: 'What we do', id: 'what-we-do' },
    { label: 'Who we are', id: 'who-we-are' },
    { label: 'Insights', id: 'insights' },
    { label: 'Careers', id: 'careers' },
    { label: 'Newsroom', id: 'newsroom' },
    { label: 'Investors', id: 'investors' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'FR', name: 'French' }
  ];

  const products = [
    "Hospital Management System",
"Education Management System",
"AI chat Bot",
"Recruiter Management",
"HR Management",
"Finance Management"
  ];

  const dropdownContent = {
    'what-we-do': {
      title: 'Perpetually Adaptive Enterprise',
      description: 'At TSAR-IT, we don\'t just help businesses transform. We help them become perpetually adaptive enterprises, built to evolve continuously and confidently in a world of constant change.',
      cta: 'Adaptability starts here',
      menuItems: [
        { 
          label: 'Industries', 
          hasSubmenu: true,
          submenuItems: [
            'Banking', 'Capital Markets', 'Consumer Packaged Goods and Distribution',
            'Communications, Media, and Information Services', 'Education',
            'Energy, Resources, and Utilities', 'Healthcare', 'High Tech',
            'Insurance', 'Life Sciences', 'Manufacturing', 'Public Services',
            'Retail', 'Travel and Logistics'
          ]
        },
        { 
          label: 'Services', 
          hasSubmenu: true,
          submenuItems: [
            'Business Process Services', 'Cloud Services', 'Cognitive Business Operations',
            'Consulting', 'Cybersecurity', 'Data & Analytics', 'Enterprise Solutions',
            'IoT and Digital Engineering', 'Network Solutions', 'Quality Engineering',
            'Sustainability Services', 'Technology Consulting'
          ]
        },
        { 
          label: 'Products and Platforms', 
          hasSubmenu: true,
          submenuItems: [
            'TSAR-IT BaNCS', 'TSAR-IT HOBS', 'TSAR-IT Customer Intelligence & Insights',
            'TSAR-IT ADD', 'TSAR-IT OmniStore', 'TSAR-IT iON', 'Ignio', 'Jile',
            'MasterCraft', 'Quartz', 'TSAR-IT ERP on Cloud'
          ]
        },
        { 
          label: 'Research & Innovation', 
          hasSubmenu: true,
          submenuItems: [
            'TSAR-IT Research', 'Co-Innovation Network', 'Academic Partnerships',
            'Innovation Labs', 'Startup Ecosystem', 'Patents & Publications'
          ]
        },
        { 
          label: 'Alliances', 
          hasSubmenu: false,
          submenuItems: []
        }
      ]
    },
    'who-we-are': {
      title: 'Leading the Digital Transformation',
      description: 'TSAR-IT is a global leader in IT services, consulting, and business solutions with a consultative approach and integrated portfolio of cognitive powered services.',
      cta: 'Discover our story',
      menuItems: [
        { label: 'About Us', hasSubmenu: false, submenuItems: [] },
        { label: 'Leadership', hasSubmenu: false, submenuItems: [] },
        { label: 'Awards and Recognition', hasSubmenu: false, submenuItems: [] },
        { label: 'Corporate Sustainability', hasSubmenu: false, submenuItems: [] },
        { label: 'Diversity and Inclusion', hasSubmenu: false, submenuItems: [] }
      ]
    },
    'insights': {
      title: 'Thought Leadership & Insights',
      description: 'Explore our latest research, perspectives, and insights on emerging technologies and industry trends shaping the future of business.',
      cta: 'Explore insights',
      menuItems: [
        { label: 'Articles', hasSubmenu: false, submenuItems: [] },
        { label: 'Case Studies', hasSubmenu: false, submenuItems: [] },
        { label: 'Research Reports', hasSubmenu: false, submenuItems: [] },
        { label: 'White Papers', hasSubmenu: false, submenuItems: [] },
        { label: 'Webinars', hasSubmenu: false, submenuItems: [] }
      ]
    },
    'careers': {
      title: 'Build Your Career with TSAR-IT',
      description: 'Join a diverse, global team that\'s driving innovation and creating meaningful impact. Discover opportunities to grow, learn, and make a difference.',
      cta: 'Explore careers',
      menuItems: [
        { label: 'Why TSAR-IT', hasSubmenu: false, submenuItems: [] },
        { label: 'Life at TSAR-IT', hasSubmenu: false, submenuItems: [] },
        { label: 'Students and Graduates', hasSubmenu: false, submenuItems: [] },
        { label: 'Experienced Professionals', hasSubmenu: false, submenuItems: [] },
        { label: 'Search Jobs', hasSubmenu: false, submenuItems: [] }
      ]
    },
    'newsroom': {
      title: 'Latest News & Updates',
      description: 'Stay informed with the latest announcements, press releases, and news from TSAR-IT across the globe.',
      cta: 'View all news',
      menuItems: [
        { label: 'Press Releases', hasSubmenu: false, submenuItems: [] },
        { label: 'Media Coverage', hasSubmenu: false, submenuItems: [] },
        { label: 'Events', hasSubmenu: false, submenuItems: [] },
        { label: 'Media Contacts', hasSubmenu: false, submenuItems: [] }
      ]
    },
    'investors': {
      title: 'Investor Relations',
      description: 'Access comprehensive financial information, reports, and resources for TSAR-IT shareholders and the investment community.',
      cta: 'Investor information',
      menuItems: [
        { label: 'Financial Results', hasSubmenu: false, submenuItems: [] },
        { label: 'Stock Information', hasSubmenu: false, submenuItems: [] },
        { label: 'Annual Reports', hasSubmenu: false, submenuItems: [] },
        { label: 'Corporate Governance', hasSubmenu: false, submenuItems: [] },
        { label: 'Shareholder Information', hasSubmenu: false, submenuItems: [] }
      ]
    }
  };

  const handleNavClick = (id) => {
    if (window.innerWidth <= 1024) {
      setIsMobileMenuOpen(false);
    }
    setActiveDropdown(activeDropdown === id ? null : id);
    setActiveSubmenu(null);
    setHoveredSubmenu(null);
  };

  const handleMobileNavClick = (id) => {
    setActiveDropdown(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo" onClick={() => {
            setActiveDropdown(null);
            setIsMobileMenuOpen(false);
            setShowLanguageDropdown(false);
            setShowProductsMenu(false);
          }}>
            {/* <div className="logo-icon">T</div> */}
            <Image src={logo} width={50} style={{borderRadius:"10px"}} alt='TSAR-IT-Logo' />
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link ${activeDropdown === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Language Selector */}
            <div className="language-selector">
              <button 
                className="language-btn"
                onClick={() => {
                  setShowLanguageDropdown(!showLanguageDropdown);
                  setShowProductsMenu(false);
                }}
              >
                <Globe size={20} />
                <span className="language-text">Global (EN)</span>
                <ChevronDown size={16} />
              </button>
              
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button 
                      key={lang.code} 
                      className="language-option"
                      onClick={() => {
                        setShowLanguageDropdown(false);
                      }}
                    >
                      <span className="language-code">{lang.code}</span>
                      <span className="language-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="contact-btn">Contact Us</button>
            
            {/* Products Menu (3-dots button) */}
            <div className="products-menu-wrapper">
              <button 
                className="products-menu-btn"
                onClick={() => {
                  setShowProductsMenu(!showProductsMenu);
                  setShowLanguageDropdown(false);
                }}
              >
                <MoreVertical size={24} />
              </button>
              
              {showProductsMenu && (
                <div className="products-dropdown">
                  <div className="products-dropdown-header">Our Products</div>
                  <div className="products-grid">
                    {products.map((product, index) => (
                      <div key={index} className="product-item">
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveDropdown(null);
                setShowLanguageDropdown(false);
                setShowProductsMenu(false);
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <div key={index} className="mobile-nav-item">
            <div 
              className="mobile-nav-link"
              onClick={() => handleMobileNavClick(item.id)}
            >
              {item.label}
              <ChevronRight size={20} />
            </div>
          </div>
        ))}
        <div className="mobile-nav-item">
          <button className="contact-btn" style={{ width: '100%' }}>Contact Us</button>
        </div>
      </div>

      {/* Dropdown Overlay */}
      {activeDropdown && (
        <>
          <div className="dropdown-overlay" onClick={() => setActiveDropdown(null)} />
          <div className="dropdown-container">
            <div className="dropdown-content-wrapper">
              <div className="dropdown-left">
                <h2>{dropdownContent[activeDropdown].title}</h2>
                <p>{dropdownContent[activeDropdown].description}</p>
                <button className="dropdown-cta">
                  {dropdownContent[activeDropdown].cta}
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="dropdown-right">
                {dropdownContent[activeDropdown].menuItems.map((menuItem, idx) => (
                  <div 
                    key={idx} 
                    className="dropdown-menu-item"
                    onMouseEnter={() => menuItem.hasSubmenu && setHoveredSubmenu(idx)}
                    onMouseLeave={() => setHoveredSubmenu(null)}
                    onClick={() => menuItem.hasSubmenu && setActiveSubmenu(activeSubmenu === idx ? null : idx)}
                  >
                    <div className="menu-item-header">
                      {menuItem.label}
                      {menuItem.hasSubmenu && <ChevronRight size={18} /> }
                    </div>
                    {menuItem.hasSubmenu && (hoveredSubmenu === idx || activeSubmenu === idx) && (
                      <div className="submenu-items">
                        {menuItem.submenuItems.map((subItem, subIdx) => (
                          <div key={subIdx} className="submenu-item">
                            {subItem}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;