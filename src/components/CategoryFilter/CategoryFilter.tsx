import { useState } from "react";
import { Product } from "../../types";
import "./CategoryFilter.scss";

type CategoryFilterProps = {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  products,
  setFilteredProducts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(category);
  };

  const filterProducts = (category: string) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="category-filter">
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
