import { useState } from "react";
import TestProductPage from "./TestProduct";

const productInitialData = {
  title: "iPhone 15 pro",
  description: "Ami kinte parbo na karon ami gorib",
  price: 200000,
  isInCart: true,
};

export default function Test4() {
  const [product, setProduct] = useState(productInitialData);

  const handleAddToCart = (product) => {
    setProduct({ ...product, isInCart: true });
  };

  return (
    <div>
      <TestProductPage product={product} addToCart={handleAddToCart} />
    </div>
  );
}
