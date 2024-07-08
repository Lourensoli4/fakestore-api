import "./Header.scss";
import { Product } from "../../types";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import { CartItem } from "../../types";

type HeaderProps = {
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
};

const Header = ({ cartItems, removeFromCart }: HeaderProps) => {
  return (
    <header>
      <h1>Fakey McFakeStore</h1>
      <Modal buttonText="Cart Items" buttonType="blue">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </Modal>
    </header>
  );
};

export default Header;
