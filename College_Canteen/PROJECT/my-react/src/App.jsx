import { useEffect, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import Lenis from "lenis";
import "./App.css";

function App() {
    const [foodItems, setFoodItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [formData, setFormData] = useState({
        studentName: "",
        rollNo: "",
        course: "",
        foodName: "",
        quantity: 1,
    });
    const [selectedFood, setSelectedFood] = useState(null);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Use a small timeout to ensure the DOM is fully rendered and styles applied
        const timer = setTimeout(() => {
            gsap.from(".hero-content", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(".food-card", {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(".order-card", {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.4
            });
        }, 100);

        return () => {
            lenis.destroy();
            clearTimeout(timer);
        };
    }, []);

    const fetchFood = async () => {
        try {
            const res = await axios.get("http://localhost:3000/food");
            setFoodItems(res.data);
        } catch (err) {
            console.error("Error fetching food:", err);
        }
    };

    const fetchOrders = async () => {
        try {
            const res = await axios.get("http://localhost:3000/orders");
            setOrders(res.data);
        } catch (err) {
            console.error("Error fetching orders:", err);
        }
    };

    useEffect(() => {
        fetchFood();
        fetchOrders();
    }, []);

    const handleFoodSelect = (food) => {
        setSelectedFood(food);
        setFormData({ ...formData, foodName: food.name });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const placeOrder = async () => {
        if (!formData.studentName || !formData.rollNo || !formData.course || !formData.foodName) {
            alert("Please fill all student details and select food!");
            return;
        }

        const price = selectedFood.price;
        const total = price * Number(formData.quantity);

        const orderPayload = {
            ...formData,
            quantity: Number(formData.quantity),
            price: price,
            total: total
        };

        try {
            const res = await axios.post("http://localhost:3000/orders", orderPayload);
            alert(res.data.message);
            setFormData({ studentName: "", rollNo: "", course: "", foodName: "", quantity: 1 });
            setSelectedFood(null);
            fetchOrders();
        } catch (err) {
            console.error("Order failed:", err);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="background-effects">
                <div className="grid-overlay"></div>
                <div className="glow-blob"></div>
            </div>

            <div className="main-container">
                <header className="hero-content">
                    <div className="eyebrow">MVLU CANTEEN • CAMPUS ORDERING</div>
                    <h1>Quick <span className="gradient-text">Pre-Order</span></h1>
                    <p>Skip the queue. Order your favorite campus treats in seconds.</p>
                </header>

                <div className="dashboard-grid">
                    <div className="left-column">
                        <section className="menu-section">
                            <div className="section-title">
                                <h2>Menu</h2>
                                <div className="divider"></div>
                            </div>
                            <div className="food-grid">
                                {foodItems.map((food, idx) => (
                                    <div
                                        key={idx}
                                        className={`food-card ${selectedFood?.name === food.name ? 'selected' : ''}`}
                                        onClick={() => handleFoodSelect(food)}
                                    >
                                        <div className="food-emoji"> {getEmoji(food.name)} </div>
                                        <div className="food-info">
                                            <h3>{food.name}</h3>
                                            <p className="price">₹{food.price}</p>
                                        </div>
                                        <div className="check-icon">✓</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="orders-section">
                            <div className="section-title">
                                <h2>Live Orders</h2>
                                <div className="divider"></div>
                            </div>
                            {orders.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">📋</div>
                                    <p>No orders placed yet. Be the first!</p>
                                </div>
                            ) : (
                                <div className="table-wrapper">
                                    <table className="orders-table">
                                        <thead>
                                            <tr>
                                                <th>Student</th>
                                                <th>Roll No</th>
                                                <th>Item</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, idx) => (
                                                <tr key={idx}>
                                                    <td className="student-name">{order.studentName}</td>
                                                    <td>{order.rollNo}</td>
                                                    <td><span className="item-badge">{order.foodName}</span></td>
                                                    <td>{order.quantity}</td>
                                                    <td className="total-amount">₹{order.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    </div>

                    <aside className="right-column">
                        <div className="order-card">
                            <div className="card-header">
                                <h2>Order Details</h2>
                                <p>Enter your info to proceed</p>
                            </div>

                            <div className="form-fields">
                                <div className="input-group">
                                    <label>Student Name</label>
                                    <input
                                        name="studentName"
                                        value={formData.studentName}
                                        onChange={handleInputChange}
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Roll Number</label>
                                    <input
                                        name="rollNo"
                                        value={formData.rollNo}
                                        onChange={handleInputChange}
                                        placeholder="e.g. T101"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Course</label>
                                    <input
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        placeholder="e.g. B.Sc IT"
                                    />
                                </div>
                            </div>

                            <div className="selection-summary">
                                <div className="summary-item">
                                    <label>Selected Item</label>
                                    <div className="summary-value">
                                        {selectedFood ? selectedFood.name : "Select from menu"}
                                    </div>
                                </div>

                                {selectedFood && (
                                    <div className="summary-row">
                                        <div className="summary-item">
                                            <label>Unit Price</label>
                                            <div className="summary-value">₹{selectedFood.price}</div>
                                        </div>
                                        <div className="summary-item">
                                            <label>Quantity</label>
                                            <div className="qty-picker">
                                                <button onClick={() => setFormData({...formData, quantity: Math.max(1, formData.quantity - 1)})}>−</button>
                                                <span>{formData.quantity}</span>
                                                <button onClick={() => setFormData({...formData, quantity: formData.quantity + 1})}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="final-total">
                                <span>Estimated Total</span>
                                <span className="amount">
                                    ₹{selectedFood ? selectedFood.price * formData.quantity : 0}
                                </span>
                            </div>

                            <button className="submit-btn" onClick={placeOrder}>
                                <span>Confirm Order</span>
                                <div className="btn-glow"></div>
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function getEmoji(name) {
    const map = {
        "Vada Pav": "🍔",
        "Samosa": "🥟",
        "Tea": "☕",
        "Coffee": "🥤",
        " Sandwich": "🥪",
        "Poha": "🍛"
    };
    return map[name] || "🍱";
}

export default App;
