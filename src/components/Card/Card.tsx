import "./Card.scss";
import { Product } from "../../types";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";

type CardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const Card = ({ product, addToCart }: CardProps) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={product.image} alt={product.title} />
        <p className="card__category">{product.category}</p>
      </div>
      <div className="card__copy-container">
        <Tooltip text={product.title}>
          <strong>{product.title}</strong>
        </Tooltip>
        <Modal
          buttonText="Read Description"
          buttonType="beige"
          headingText={product.title}
        >
          <h3>{product.category}</h3>
          <div className="card__description">
            <p>{product.description}</p>
          </div>
        </Modal>
        <p>Price: ${product.price}</p>
        <Button type="blue" onClick={() => addToCart(product)}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
