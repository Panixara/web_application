import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
