import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="head-container">
      <div className="head-content">
        <div className="head-left">
          <div className="head-logo">Logo</div>
        </div>

        <div className="head-center">
          <h1 className="head-title">Title</h1>
        </div>

        <div className="head-right">
          <button className="head-logout">Logout</button>
          <button className="head-hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`head-nav ${isMenuOpen ? 'head-nav-open' : ''}`}>
        <ul className="head-options">
          <li className="head-option-item" onMouseEnter={() => setActiveOption(1)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option1" className="head-option-link">Option 1</a>
            <ul className={`head-sub-options ${activeOption === 1 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option1/sub1">Sub Option 1</a></li>
              <li><a href="/option1/sub2">Sub Option 2</a></li>
              <li><a href="/option1/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(2)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option2" className="head-option-link">Option 2</a>
            <ul className={`head-sub-options ${activeOption === 2 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option2/sub1">Sub Option 1</a></li>
              <li><a href="/option2/sub2">Sub Option 2</a></li>
              <li><a href="/option2/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(3)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option3" className="head-option-link">Option 3</a>
            <ul className={`head-sub-options ${activeOption === 3 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option3/sub1">Sub Option 1</a></li>
              <li><a href="/option3/sub2">Sub Option 2</a></li>
              <li><a href="/option3/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(4)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option4" className="head-option-link">Option 4</a>
            <ul className={`head-sub-options ${activeOption === 4 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option4/sub1">Sub Option 1</a></li>
              <li><a href="/option4/sub2">Sub Option 2</a></li>
              <li><a href="/option4/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(5)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option5" className="head-option-link">Option 5</a>
            <ul className={`head-sub-options ${activeOption === 5 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option5/sub1">Sub Option 1</a></li>
              <li><a href="/option5/sub2">Sub Option 2</a></li>
              <li><a href="/option5/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(6)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option6" className="head-option-link">Option 6</a>
            <ul className={`head-sub-options ${activeOption === 6 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option6/sub1">Sub Option 1</a></li>
              <li><a href="/option6/sub2">Sub Option 2</a></li>
              <li><a href="/option6/sub3">Sub Option 3</a></li>
            </ul>
          </li>

          <li className="head-option-item" onMouseEnter={() => setActiveOption(7)} onMouseLeave={() => setActiveOption(null)}>
            <a href="/option7" className="head-option-link">Option 7</a>
            <ul className={`head-sub-options ${activeOption === 7 ? 'head-sub-options-active' : ''}`}>
              <li><a href="/option7/sub1">Sub Option 1</a></li>
              <li><a href="/option7/sub2">Sub Option 2</a></li>
              <li><a href="/option7/sub3">Sub Option 3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

