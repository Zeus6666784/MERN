import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="card">
      <h2>User List</h2>
      <div className="info">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;