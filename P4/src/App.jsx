import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Result from './components/Result';
import Attendance from './components/Attendance';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Student />
        <Attendance />
        <Result />
        <Footer />
      </div>
    </div>
  );
};

export default App;