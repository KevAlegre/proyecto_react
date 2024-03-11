import { useState } from "react";
import "./ItemQuantitySelector.css";
import AddItemButton from "../AddItemButton/AddItemButton";

export default function ItemQuantitySelector( { price } ) {

    const [count, setCount] = useState(0);

    function handleClickAdd() {
        setCount(count + 1);
    };

    function handleClickSubstract() {
        count > 0 && setCount( count - 1 )
    }

    return (
        <div className="container-item-count">
            <p>Total: ${price * count} USD</p>
            <div className="container-count-buttons">
                <button onClick={handleClickSubstract} className="count-button">-</button>
                <p className="count-number">{count}</p>
                <button onClick={handleClickAdd} className="count-button">+</button>
            </div>
            <AddItemButton/>
        </div>
    );
};