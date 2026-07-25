function PlacementStats() {

  const total = 180;
  const placed = 142;
  const remaining = total - placed;
  const percentage = (placed / total) * 100;

  return (
    <div className="section">
      <h2>Placement Statistics</h2>

      <p>Total Students : {total}</p>
      <p>Placed Students : {placed}</p>
      <p>Remaining Students : {remaining}</p>
      <p>Placement Percentage : {percentage.toFixed(2)}%</p>

      <hr />
    </div>
  );
}

export default PlacementStats;