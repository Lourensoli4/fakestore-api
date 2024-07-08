import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Product } from "../../types";
import "./StoreProducts.scss";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const StoreProducts = ({
  addToCart,
}: {
  addToCart: (product: Product) => void;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <CategoryFilter
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="store-products__cards-container">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default StoreProducts;
