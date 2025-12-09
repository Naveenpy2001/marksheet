'use client'
import { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  Building,
  Briefcase,
  MessageSquare,
  Clock,
  X
} from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    business_email: '',
    phone_number: '',
    job_title: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'first_name':
      case 'last_name':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        return !validateEmail(value) ? 'Invalid email address' : '';
      case 'business_email':
        return value && !validateEmail(value) ? 'Invalid business email' : '';
      case 'phone_number':
        return !validatePhone(value) ? 'Invalid phone number (min 10 digits)' : '';
      case 'job_title':
        return value.trim().length < 2 ? 'Job title is required' : '';
      case 'company':
        return value.trim().length < 2 ? 'Company name is required' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'business_email') { // business_email is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Axios API call (commented out for reference)
      /*
      // First, install axios: npm install axios
      // Then import: import axios from 'axios';
      
      const response = await axios.post('https://your-api-endpoint.com/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });
      
      if (response.status === 200 || response.status === 201) {
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          business_email: '',
          phone_number: '',
          job_title: '',
          company: '',
          message: ''
        });
        setTouched({});
        setErrors({});
      }
      */

      // Simulate API call (remove this when using real API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data to submit:', formData);
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        business_email: '',
        phone_number: '',
        job_title: '',
        company: '',
        message: ''
      });
      setTouched({});
      setErrors({});
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-20 lg:py-28 bg-linear-to-br from-gray-50 via-white to-cyan-50/30 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Content Section */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full shadow-lg shadow-cyan-500/30">
                <Mail size={18} className="text-white" />
                <span className="text-white text-sm font-semibold tracking-wide">GET IN TOUCH</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-linear-to-r from-cyan-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Let's Start a
                </span>
                <br />
                <span className="text-gray-800">Conversation</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-teal-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@company.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-cyan-600 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="group bg-linear-to-br from-cyan-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Response Time</h3>
                    <p className="text-cyan-50">Average response: 2-4 hours</p>
                    <p className="text-sm text-cyan-100 mt-1">During business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                
                {/* Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.first_name && touched.first_name
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="John"
                      />
                    </div>
                    {errors.first_name && touched.first_name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.first_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.last_name && touched.last_name
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="Doe"
                      />
                    </div>
                    {errors.last_name && touched.last_name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.email && touched.email
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="business_email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Email
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="business_email"
                        name="business_email"
                        value={formData.business_email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.business_email && touched.business_email
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.business_email && touched.business_email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.business_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Job Title Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.phone_number && touched.phone_number
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    {errors.phone_number && touched.phone_number && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.phone_number}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="job_title" className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.job_title && touched.job_title
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cyan-500'
                        }`}
                        placeholder="Product Manager"
                      />
                    </div>
                    {errors.job_title && touched.job_title && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.job_title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        errors.company && touched.company
                          ? 'border-red-300 focus:border-red-500 bg-red-50'
                          : 'border-gray-200 focus:border-cyan-500'
                      }`}
                      placeholder="ACME Inc."
                    />
                  </div>
                  {errors.company && touched.company && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                        errors.message && touched.message
                          ? 'border-red-300 focus:border-red-500 bg-red-50'
                          : 'border-gray-200 focus:border-cyan-500'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {errors.submit && (
                  <p className="text-red-500 text-sm text-center flex items-center justify-center gap-1">
                    <AlertCircle size={16} />
                    {errors.submit}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-500" />
            </button>
            
            <div className="text-center space-y-6">
              <div className="inline-flex p-4 bg-linear-to-br from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/30">
                <CheckCircle size={48} className="text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for reaching out! Our team will get back to you within 24 hours.
                </p>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-linear-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;