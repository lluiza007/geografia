// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import StateInfo from './components/StateInfo'; // Páginas de estados
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/estado/:stateName" element={<StateInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
