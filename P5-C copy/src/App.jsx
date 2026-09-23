import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Filter products dynamically by product name
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store">
      <h1>Product Store</h1>

      <input
        type="text"
        placeholder="Search product by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p className="price">
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
}

export default App;