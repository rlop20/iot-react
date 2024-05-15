// src/App.js

import React from 'react';
import './App.css';
import Home from './Home';
import Activities from './Activities'; // Import the Activities component
import Research from './Research';
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
          {/* <Route exact path="/Home.js" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Activities.js" element={<Activities />} />
          <Route path="/Research.js" element={<Research />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
