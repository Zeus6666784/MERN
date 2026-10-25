
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/students")
            .then(res => setStudents(res.data));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s => (
                        <tr key={s._id}>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>{s.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
