# API and Database Specification

## Backend Configuration

Server:

`http://localhost:3000`

MongoDB:

`mongodb://127.0.0.1:27017/CollegeCanteenDB`

Collection:

`orders`

## API Flow

``` text
React
  |
  | GET /food
  v
Express
  |
  v
Food array
  |
  v
React Food List

React
  |
  | POST /orders
  v
Express
  |
  | insertOne(order)
  v
MongoDB: orders

React
  |
  | GET /orders
  v
Express
  |
  | find().toArray()
  v
MongoDB
  |
  v
React Order Table
```

## Server Implementation Pattern

Use:

``` js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/CollegeCanteenDB")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed");
    console.log(error);
  });
```

## GET /food

For the MVP, food can be defined as a static array:

``` js
const foodItems = [
  {
    id: 1,
    name: "Vada Pav",
    price: 20
  },
  {
    id: 2,
    name: "Samosa",
    price: 15
  },
  {
    id: 3,
    name: "Veg Sandwich",
    price: 40
  },
  {
    id: 4,
    name: "Masala Maggi",
    price: 50
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: 60
  }
];

app.get("/food", (req, res) => {
  res.json(foodItems);
});
```

## POST /orders

Use the Practical 8 direct collection approach:

``` js
app.post("/orders", async (req, res) => {
  try {
    const order = req.body;

    await mongoose.connection.db
      .collection("orders")
      .insertOne(order);

    res.json({
      message: "Order placed successfully",
      order: order
    });
  } catch (error) {
    res.status(500).json({
      message: "Error placing order"
    });
  }
});
```

## GET /orders

``` js
app.get("/orders", async (req, res) => {
  try {
    const orders = await mongoose.connection.db
      .collection("orders")
      .find()
      .toArray();

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching orders"
    });
  }
});
```

## React API Calls

Get food:

``` js
axios.get("http://localhost:3000/food")
```

Get orders:

``` js
axios.get("http://localhost:3000/orders")
```

Create order:

``` js
axios.post("http://localhost:3000/orders", newOrder)
```

## Order Calculation

When a food item is selected:

``` js
const food = foodItems.find(
  (item) => item.name === selectedFood
);
```

Create the order:

``` js
const newOrder = {
  studentName: studentName,
  rollNo: rollNo,
  course: course,
  foodName: food.name,
  quantity: Number(quantity),
  price: food.price,
  total: food.price * Number(quantity)
};
```

## Data Integrity Rules

-   `studentName` must not be empty.
-   `rollNo` must not be empty.
-   `course` must not be empty.
-   A food item must be selected.
-   Quantity must be at least 1.
-   Quantity must be stored as a number.
-   Price comes from the selected food item.
-   Total is calculated by the frontend as `price × quantity`.
