import React from 'react';
import './App.css'; // CSS file for styling
import photo1 from './photos/exploit.jpg';
import Header from './Header';
import Footer from './Footer'; // Import Footer component

const Home = () => {
  return (
    <div>
      <Header />
      <div className="welcome-message">
        <h1>AREA 7 at Pima East Campus</h1>
      </div>
      <div className="about-makerspace">
        <h1>DEVELOP. HACK. MAKE.</h1>
        <div className="box-container">
          <p>
            AREA 7 at Pima East Campus IoT makerspace where devices, networking, hacking, and engineering collide!
            Created by the Pima IT TechEX Internship team, AREA 7 <br></br> is a hub for getting hands-on with the world of IoT.
          </p>
          <p>
            At AREA 7, all students can learn about IoT, collaborate on projects, and more through making. <br></br>By using state-of-the-art devices, laptops, and attempting the activities, students will have the chance to perform real-world work!
          </p>
        </div>
        <h1>WHAT CAN YOU DO AT AREA 7?</h1>
      </div>

      <div className="Activities-section">
        <div className="activities-grid">
          <div className="activity">
            <div className="activity-content">
              <a href="https://www.pima.edu">
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

export default Home;
