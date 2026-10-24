# Implementation Plan --- College Canteen Pre-Order System

## Stage 1 --- Backend Setup

Create:

``` text
College-Canteen/
└── server.js
```

Run:

``` bash
npm init -y
npm install express mongoose cors
```

Create the Express server and MongoDB connection.

Test:

``` text
http://localhost:3000
```

Expected:

`College Canteen API is Running`

------------------------------------------------------------------------

## Stage 2 --- Food API

Implement:

``` text
GET /food
```

Test:

``` text
http://localhost:3000/food
```

Verify that five food items and prices are returned.

------------------------------------------------------------------------

## Stage 3 --- Orders API

Implement:

``` text
POST /orders
GET /orders
```

Test POST using Postman or the React frontend.

Test GET:

``` text
http://localhost:3000/orders
```

Verify orders are stored in the `orders` collection in
`CollegeCanteenDB`.

------------------------------------------------------------------------

## Stage 4 --- React Setup

Create:

``` bash
npm create vite@latest my-react
```

Select:

-   React
-   JavaScript
-   ESLint

Then:

``` bash
cd my-react
npm install
npm install axios
```

------------------------------------------------------------------------

## Stage 5 --- Food Display

Use Axios:

``` js
axios.get("http://localhost:3000/food")
```

Store the result in React state and display it in a table.

------------------------------------------------------------------------

## Stage 6 --- Student Order Form

Create controlled inputs for:

-   Student Name
-   Roll Number
-   Course
-   Food Item
-   Quantity

Add:

`Place Order`

button.

------------------------------------------------------------------------

## Stage 7 --- POST Order

When the button is clicked:

1.  Validate the fields.
2.  Find the selected food item.
3.  Read its price.
4.  Calculate total.
5.  Build the order object.
6.  Send it with Axios POST.
7.  Show success message.
8.  Clear the form.
9.  Refresh the order list.

------------------------------------------------------------------------

## Stage 8 --- Display Orders

Call:

``` js
axios.get("http://localhost:3000/orders")
```

Display:

  Student   Roll No   Course   Food     Quantity   Price   Total
  --------- --------- -------- ------ ---------- ------- -------

Refresh this list after a successful order.

------------------------------------------------------------------------

## Stage 9 --- Run

Terminal 1:

``` bash
node server.js
```

Terminal 2:

``` bash
cd my-react
npm run dev
```

------------------------------------------------------------------------

## Stage 10 --- Practical Testing Checklist

### Backend

-   [ ] `npm install` succeeds.
-   [ ] MongoDB is running.
-   [ ] `node server.js` starts successfully.
-   [ ] MongoDB connection succeeds.
-   [ ] `GET /` works.
-   [ ] `GET /food` works.
-   [ ] `GET /orders` works.
-   [ ] `POST /orders` works.

### Frontend

-   [ ] React starts with `npm run dev`.
-   [ ] Food list appears.
-   [ ] Order form appears.
-   [ ] Required fields are validated.
-   [ ] Food selection works.
-   [ ] Quantity works.
-   [ ] Place Order works.
-   [ ] Success message appears.
-   [ ] Form clears.
-   [ ] New order appears in table.
-   [ ] MongoDB contains the order.

## Practical Demonstration Sequence

For a college practical demonstration, show:

1.  Backend terminal.
2.  MongoDB connection success.
3.  `/food` response.
4.  React food list.
5.  Student order form.
6.  Enter student details.
7.  Select food and quantity.
8.  Click Place Order.
9.  Show success message.
10. Show order in React table.
11. Show stored document in MongoDB.
12. Show `/orders` response.

## Final MVP Definition

The project is complete when a student can:

``` text
View food
   ↓
Enter details
   ↓
Select food
   ↓
Enter quantity
   ↓
Place order
   ↓
MongoDB stores order
   ↓
Order appears in React table
```

Do not add extra functionality unless explicitly requested.
