import productList from "../../asyncMock";
import { Link } from "react-router-dom";
import "./ItemListContainer.css"

function ItemListContainer() {
    return (
        <main>
            <h1 className="title-ilc">¡Musicalizate a tu mejor estilo!</h1>
            <div className="container container-products">
                {productList.map((prod) => {
                    return (
                        <article key={prod.id}  className="product-card">
                            <div className="container-img">
                                <img src={prod.image} alt={prod.description} className="img"/>
                            </div>
                            <h4 className="product-name">{prod.instrument}</h4>
                            <Link to={`/item/${prod.id}`} className="info-product">Ver producto</Link>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}

export default ItemListContainer;