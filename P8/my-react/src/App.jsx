import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";

function App() {
    const [students, setStudents] = useState([]);
    const [rollNo, setRollNo] = useState("");
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [marks, setMarks] = useState("");

    useEffect(() => {
        // Smooth Scrolling
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Initial animations
        gsap.from(".glass-card", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            clearProps: "all"
        });

        return () => lenis.destroy();
    }, []);

    const getStudents = () => {
        axios
            .get("http://localhost:3000/students")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getStudents();
    }, []);

    const addStudent = () => {
        const newStudent = {
            rollNo: Number(rollNo),
            name: name,
            course: course,
            marks: Number(marks)
        };

        axios
            .post("http://localhost:3000/students", newStudent)
            .then((response) => {
                alert(response.data.message);
                setRollNo("");
                setName("");
                setCourse("");
                setMarks("");
                getStudents();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="app-container">
            <h1>Student Management System</h1>

            <div className="glass-card">
                <h2>Add New Student</h2>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Roll No"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                    />
                </div>
                <button onClick={addStudent}>Add Student</button>
            </div>

            <div className="glass-card">
                <h2>Student List</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.rollNo}</td>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td>{student.marks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
