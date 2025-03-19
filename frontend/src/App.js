import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'; // Assuming you have a Login component
import Dashboard from './Dashboard'; // Assuming you have a Dashboard component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulate a successful login
  };

  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        
        {/* Protected route for dashboard */}
        {isAuthenticated && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
        
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
