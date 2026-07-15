import React from 'react';

const Attendance = () => {
  // Attendance data
  const attendance = {
    percentage: 88,
    minimum: 75
  };

  // Calculate eligibility
  const isEligible = attendance.percentage >= attendance.minimum;

  return (
    <div className="card">
      <h2 className="heading">Attendance</h2>
      <div className="info">
        <div className="item">
          <span className="label">Attendance :</span>
          <span className="value">{attendance.percentage}%</span>
        </div>
        <div className="item">
          <span className="label">Minimum Attendance :</span>
          <span className="value">{attendance.minimum}%</span>
        </div>
        <div className="item">
          <span className="label">Status :</span>
          <span className={isEligible ? 'status-eligible' : 'status-not-eligible'}>
            {isEligible ? 'Eligible' : 'Not Eligible'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Attendance;