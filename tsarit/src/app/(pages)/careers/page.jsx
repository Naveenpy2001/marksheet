'use client'
import { useState, useEffect, useRef } from 'react';
import { 
  Home,
  ChevronRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  Sparkles,
  Search,
  Filter,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);
  const router = useRouter();

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

  const benefits = [
    { icon: <Heart size={24} />, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
    { icon: <Laptop size={24} />, title: 'Hybrid Work', description: 'Flexible work from home and office options' },
    { icon: <GraduationCap size={24} />, title: 'Learning Budget', description: '₹50,000 annual learning and development budget' },
    { icon: <Coffee size={24} />, title: 'Paid Leave', description: '28 days annual leave plus public holidays' },
    { icon: <TrendingUp size={24} />, title: 'Career Growth', description: 'Clear advancement paths and mentorship' },
    { icon: <Users size={24} />, title: 'Team Events', description: 'Regular team building and social events' }
  ];

  const values = [
    { icon: <Zap size={32} />, title: 'Innovation First', description: 'We encourage creative thinking and new ideas' },
    { icon: <Users size={32} />, title: 'Collaborative', description: 'We work together to achieve great results' },
    { icon: <Target size={32} />, title: 'Results Driven', description: 'We focus on impact and measurable outcomes' },
    { icon: <Heart size={32} />, title: 'People Focused', description: 'We care about our team and their well-being' }
  ];

  const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Data'];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJobClick = (job) => {
    router.push(`/careers/${job.id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-pink-50">
      {/* Breadcrumb */}
      <div className="bg-linear-to-r from-purple-50 to-pink-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Home size={16} className="text-purple-600" />
            <span className="text-gray-600">Home</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-purple-600 font-semibold">Careers</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="relative py-16 px-4 sm:py-20 lg:py-28 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-200 rounded-full mb-6">
              <Sparkles size={20} className="text-purple-600" />
              <span className="text-purple-700 text-sm font-bold tracking-wider uppercase">
                Join Our Team
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Build Your Career
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,3 150,8 T300,8" stroke="url(#linear)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearlinear id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearlinear>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-gray-800">With TSAR IT</span>
            </h1>

            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Join a team of passionate innovators working on cutting-edge technology solutions. 
              We're looking for talented individuals who want to make an impact.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search positions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <Filter size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full sm:w-48 pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors duration-300 appearance-none bg-white cursor-pointer"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Positions Count */}
          <div className={`text-center mb-12 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {jobs.length}
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-bold text-lg">Open Positions</p>
                <p className="text-gray-600 text-sm">Available across India</p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="relative inline-block text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Open Positions
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,3 150,8 T300,8" stroke="url(#linear2)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearlinear id="linear2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearlinear>
                  </defs>
                </svg>
              </h2>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid gap-6">
                {filteredJobs.map((job, index) => (
                  <div
                    key={job.id}
                    onClick={() => handleJobClick(job)}
                    className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{
                      animation: isVisible ? `fadeIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-200">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-200 flex items-center gap-1">
                            <Calendar size={12} />
                            Apply by: {job.applyBy}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          {job.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-purple-600" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-pink-600" />
                            {job.experience}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign size={16} className="text-violet-600" />
                            {job.salary}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Required Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-linear-to-r from-purple-100 to-pink-100 text-purple-800 text-xs font-medium rounded-lg border border-purple-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:pl-6">
                        <div className="w-full lg:w-auto px-6 py-3 bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                          View Details
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No positions found matching your search.</p>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="relative inline-block text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Benefits & Perks
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,3 150,8 T300,8" stroke="url(#linear3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearlinear id="linear3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearlinear>
                  </defs>
                </svg>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
                We invest in our people with competitive benefits and a supportive work environment
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex p-4 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="relative inline-block text-4xl sm:text-5xl font-bold">
                <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Values
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,3 150,8 T300,8" stroke="url(#linear4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearlinear id="linear4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearlinear>
                  </defs>
                </svg>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="inline-flex p-5 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <Award size={64} className="text-white mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-purple-50 text-lg mb-8 leading-relaxed">
                Can't find the perfect position? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
                Submit Your Resume
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;