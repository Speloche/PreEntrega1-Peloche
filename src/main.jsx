import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0YQPRbv647uv5n0BFt5cxQKsGnU0oi3M",
  authDomain: "tenisparatodos-47195.firebaseapp.com",
  projectId: "tenisparatodos-47195",
  storageBucket: "tenisparatodos-47195.appspot.com",
  messagingSenderId: "1077764860208",
  appId: "1:1077764860208:web:5a2b708c350d3e372180f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
