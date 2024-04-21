import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import VitalSignsForm from './components/VitalSignsForm';
import PatientInfoForm from './components/PatientInfoForm';
import SymptomChecklistForm from './components/SymptomChecklistForm';
import ClinicalVisitDetails from './components/ClinicalVisitDetails'; // Import the component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/vital-signs" element={<VitalSignsForm />} />
        <Route path="/info" element={<PatientInfoForm />} />
        <Route path="/Symptom" element={<SymptomChecklistForm />} />
        <Route path="/clinical-visit" element={<ClinicalVisitDetails />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;



