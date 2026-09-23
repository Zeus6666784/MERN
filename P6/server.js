const express = require("express");

const app = express();

const PORT = 4000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>MVLU College Management Server</h1>
        <p>Welcome to MVLU College website.</p>
    `);
});

// Students Route
app.get("/students", (req, res) => {
    res.send(`
        <h1>Student List</h1>
        <ul>
            <li>Zeus</li>
            <li>Lavkush Vishwakarma</li>
            <li>Omkar Thakural</li>
            <li>Aditya Sharma</li>
        </ul>
    `);
});

// Faculty Route
app.get("/faculty", (req, res) => {
    res.send(`
        <h1>Faculty List</h1>
        <ul>
            <li>Priya Deshmukh - Information Technology</li>
            <li>Rajesh Kulkarni - Computer Science</li>
            <li>Anita Joshi - Information Technology</li>
            <li>Vivek Patil - Computer Science</li>
        </ul>
    `);
});

// Courses Route
app.get("/courses", (req, res) => {
    res.send(`
        <h1>Available Courses</h1>
        <ul>
            <li>B.Sc. Information Technology</li>
            <li>B.Sc. Computer Science</li>
            <li>B.Com. Information Technology</li>
            <li>B.A. Multimedia and Mass Communication</li>
        </ul>
    `);
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Email: info@mvlucollege.in</p>
        <p>Phone: 9123456780</p>
        <p>Address: Andheri East, Mumbai</p>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});