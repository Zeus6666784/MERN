import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [books] = useState([
    {
      id: 1,
      name: "The Alchemist",
      author: "Paulo Coelho",
      rating: 8.5,
    },
    {
      id: 2,
      name: "Harry Potter",
      author: "J.K. Rowling",
      rating: 9.0,
    },
    {
      id: 3,
      name: "Atomic Habits",
      author: "James Clear",
      rating: 8.8,
    },
    {
      id: 4,
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 8.7,
    },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Alice Smith", email: "alice@example.com" },
    { id: 2, name: "Bob Jones", email: "bob@example.com" },
  ]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="card">
          <h2>Book Reading List</h2>

          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <p>
                <span className="label">Book Name:</span>
                <span className="value">{book.name}</span>
              </p>

              <p>
                <span className="label">Author:</span>
                <span className="value">{book.author}</span>
              </p>

              <p>
                <span className="label">Rating:</span>
                <span className="value">{book.rating}</span>
              </p>
            </div>
          ))}
        </div>

        <Counter />

        <UserForm onAddUser={addUser} />

        <UserList users={users} />

        <Footer />
      </div>
    </div>
  );
};

export default App;