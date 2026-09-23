const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
    .then(async () => {
        console.log("MongoDB Connected Successfully");

        const students = await mongoose.connection.db
            .collection("students")
            .find()
            .toArray();

        console.log(students);
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error);
    });