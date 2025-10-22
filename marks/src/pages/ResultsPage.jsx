import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResultsPage.css';

const ResultsPage = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('results');
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);

  const menuItems = [
    { id: 'results', label: 'RESULTS' },
    { id: 'admissions', label: 'ADMISSIONS' },
    { id: 'programmes', label: 'PROGRAMMES' },
    { id: 'study-centres', label: 'STUDY CENTRES' },
    { id: 'student-services', label: 'STUDENT SERVICES' },
    { id: 'examinations', label: 'EXAMINATIONS' },
    { id: 'e-services', label: 'e-SERVICES' },
    { id: 'study-material', label: 'STUDY MATERIAL' },
    { id: 'about', label: 'ABOUT UNIVERSITY' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!enrollmentNumber.trim()) return;

    setLoading(true);
    try {
      // API call to fetch result - replace with actual endpoint
      const response = await axios.post('/api/results', {
        enrollmentNumber: enrollmentNumber.trim(),
        year: 2025,
        semester: "August"
      });
      
      if (response.data.success) {
        setResultData(response.data.result);
        setStudentInfo(response.data.studentInfo);
        setActiveSection('results');
      } else {
        alert('No results found for the provided enrollment number.');
      }
    } catch (error) {
      console.error('Error fetching result:', error);
      // Mock data for demonstration
      const mockResult = generateMockResult(enrollmentNumber);
      setResultData(mockResult.courses);
      setStudentInfo(mockResult.studentInfo);
      setActiveSection('results');
    } finally {
      setLoading(false);
    }
  };

  const generateMockResult = (enrollmentNo) => {
    return {
      studentInfo: {
        name: "RAJESH KUMAR",
        enrollmentNumber: enrollmentNo,
        programme: "B.Tech Computer Science",
        semester: "IV",
        college: "University College of Engineering",
        dob: "15-06-2003",
        fatherName: "SURESH KUMAR"
      },
      courses: [
        { code: "CS401", name: "Data Structures", grade: "A", credits: 4, internal: 28, external: 52, total: 80, result: "PASS" },
        { code: "CS402", name: "Database Management Systems", grade: "B+", credits: 4, internal: 26, external: 48, total: 74, result: "PASS" },
        { code: "CS403", name: "Computer Networks", grade: "A", credits: 3, internal: 29, external: 56, total: 85, result: "PASS" },
        { code: "MA401", name: "Discrete Mathematics", grade: "B", credits: 4, internal: 24, external: 45, total: 69, result: "PASS" },
        { code: "HS401", name: "Professional Communication", grade: "A+", credits: 2, internal: 18, external: 38, total: 56, result: "PASS" },
        { code: "CS404", name: "Operating Systems", grade: "C", credits: 4, internal: 22, external: 40, total: 62, result: "PASS" }
      ]
    };
  };

  const calculateSGPA = () => {
    if (!resultData) return 0;
    
    const gradePoints = {
      'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C': 6, 'D': 5, 'E': 4, 'F': 0
    };
    
    let totalCredits = 0;
    let totalPoints = 0;
    
    resultData.forEach(course => {
      totalCredits += course.credits;
      totalPoints += course.credits * gradePoints[course.grade];
    });
    
    return (totalPoints / totalCredits).toFixed(2);
  };

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'results':
        return (
          <div className="st-results-content">
            {studentInfo && resultData ? (
              <>
                <div className="st-student-details">
                  <h3>Student Details</h3>
                  <div className="st-details-grid">
                    <div><strong>Name:</strong> {studentInfo.name}</div>
                    <div><strong>Enrollment No:</strong> {studentInfo.enrollmentNumber}</div>
                    <div><strong>Programme:</strong> {studentInfo.programme}</div>
                    <div><strong>Semester:</strong> {studentInfo.semester}</div>
                    <div><strong>College:</strong> {studentInfo.college}</div>
                    <div><strong>Date of Birth:</strong> {studentInfo.dob}</div>
                  </div>
                </div>

                <div className="st-result-card">
                  <h3>August 2025 Examination Results</h3>
                  <div className="st-result-table-container">
                    <table className="st-marks-table">
                      <thead>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Internal</th>
                          <th>External</th>
                          <th>Total</th>
                          <th>Grade</th>
                          <th>Credits</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultData.map((course, index) => (
                          <tr key={index} className={course.result === 'FAIL' ? 'st-fail' : ''}>
                            <td>{course.code}</td>
                            <td className="st-course-name">{course.name}</td>
                            <td>{course.internal}</td>
                            <td>{course.external}</td>
                            <td><strong>{course.total}</strong></td>
                            <td><span className={`st-grade st-grade-${course.grade}`}>{course.grade}</span></td>
                            <td>{course.credits}</td>
                            <td>
                              <span className={`st-result ${course.result === 'PASS' ? 'st-pass' : 'st-fail-text'}`}>
                                {course.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="st-result-summary">
                    <div className="st-sgpa">
                      <strong>SGPA: {calculateSGPA()}</strong>
                    </div>
                    <div className="st-overall-result">
                      <strong>Overall Result: <span className="st-pass">PASS</span></strong>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="st-welcome-message">
                <h3>Welcome to University Results Portal 2025</h3>
                <p>Enter your enrollment number to check your results for August 2025 examinations.</p>
              </div>
            )}
          </div>
        );

      case 'admissions':
        return (
          <div className="st-section-content">
            <h3>Admissions 2025-26</h3>
            <div className="st-info-card">
              <h4>Important Dates</h4>
              <ul>
                <li>Application Start Date: January 15, 2025</li>
                <li>Last Date for Application: March 31, 2025</li>
                <li>Entrance Exam: April 20, 2025</li>
                <li>Counselling: May 15-30, 2025</li>
              </ul>
            </div>
          </div>
        );

      case 'programmes':
        return (
          <div className="st-section-content">
            <h3>Academic Programmes</h3>
            <div className="st-programmes-list">
              <h4>Undergraduate Programs</h4>
              <ul>
                <li>B.Tech - Computer Science & Engineering</li>
                <li>B.Tech - Electronics & Communication</li>
                <li>B.Tech - Mechanical Engineering</li>
                <li>B.Tech - Civil Engineering</li>
                <li>B.Sc - Mathematics</li>
                <li>B.Sc - Physics</li>
              </ul>
            </div>
          </div>
        );

      default:
        return (
          <div className="st-section-content">
            <h3>{menuItems.find(item => item.id === activeSection)?.label}</h3>
            <p>Content for {activeSection} section will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <div className="st-container">
      {/* Mobile Menu Button */}
      <button className="st-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Fixed Sidebar Navigation */}
      <div className={`st-sidebar ${isMenuOpen ? 'st-sidebar-open' : ''}`}>
        <div className="st-sidebar-header">
          <h2>UNIVERSITY PORTAL</h2>
          {/* <div className="st-academic-year">2024-25</div> */}
        </div>
        <nav className="st-nav">
          <ul className="st-nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="st-nav-item">
                <button
                  className={`st-nav-link ${activeSection === item.id ? 'st-nav-active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when menu is open */}
      {isMenuOpen && (
        <div className="st-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Scrollable Main Content */}
      <main className="st-main-content">
        {/* Results Input Section - Only show when results is active */}
        {activeSection === 'results' && (
          <div className="st-results-input-section">
            <h1 className="st-results-title">August 2025 - RESULTS</h1>
            
            <form className="st-results-form" onSubmit={handleSubmit}>
              <div className="st-form-group">
                <label htmlFor="enrollmentNumber" className="st-form-label">
                  Enter Enrolment / Register Number:
                </label>
                <div className="st-input-container">
                  <input
                    type="text"
                    id="enrollmentNumber"
                    className="st-form-input"
                    value={enrollmentNumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    placeholder=""
                    required
                  />
                  <button type="submit" className="st-submit-button" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Results'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Dynamic Content Area */}
        <div className="st-content-area">
          {loading ? (
            <div className="st-loading">
              <div className="st-loading-spinner"></div>
              Fetching results...
            </div>
          ) : (
            renderContent()
          )}
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;