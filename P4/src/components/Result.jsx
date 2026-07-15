import React from 'react';

const Result = () => {
  // Academic result data
  const totalMarks = 520;
  const maxMarks = 600;
  const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);

  // Calculate grade based on percentage
  let grade = 'F';
  const percentNum = parseFloat(percentage);
  if (percentNum >= 80) grade = 'A';
  else if (percentNum >= 70) grade = 'B';
  else if (percentNum >= 60) grade = 'C';
  else if (percentNum >= 50) grade = 'D';

  return (
    <div className="card">
      <h2 className="heading">Academic Result</h2>
      <div className="info">
        <div className="item">
          <span className="label">Total Marks :</span>
          <span className="value">{totalMarks}</span>
        </div>
        <div className="item">
          <span className="label">Maximum Marks :</span>
          <span className="value">{maxMarks}</span>
        </div>
        <div className="item">
          <span className="label">Percentage :</span>
          <span className="value">{percentage}%</span>
        </div>
        <div className="item">
          <span className="label">Grade :</span>
          <span className={`grade-${grade}`}>{grade}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;