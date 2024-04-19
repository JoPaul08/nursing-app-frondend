
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Route to Register component */}
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
