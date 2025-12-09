'use client'
import { useState } from 'react';
import { 
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Briefcase,
  User,
  Mail,
  Phone,
  Upload,
  CheckCircle,
  FileText,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '5+ years',
    salary: '₹12L - ₹18L',
    applyBy: '31 Jan 2025',
    description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.',
    fullDescription: 'As a Senior Full Stack Developer at TSAR IT, you will be responsible for designing, developing, and maintaining cutting-edge web applications. You will work closely with cross-functional teams to deliver high-quality software solutions that meet business requirements.',
    responsibilities: [
      'Design and develop scalable web applications using modern technologies',
      'Collaborate with product managers and designers to define requirements',
      'Write clean, maintainable, and efficient code',
      'Mentor junior developers and conduct code reviews',
      'Implement security and data protection measures'
    ],
    requirements: [
      '5+ years of professional experience in full-stack development',
      'Strong proficiency in React, Node.js, and PostgreSQL',
      'Experience with cloud platforms (AWS preferred)',
      'Knowledge of containerization technologies (Docker, Kubernetes)',
      'Excellent problem-solving and communication skills'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'MongoDB', 'Express.js']
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3+ years',
    salary: '₹8L - ₹12L',
    applyBy: '15 Feb 2025',
    description: 'Join our design team to create intuitive and beautiful user experiences for our products.',
    fullDescription: 'As a UI/UX Designer, you will be responsible for creating user-centered designs by understanding business requirements, and user feedback. You will create user flows, wireframes, prototypes and mockups.',
    responsibilities: [
      'Translate concepts into user flows, wireframes, mockups and prototypes',
      'Design and deliver wireframes, user stories, user journeys, and mockups',
      'Identify design problems and devise elegant solutions',
      'Make strategic design and user-experience decisions',
      'Collaborate with other team members and stakeholders'
    ],
    requirements: [
      '3+ years of UX design experience',
      'Expertise in standard UX software such as Figma, Adobe XD',
      'Ability to work with stakeholders to understand detailed requirements',
      'Experience in using UX design best practices',
      'Understanding of mobile-first and responsive design'
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'User Research']
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '4+ years',
    salary: '₹14L - ₹20L',
    applyBy: '25 Jan 2025',
    description: 'Help us build and maintain robust infrastructure and deployment pipelines.',
    fullDescription: 'As a DevOps Engineer, you will be responsible for building, maintaining, and scaling our infrastructure and deployment pipelines. You will work closely with development teams to ensure smooth deployment and operation of systems.',
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Manage cloud infrastructure on AWS',
      'Implement monitoring and alerting systems',
      'Ensure system security and reliability',
      'Automate infrastructure provisioning and management'
    ],
    requirements: [
      '4+ years of experience in DevOps or similar role',
      'Strong knowledge of Kubernetes, Docker, and Jenkins',
      'Experience with cloud platforms (AWS required)',
      'Knowledge of infrastructure as code (Terraform/CloudFormation)',
      'Experience with monitoring tools like Prometheus, Grafana'
    ],
    skills: ['Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Linux', 'CI/CD']
  },
  {
    id: 4,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5+ years',
    salary: '₹10L - ₹15L',
    applyBy: '10 Feb 2025',
    description: 'Lead our marketing initiatives and help grow our brand presence in the market.',
    fullDescription: 'As a Digital Marketing Manager, you will develop, implement, track and optimize our digital marketing campaigns across all digital channels. You will lead our marketing team to achieve business goals.',
    responsibilities: [
      'Plan and execute all digital marketing campaigns',
      'Measure and report performance of all digital marketing campaigns',
      'Identify trends and insights, and optimize spend and performance',
      'Collaborate with internal teams to create landing pages and optimize user experience',
      'Evaluate emerging technologies and provide thought leadership'
    ],
    requirements: [
      '5+ years of digital marketing experience',
      'Demonstrable experience leading and managing SEO/SEM campaigns',
      'Highly creative with experience in identifying target audiences',
      'Experience with A/B and multivariate experiments',
      'Strong analytical skills and data-driven thinking'
    ],
    skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Google Analytics', 'Social Media']
  },
  {
    id: 5,
    title: 'Junior Software Developer',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '1-2 years',
    salary: '₹4L - ₹6L',
    applyBy: '20 Feb 2025',
    description: 'Start your career with us and work on exciting projects with mentorship from senior developers.',
    fullDescription: 'As a Junior Software Developer, you will work on developing new features and maintaining existing applications. You will receive mentorship from senior developers and have opportunities for rapid growth.',
    responsibilities: [
      'Develop new user-facing features',
      'Build reusable code and libraries for future use',
      'Optimize application for maximum speed and scalability',
      'Assure technical feasibility of UI/UX designs',
      'Collaborate with team members and stakeholders'
    ],
    requirements: [
      '1-2 years of software development experience',
      'Good understanding of web markup, including HTML5, CSS3',
      'Basic understanding of JavaScript and React',
      'Familiarity with version control tools such as Git',
      'Strong problem-solving skills and willingness to learn'
    ],
    skills: ['JavaScript', 'React', 'Git', 'REST APIs', 'HTML/CSS']
  },
  {
    id: 6,
    title: 'Data Scientist',
    department: 'Data',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '3+ years',
    salary: '₹12L - ₹18L',
    applyBy: '05 Feb 2025',
    description: 'Analyze complex data sets and build machine learning models to drive business insights.',
    fullDescription: 'As a Data Scientist, you will analyze large amounts of raw information to find patterns and build predictive models. You will use machine learning techniques to create solutions for business problems.',
    responsibilities: [
      'Analyze large, complex data sets to solve difficult business problems',
      'Develop and implement machine learning models',
      'Create data-driven solutions to improve business outcomes',
      'Communicate findings and recommendations to stakeholders',
      'Stay updated with latest trends in data science and machine learning'
    ],
    requirements: [
      '3+ years of experience in data science or machine learning',
      'Strong knowledge of Python and ML frameworks (TensorFlow, PyTorch)',
      'Experience with data visualization tools',
      'Knowledge of SQL and NoSQL databases',
      'Experience with big data tools is a plus'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Pandas', 'NumPy']
  }
];

const JobDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const jobId = parseInt(params.id);
  const job = jobs.find(j => j.id === jobId);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: null
  });
  const [errors, setErrors] = useState({});

  if (!job) {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Job not found</h1>
          <Link href="/careers" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) {
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: '' }));
    } else {
      setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Application submitted:', { job, formData });
    
    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Careers</span>
            </button>
            
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                {job.department}
              </span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full border border-purple-200">
                {job.type}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 lg:p-8 mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} className="text-purple-600" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={20} className="text-pink-600" />
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign size={20} className="text-violet-600" />
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={20} className="text-green-600" />
                  <span className="font-medium">Apply by: {job.applyBy}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {job.fullDescription}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-linear-to-r from-purple-100 to-pink-100 text-purple-800 font-medium rounded-lg border border-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Benefits */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100 p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Join TSAR IT?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Career Growth</h3>
                    <p className="text-gray-600 text-sm">Clear advancement paths and mentorship programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Learning Budget</h3>
                    <p className="text-gray-600 text-sm">₹50,000 annual learning and development budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Team Culture</h3>
                    <p className="text-gray-600 text-sm">Collaborative environment with regular team events</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Health Benefits</h3>
                    <p className="text-gray-600 text-sm">Comprehensive medical coverage for you and family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Apply for this position
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-purple-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-purple-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-purple-500'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Experience <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.experience ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-purple-500'
                        }`}
                        placeholder="e.g., 5 years"
                      />
                    </div>
                    {errors.experience && <p className="mt-1 text-sm text-red-500">{errors.experience}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className={`flex items-center justify-center gap-3 w-full p-4 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                          errors.resume ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-purple-500 bg-gray-50 hover:bg-purple-50'
                        }`}
                      >
                        <Upload size={20} className="text-gray-400" />
                        <span className="text-gray-600">
                          {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX - Max 5MB)'}
                        </span>
                      </label>
                    </div>
                    {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
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
              <ArrowLeft size={24} className="text-gray-500" />
            </button>
            
            <div className="text-center space-y-6">
              <div className="inline-flex p-4 bg-linear-to-br from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/30">
                <CheckCircle size={48} className="text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for applying to <strong>{job.title}</strong>. Our team will review your application and get back to you within 5-7 business days.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push('/careers');
                }}
                className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Back to Careers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;