type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

export type { Product };
export type { CartItem };
