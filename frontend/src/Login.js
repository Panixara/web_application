import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
