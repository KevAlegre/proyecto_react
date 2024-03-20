import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {

  const {totalQuantity} = useContext(CartContext);
  return (
    <Link to="/cart" className="widget-container">
        <i className="fa-sharp fa-solid fa-cart-shopping fa-2xl"></i>
        <p className="cart-quantity">{totalQuantity()}</p>
    </Link>
  );
}

export default CartWidget;
