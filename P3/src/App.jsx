function App() {
  const now = new Date();

  return (
    <div>
      <h2>Current Date and Time</h2>
      <p>Date: {now.toLocaleDateString()}</p>
      <p>Time: {now.toLocaleTimeString()}</p>
      <p>Khushboo T042</p>
    </div>
  );
}

export default App;