import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context";
import CardsInfo from "../CardsGrid/CardsInfo";

function Card() {
  const { cartItems, setCartItems } = useContext(cartContext);

  let [cart, setCart] = useState([]);
  useEffect(() => {
    const fullCart = CardsInfo.filter((info) =>
      cartItems.some((item) => item.id === info.id)
    ).map((info) => {
      const cartItem = cartItems.find((item) => item.id === info.id);
      return { ...info, quantity: cartItem.quantity };
    });

    setCart(fullCart);
  }, [cartItems]);

  function updateQuantity(id, newQty) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQty) } : item
      )
    );
  }

  console.log(cartItems);
  return (
    <div className="cardsGrid">
      {cart.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt="card" />
          <div className="info">
            <h2>{card.title}</h2>
            <p>{card.description}</p>

            <button>Add to cart</button>

            <input
              type="number"
              value={card.quantity}
              onChange={(e) => updateQuantity(card.id, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
