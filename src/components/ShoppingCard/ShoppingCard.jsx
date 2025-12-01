import { useContext, useState } from "react";
import CardsInfo from "../CardsGrid/CardsInfo";
import "./ShoppingCard.css";
import { Link } from "react-router-dom";
import { cartContext } from "../context";

function ShoppingCard() {
  const [quantities, setQuantities] = useState({});
  const { cartItems, setCartItems } = useContext(cartContext);
  console.log(cartItems);
  function addToCard(id) {
    const quantity = Number(quantities[id]) || 1;

    setCartItems((prev) =>
      prev.some((item) => item.id === id)
        ? prev.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { id, quantity }]
    );

    quantities[id] = "";
  }

  function handleQuantityChange(id, val) {
    setQuantities((prev) => ({
      ...prev,
      [id]: val, // or Number(val) if you want numeric type
    }));
  }

  return (
    <div className="cardsGrid">
      {CardsInfo.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt="card" />
          <div className="info">
            <h2>{card.title}</h2>
            <p>{card.description}</p>

            <button onClick={() => addToCard(card.id)}>Add to cart</button>

            <input
              type="number"
              value={quantities[card.id] ?? ""}
              onChange={(e) => handleQuantityChange(card.id, e.target.value)}
            />
          </div>
        </div>
      ))}
      <Link to="/cart">cart</Link>
    </div>
  );
}

export default ShoppingCard;
