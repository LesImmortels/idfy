import React from 'react';
import ReactDOM from 'react-dom/client';
import QR from './components/qr';
import './index.css';
import Home from "./screens/home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <QR></QR>
  </React.StrictMode>
);
