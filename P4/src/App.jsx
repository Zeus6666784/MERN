import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Result from './components/Result';
import Attendance from './components/Attendance';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com' }
  ]);

  const addUser = (user) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Student name="Lavkush Vishwakarma" rollNo="48" branch="Information Technology" semester="VI" cgpa="9.99" />
        <Attendance />
        <Result />
        <Counter />
        <UserForm onAddUser={addUser} />
        <UserList users={users} />
        <Footer />
      </div>
    </div>
  );
};

export default App;