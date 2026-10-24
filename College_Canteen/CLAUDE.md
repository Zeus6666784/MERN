# CLAUDE.md --- College Canteen Pre-Order System

## Project Context

This is a B.Sc. IT Practical 8 mini-project.

Project title: **College Canteen Pre-Order System**

The application is a small MERN-style web application that allows
students to view canteen food items, enter student details, select a
food item and quantity, place an order, store it in MongoDB, and view
placed orders.

The implementation should remain an MVP suitable for a college
practical. Do not introduce unnecessary enterprise features.

## Reference Implementation Style

Follow the same implementation style used in the Practical 8 manual:

-   Backend: Node.js + Express.js
-   Database: MongoDB
-   MongoDB access: Mongoose connection, with direct collection access
    through `mongoose.connection.db.collection(...)`
-   Frontend: React created with Vite
-   HTTP client: Axios
-   CORS: `cors`
-   JSON request parsing: `express.json()`
-   Backend port: `3000`
-   MongoDB URI: `mongodb://127.0.0.1:27017/CollegeCanteenDB`
-   Frontend and backend run in separate terminals.

Do not replace this approach with MongoDB Atlas, Prisma, Firebase, SQL,
TypeScript, Next.js, or another architecture unless explicitly
requested.

## Required APIs

### GET /food

Returns available food items and prices.

### POST /orders

Receives a new order and stores it in MongoDB.

### GET /orders

Returns all stored orders.

Use lowercase route names exactly as written above.

## Required UI

The React page must contain:

1.  Food Item List
2.  Student Order Form
3.  Place Order button
4.  Placed Order List/Table

Student fields:

-   Student Name
-   Roll Number
-   Course

Order fields:

-   Food Item
-   Quantity

The order should also store:

-   Food price
-   Calculated total

## MongoDB

Database:

`CollegeCanteenDB`

Collection:

`orders`

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

Food data may remain an in-memory array returned by `GET /food`; the
assignment only explicitly requires order details to be stored in
MongoDB.

## Coding Rules

-   Give complete runnable code when modifying a file.
-   Keep code beginner-friendly and practical-oriented.
-   Avoid unnecessary abstractions.
-   Keep the API flow easy to explain in a viva.
-   Validate required form fields before POST.
-   Convert quantity to a number.
-   Calculate total as `price * quantity`.
-   After successful POST, clear the form and refresh the order list.
-   Handle API errors with a simple message or `console.log`.
-   Keep backend and frontend API URLs consistent.
-   Never create `/Students` when the required route is `/students`; for
    this project the required routes are `/food` and `/orders`.

## Expected Run Commands

Backend:

``` bash
npm install express mongoose cors
node server.js
```

Frontend:

``` bash
npm install
npm install axios
npm run dev
```

Keep backend and frontend in separate terminals.

## Important Constraint

The goal is a working college practical MVP, not a production canteen
platform.

Do not add:

-   Login/authentication
-   Payment gateway
-   Admin dashboard
-   Order cancellation
-   Order status workflow
-   Cart system
-   Notifications
-   Deployment configuration
-   Complex database models

unless the user explicitly asks for them.

## How Claude Should Work

Before changing code:

1.  Inspect the existing project structure.
2.  Inspect `server.js`.
3.  Inspect `my-react/src/App.jsx` and relevant CSS.
4.  Preserve working functionality.
5.  Make the smallest required change.
6.  Explain exactly which files changed.
7.  Give commands to run and test the result.

When troubleshooting, check the common Practical 8 failure points first:

-   MongoDB is not running.
-   Backend is not running on port 3000.
-   React is calling the wrong API URL.
-   CORS is missing.
-   `express.json()` is missing.
-   Axios is not installed.
-   Route spelling/case does not match.
-   MongoDB database/collection connection is unavailable.
