import React from 'react';
import './App.css'; // CSS file for styling
import photo1 from './photos/exploit.jpg'
import Header from './Header';
import Footer from './Footer'; // Import Footer component

const Activities = () => {
  return (
    <div>
          <Header />

      <div className="Activities-section">
        <div className="activities-grid">
        <div className="activity">
            <div className="activity-content">
            <a href="#">
              <img src={photo1} alt="Learn" />
            </a> 
              <div>
                <h1>IoT Exploitation</h1>
                <p>Exploit IoT devices to learn penetration testing and embedded system programming.</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Activities;
