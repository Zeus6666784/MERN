const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/CollegeDB")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error);
    });

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API is Running");
});

// GET API - Retrieve Students
app.get("/Students", async (req, res) => {
    try {
        const Students = await mongoose.connection.db
            .collection("Students")
            .find()
            .toArray();

        res.json(Students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Students"
        });
    }
});

// POST API - Add Student
app.post("/Students", async (req, res) => {
    try {
        const student = req.body;

        await mongoose.connection.db
            .collection("Students")
            .insertOne(student);

        res.json({
            message: "Student added successfully",
            student: student
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding student"
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});