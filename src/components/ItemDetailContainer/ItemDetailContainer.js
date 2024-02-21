import { useParams } from "react-router-dom";
import productList from "../../asyncMock";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {

    const {id} = useParams();
    const item = productList.find((prod) => prod.id === id);
    const {instrument, category, price, description, image} = item;

    return (
        <main>
            <h1 className="title-idc">{instrument}</h1>
            <h4 className="subtitle">Categoría: {category}</h4>
            <div>
                <img src={image} alt={description}/>
                <p>{description}</p>
            </div> 
        </main>
    );
};

export default ItemDetailContainer;