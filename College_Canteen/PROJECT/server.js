const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/CollegeCanteenDB")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error);
    });

// Food data - in-memory array as per requirement
const foodItems = [
    { name: "Vada Pav", price: 20 },
    { name: "Samosa", price: 15 },
    { name: "Tea", price: 10 },
    { name: "Coffee", price: 15 },
    { name: " Sandwich", price: 30 },
    { name: "Poha", price: 20 },
];

// GET /food - Available food items
app.get("/food", (req, res) => {
    res.json(foodItems);
});

// POST /orders - Store new order
app.post("/orders", async (req, res) => {
    try {
        const order = req.body;
        await mongoose.connection.db.collection("orders").insertOne(order);
        res.json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: "Error placing order" });
    }
});

// GET /orders - Retrieve all orders
app.get("/orders", async (req, res) => {
    try {
        const orders = await mongoose.connection.db.collection("orders").find().toArray();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
