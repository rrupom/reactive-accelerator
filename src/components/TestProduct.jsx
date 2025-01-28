import { useState } from "react";

export default function TestProductPage({ product, addToCart }) {
  const [notificationMessage, setNotificationMessage] = useState(null);

  const buyProduct = () => {
    addToCart(product);
    showNotification(`Added ${product?.title} to the shopping cart!`);
  };

  const handleBuyClick = () => {
    buyProduct();
  };

  const handleCheckoutClick = () => {
    buyProduct();
    navigateTo("/checkout");
  };

  const navigateTo = (url) => {
    console.log(`Asssume that we have navigated to ${url}`);
  };

  const showNotification = (msg) => {
    setNotificationMessage(msg);
  };

  return (
    <div>
      <div className="product">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <h1>{product?.price.toFixed(2)}</h1>
        <div>
          <button onClick={handleBuyClick}>Buy Now</button>
          <button onClick={handleCheckoutClick}>Checkout</button>
        </div>
      </div>
      <div>
        {notificationMessage && (
          <div
            className="notification"
            onClick={() => setNotificationMessage(null)}
          >
            <span>{notificationMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
