import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import VitalSignsForm from './components/VitalSignsForm';
import PatientInfoForm from './components/PatientInfoForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />  // Signup remains the entry point
        <Route path="/login" element={<Login />} />
        <Route path="/vital-signs" element={<VitalSignsForm />} />
        <Route path="/info" element={<PatientInfoForm />} />
      </Routes>
    </Router>
  );
}

export default App;


