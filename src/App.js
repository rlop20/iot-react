// src/App.js

import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Activities from './Activities'; // Import the Activities component
import Footer from './Footer'; // Import Footer component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/Home.js" element={<Home />} />
          <Route path="/Activities.js" element={<Activities />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
