import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  //large product list (simulating heavy data)
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 5000 }
  ];

  //useMemo prevents recalculation on every re-render
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  //useCallback prevents function recreation on every render
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;

