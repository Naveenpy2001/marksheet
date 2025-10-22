import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const API_BASE_URL = 'https://api.university.com/v1/auth';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setMessage({ type: 'error', text: 'Email and password are required' });
      return false;
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match' });
        return false;
      }
      if (formData.password.length < 6) {
        setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
        return false;
      }
      if (!formData.firstName || !formData.lastName) {
        setMessage({ type: 'error', text: 'First name and last name are required' });
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!validateForm()) return;

    setLoading(true);

    try {
      let response;
      
      if (isLogin) {
        // Login API call
        response = await axios.post(`${API_BASE_URL}/login`, {
          email: formData.email,
          password: formData.password
        });
        
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
        // Store token and user data
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 2000);
        
      } else {
        // Register API call
        response = await axios.post(`${API_BASE_URL}/register`, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        
        setMessage({ type: 'success', text: 'Registration successful! Please login.' });
        // Switch to login form after successful registration
        setTimeout(() => {
          setIsLogin(true);
          setFormData({
            email: formData.email,
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
          });
        }, 2000);
      }
      
    } catch (error) {
      console.error('Auth error:', error);
      const errorMessage = error.response?.data?.message || 
        (isLogin ? 'Login failed. Please try again.' : 'Registration failed. Please try again.');
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="st-auth-container">
      <div className="st-auth-card">
        {/* Header */}
        <div className="st-auth-header">
          <h1 className="st-auth-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="st-auth-subtitle">
            {isLogin 
              ? 'Sign in to your University Portal account' 
              : 'Join thousands of students in our university community'
            }
          </p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`st-auth-message st-message-${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form className="st-auth-form" onSubmit={handleSubmit}>
          {/* Name Fields - Only for Register */}
          {!isLogin && (
            <div className="st-form-row">
              <div className="st-form-group">
                <label htmlFor="firstName" className="st-form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="st-form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required={!isLogin}
                />
              </div>
              <div className="st-form-group">
                <label htmlFor="lastName" className="st-form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="st-form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="st-form-group">
            <label htmlFor="email" className="st-form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="st-form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Password Field */}
          <div className="st-form-group">
            <label htmlFor="password" className="st-form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="st-form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder={isLogin ? "Enter your password" : "Create a password"}
              required
            />
            {!isLogin && (
              <div className="st-password-hint">
                Password must be at least 6 characters long
              </div>
            )}
          </div>

          {/* Confirm Password - Only for Register */}
          {!isLogin && (
            <div className="st-form-group">
              <label htmlFor="confirmPassword" className="st-form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="st-form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required={!isLogin}
              />
            </div>
          )}

          {/* Forgot Password - Only for Login */}
          {isLogin && (
            <div className="st-forgot-password">
              <a href="/forgot-password" className="st-forgot-link">
                Forgot your password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="st-auth-button"
            disabled={loading}
          >
            {loading ? (
              <div className="st-loading-spinner"></div>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
            
          </button>
        </form>

        {/* Switch Mode */}
        <div className="st-auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button" 
              className="st-switch-button"
              onClick={switchMode}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Additional Info */}
        <div className="st-auth-info">
          <p className="st-info-text">
            {isLogin 
              ? 'By signing in, you agree to our Terms of Service and Privacy Policy'
              : 'By creating an account, you agree to our Terms of Service and Privacy Policy'
            }
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="st-auth-bg"></div>
    </div>
  );
};

export default AuthPage;