import { useState } from "react";
import "./App.scss";
import "./variables.scss";
import StoreProducts from "./components/StoreProducts/StoreProducts";
import Header from "./components/Header/Header";
import { Product } from "./types";
import Toast from "./components/Toast/Toast";

type CartItem = {
  product: Product;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const addToCart = (product: Product) => {
    const existingCartItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }

    setToastMessage(`Added ${product.title} to cart!`);
    setToastType("success");
    setShowToast(true);
  };

  const removeFromCart = (productId: number) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.product.id === productId
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingCartItemIndex].quantity === 1) {
        updatedCart.splice(existingCartItemIndex, 1);
      } else {
        updatedCart[existingCartItemIndex].quantity -= 1;
      }
      setCart(updatedCart);
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="App">
      <Header cartItems={cart} removeFromCart={removeFromCart} />
      {showToast && (
        <Toast message={toastMessage} type={toastType} onClose={closeToast} />
      )}
      <StoreProducts addToCart={addToCart} />
    </div>
  );
}

export default App;
