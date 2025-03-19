import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // นำเข้า App จากไฟล์ App.js


// เรียกใช้ ReactDOM เพื่อแสดงผลที่ root div ใน index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
