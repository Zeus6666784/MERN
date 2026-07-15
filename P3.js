function calculate(product, quantity, price) {
    let total = quantity * price;
    let gst = total * 18 / 100;
    let finalAmount = total + gst;

    console.log("Product:", product);
    console.log("Quantity:", quantity);
    console.log("Price:", price);
    console.log("Total:", total);
    console.log("GST:", gst);
    console.log("Final Amount:", finalAmount);
}

calculate("Book", 5, 100);
console.log("Lavkush T048");
