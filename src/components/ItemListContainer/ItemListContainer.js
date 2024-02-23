import { getProducts, getProductsByCategory } from "../../asyncMock";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemListContainer.css"

function ItemListContainer() {

    const {category} = useParams(); 
    const [products, setProducts] = useState([]);

    // Me quedé aca por hacer las rutas del category
    useEffect(() => {
        const asyncFunc = category ? getProductsByCategory : getProducts

        asyncFunc(category)
            .then(res => setProducts(res))
            .catch(error => console.error(error));
    }, [category]);

    return (
        <main>
            <h1 className="title-ilc">¡Musicalizate a tu mejor estilo!</h1>
            <div className="container container-products-ilc">
                {products.map((prod) => {
                    return (
                        <article key={prod.id}  className="product-card-ilc">
                            <div className="container-img-ilc">
                                <img src={prod.image} alt={prod.description} className="img-ilc"/>
                            </div>
                            <h4 className="product-name-ilc">{prod.instrument}</h4>
                            <Link to={`/item/${prod.id}`} className="info-product-ilc">Ver producto</Link>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}

export default ItemListContainer;