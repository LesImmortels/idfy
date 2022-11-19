import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from "react";
import QR from './components/qr';

/*

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);*/

function App() {
  return (
    <QR></QR>
  );
}

export default App;