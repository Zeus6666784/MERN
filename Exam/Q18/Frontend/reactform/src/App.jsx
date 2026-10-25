
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [marks, setMarks] = useState('');

    const getStudents = () => {
        axios.get('http://localhost:5000/students')
            .then(res => setStudents(res.data));
    };

    const addStudent = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/add', {
            name, course, marks: Number(marks)
        }).then(() => {
            getStudents();
            setName('');
            setCourse('');
            setMarks('');
        });
    };

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div>
            <h2>Student Management</h2>

            <form onSubmit={addStudent}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <input
                    placeholder="Course"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Marks"
                    value={marks}
                    onChange={e => setMarks(e.target.value)}
                    required
                />

                <button type="submit">Add Student</button>
            </form>

            <h3>Student List</h3>

            {students.map(student => (
                <p key={student._id}>
                    {student.name} - {student.course} - {student.marks}
                </p>
            ))}
        </div>
    );
}

export default App;