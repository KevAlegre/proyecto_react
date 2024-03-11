import { Link } from "react-router-dom";

export default function Item({prod}) {
    return (
        <article key={prod.id} className="product-card-ilc">
            <div className="container-img-ilc">
                <img src={prod.image} alt={prod.alt} className="img-ilc" />
            </div>
            <h4 className="product-name-ilc">{prod.instrument}</h4>
            <Link to={`/item/${prod.id}`} className="info-product-ilc">
                Ver producto
            </Link>
        </article>
    );
};