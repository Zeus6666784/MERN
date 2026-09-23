import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 4px',
  };

  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="info">
        <span className="value">{count}</span>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <button onClick={() => setCount(count + 1)} style={buttonStyle}>
            +
          </button>
          <button onClick={() => setCount(count - 1)} style={buttonStyle}>
            -
          </button>
          <button onClick={() => setCount(0)} style={buttonStyle}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;