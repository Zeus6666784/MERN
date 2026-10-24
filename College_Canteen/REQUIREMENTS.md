# College Canteen Pre-Order System --- Requirements

## 1. Objective

Develop a web-based College Canteen Pre-Order System for a college
practical.

The system must allow students to:

1.  View available food items and prices.
2.  Enter student details.
3.  Select a food item.
4.  Enter quantity.
5.  Place an order through a POST API.
6.  Store order details in MongoDB.
7.  Retrieve and display placed orders through a GET API.

## 2. Technology Stack

  Layer             Technology
  ----------------- ----------------------
  Frontend          React
  Build Tool        Vite
  HTTP Client       Axios
  Backend           Node.js
  API Framework     Express.js
  Database          MongoDB
  MongoDB Library   Mongoose
  Middleware        CORS, express.json()

## 3. Functional Requirements

### Food

The application must display available food items with prices.

MVP food items:

    ID Food             Price
  ---- -------------- -------
     1 Vada Pav           ₹20
     2 Samosa             ₹15
     3 Veg Sandwich       ₹40
     4 Masala Maggi       ₹50
     5 Cold Coffee        ₹60

### Student Details

The form must collect:

-   Student Name
-   Roll Number
-   Course

### Order Details

The form must collect:

-   Food Item
-   Quantity

The application must calculate:

`total = price × quantity`

### Order Storage

Each order must be stored in MongoDB.

Suggested document:

``` json
{
  "studentName": "Zeus",
  "rollNo": "T048",
  "course": "B.Sc. IT",
  "foodName": "Vada Pav",
  "quantity": 2,
  "price": 20,
  "total": 40
}
```

## 4. API Requirements

### GET /food

Purpose: retrieve available food items.

Example response:

``` json
[
  {
    "id": 1,
    "name": "Vada Pav",
    "price": 20
  }
]
```

### POST /orders

Purpose: add a new food order.

Example request:

``` json
{
  "studentName": "Zeus",
  "rollNo": "T048",
  "course": "B.Sc. IT",
  "foodName": "Vada Pav",
  "quantity": 2,
  "price": 20,
  "total": 40
}
```

Example success response:

``` json
{
  "message": "Order placed successfully",
  "order": {
    "studentName": "Zeus",
    "rollNo": "T048",
    "course": "B.Sc. IT",
    "foodName": "Vada Pav",
    "quantity": 2,
    "price": 20,
    "total": 40
  }
}
```

### GET /orders

Purpose: retrieve all stored orders.

Example response:

``` json
[
  {
    "_id": "...",
    "studentName": "Zeus",
    "rollNo": "T048",
    "course": "B.Sc. IT",
    "foodName": "Vada Pav",
    "quantity": 2,
    "price": 20,
    "total": 40
  }
]
```

## 5. UI Requirements

The final page must contain:

-   College Canteen Pre-Order System heading
-   Available Food Items table
-   Student Order Form
-   Place Order button
-   Placed Orders table

The order table should display:

-   Student
-   Roll No
-   Course
-   Food
-   Quantity
-   Price
-   Total

## 6. Non-Requirements

The MVP does not require:

-   Authentication
-   Payments
-   Admin panel
-   Order status
-   Cart
-   Notifications
-   Online deployment
-   User accounts
