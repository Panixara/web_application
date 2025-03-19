import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';  // Your login component
import Dashboard from './Dashboard/Dashboard';  // Your Dashboard component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);  // Set authentication state to true on successful login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}  // Redirect to login if not authenticated
        />
      </Routes>
    </Router>
  );
};

export default App;
