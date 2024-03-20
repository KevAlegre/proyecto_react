import "../Cart/Cart.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export default function CartItem({ id, instrument, price, image, quantity }) {

    const {removeItem} = useContext(CartContext);

  return (
    <div key={id} className="cart-item-container">
      <img className="cart-item-img" src={image} />
        <div className="cart-item-format col-2">
          <h4>Instrumento</h4>
          <h5>{instrument}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Cantidad</h4>
          <h5>{quantity}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Precio unitario</h4>
          <h5>{price}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Subtotal</h4>
          <h5>{price * quantity}</h5>
        </div>

      <button onClick={() => removeItem(id)} className="cart-item-remove">X</button>
    </div>
  );
}
