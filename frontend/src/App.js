// App.js
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar/Navbar';
import Home from './components/Navbar/Home/Home';
import Companies from './components/Navbar/Companies/Companies';
import About from './components/Navbar/About/About';
import Contact from './components/Navbar/Contact/Contact';
import Signup from './components/Navbar/Signup/Signup';
import SignIn from './components/Navbar/Sign in/Signin';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
