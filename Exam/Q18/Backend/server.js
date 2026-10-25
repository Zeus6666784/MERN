const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
});

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API is Running");
});

// GET API - Retrieve Students
app.get("/students", async (req, res) => {
    try {
        const students = await mongoose.connection.db
            .collection("students")
            .find()
            .toArray();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students"
        });
    }
});

// POST API - Add Student
app.post("/add", async (req, res) => {
    try {
        const student = {
            name: "Zeus",
            course: "Bsc IT",
            marks: 99
        };

        await mongoose.connection.db
            .collection("students")
            .insertOne(student);

        res.json("Data added successfully");
    } catch (error) {
        res.status(500).json({
            message: "Data not added",
            error: error.message
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});