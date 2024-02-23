import { useParams } from "react-router-dom";
import productList from "../../asyncMock";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {

    const {id} = useParams();
    const item = productList.find((prod) => prod.id === id);
    const {instrument, category, price, description, image} = item;

    return (
        <main className="main-idc">
            <div className="container">
                <article >
                    <h1 className="title-idc">{instrument}</h1>
                    <h4 className="subtitle-idc">Categoría: {category}</h4>
                    <div className="container-info-idc">
                        <div>
                            <img src={image} alt={description} className="img-idc"/>
                        </div>
                        <div>
                            <p className="description-idc">{description}</p>
                            <ItemCount price={price}/>
                        </div>
                    </div> 
                </article>
            </div>
        </main>
    );
};

export default ItemDetailContainer;