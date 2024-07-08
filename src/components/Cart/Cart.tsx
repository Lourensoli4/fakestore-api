import "./Cart.scss";
import Button from "../Button/Button";
import { CartItem } from "../../types";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

type CartProps = {
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
};

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  const handleRemoveClick = (productId: number) => {
    removeFromCart(productId);
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="cart">Your cart is empty</div>;
  }

  const showAlert = () => {
    alert("Checkout functionality is not available yet");
  };

  return (
    <div className="cart">
      <h2>Items In Cart:</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <p>
              {cartItem.product.title} - ${cartItem.product.price}
            </p>
            <div className="cart__quantity-remove">
              <p>Quantity: {cartItem.quantity}</p>
              <Button
                type="red-close"
                onClick={() => handleRemoveClick(cartItem.product.id)}
              >
                <CloseIcon />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart__checkout">
          <Button type="blue" onClick={showAlert}>
            Go To Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
