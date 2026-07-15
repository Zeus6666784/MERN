import React from 'react';

const Student = () => {
  // Student data
  const studentData = {
    name: 'Rahul Patil',
    rollNo: '21',
    branch: 'Information Technology',
    semester: 'VI',
    cgpa: '8.65'
  };

  return (
    <div className="card">
      <h2 className="heading">Student Details</h2>
      <div className="info">
        <div className="item">
          <span className="label">Name :</span>
          <span className="value">{studentData.name}</span>
        </div>
        <div className="item">
          <span className="label">Roll No :</span>
          <span className="value">{studentData.rollNo}</span>
        </div>
        <div className="item">
          <span className="label">Branch :</span>
          <span className="value">{studentData.branch}</span>
        </div>
        <div className="item">
          <span className="label">Semester :</span>
          <span className="value">{studentData.semester}</span>
        </div>
        <div className="item">
          <span className="label">CGPA :</span>
          <span className="value">{studentData.cgpa}</span>
        </div>
      </div>
    </div>
  );
};

export default Student;