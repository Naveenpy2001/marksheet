import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResultsPage.css';
import Header from './Header';

const ResultsPage = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('results');
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);

   const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: ''
  });
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/submit-data/', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.success) {
        alert('Data submitted successfully!');
        setFormData({
          field1: '',
          field2: '',
          field3: '',
          field4: '',
          field5: '',
          field6: '',
          field7: '',
          field8: '',
          field9: '',
          field10: ''
        });
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { id: 'results', label: 'RESULTS' },
    { id: 'admissions', label: 'RESULTS 2' },
    { id: 'programmes', label: 'PROGRAMMES' },
    { id: 'study-centres', label: 'STUDY CENTRES' },
    { id: 'student-services', label: 'STUDENT SERVICES' },
    { id: 'examinations', label: 'EXAMINATIONS' },
    { id: 'e-services', label: 'e-SERVICES' },
    { id: 'study-material', label: 'STUDY MATERIAL' },
    { id: 'about', label: 'ABOUT UNIVERSITY' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  

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
               
              </div>
            )}
          </div>
        );

      case 'admissions':
        return (
          <div className="st-section-content">
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
    <>
    <div>
      <Header />
    </div>
    <div className="st-container">
      {/* Mobile Menu Button */}
      <button className="st-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Fixed Sidebar Navigation */}
      <div className={`st-sidebar ${isMenuOpen ? 'st-sidebar-open' : ''}`}>
      
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
  <div className="sheet-results-input-section">
    {/* <h1 className="sheet-results-title">Student Data Entry</h1> */}
    
    <form className="sheet-results-form" onSubmit={handleSubmit}>
      <div className="sheet-form-row">
        <div className="sheet-form-column">
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field1" className="sheet-form-label">Title 1:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field2" className="sheet-form-label">Title 2:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field3" className="sheet-form-label">Title 3:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field4" className="sheet-form-label">Title 4:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field5" className="sheet-form-label">Title 5:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field6" className="sheet-form-label">Title 6:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field7" className="sheet-form-label">Title 7:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field8" className="sheet-form-label">Title 8:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field9" className="sheet-form-label">Title 9:</label>
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <label htmlFor="field10" className="sheet-form-label">Title 10:</label>
          </div>
        </div>

        <div className="sheet-form-column">
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field1"
              className="sheet-form-input"
              value={formData.field1}
              onChange={(e) => setFormData({...formData, field1: e.target.value})}
              placeholder="Enter value for Title 1"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field2"
              className="sheet-form-input"
              value={formData.field2}
              onChange={(e) => setFormData({...formData, field2: e.target.value})}
              placeholder="Enter value for Title 2"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field3"
              className="sheet-form-input"
              value={formData.field3}
              onChange={(e) => setFormData({...formData, field3: e.target.value})}
              placeholder="Enter value for Title 3"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field4"
              className="sheet-form-input"
              value={formData.field4}
              onChange={(e) => setFormData({...formData, field4: e.target.value})}
              placeholder="Enter value for Title 4"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field5"
              className="sheet-form-input"
              value={formData.field5}
              onChange={(e) => setFormData({...formData, field5: e.target.value})}
              placeholder="Enter value for Title 5"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field6"
              className="sheet-form-input"
              value={formData.field6}
              onChange={(e) => setFormData({...formData, field6: e.target.value})}
              placeholder="Enter value for Title 6"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field7"
              className="sheet-form-input"
              value={formData.field7}
              onChange={(e) => setFormData({...formData, field7: e.target.value})}
              placeholder="Enter value for Title 7"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field8"
              className="sheet-form-input"
              value={formData.field8}
              onChange={(e) => setFormData({...formData, field8: e.target.value})}
              placeholder="Enter value for Title 8"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field9"
              className="sheet-form-input"
              value={formData.field9}
              onChange={(e) => setFormData({...formData, field9: e.target.value})}
              placeholder="Enter value for Title 9"
            />
          </div>
          <div className="sheet-form-group sheet-grid-cell">
            <input
              type="text"
              id="field10"
              className="sheet-form-input"
              value={formData.field10}
              onChange={(e) => setFormData({...formData, field10: e.target.value})}
              placeholder="Enter value for Title 10"
            />
          </div>
        </div>
      </div>

      <div className="sheet-submit-container">
        <button type="submit" className='button'  disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
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
            <>
           { renderContent()}
            </>
          )}
        </div>
      </main>
    </div>
    </>
  );
};

export default ResultsPage;