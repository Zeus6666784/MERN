import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Math', 'Science', 'English']);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="card">
      <h2 className="heading">Item List</h2>
      <div className="info">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;