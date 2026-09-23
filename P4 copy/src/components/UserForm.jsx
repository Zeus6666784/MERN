import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const newUser = { id: Date.now(), name: name.trim(), email: email.trim() };
    onAddUser(newUser);
    setSubmitted(newUser);
    setName('');
    setEmail('');
  };

  return (
    <div className="card">
      <h2>User Form</h2>
      <div className="info">
        <form onSubmit={handleSubmit}>
          <div className="item">
            <span className="label">Name :</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="item">
            <span className="label">Email :</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <button type="submit" style={{ padding: '6px 12px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
        {submitted && (
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
            <h3>Submitted Data:</h3>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;