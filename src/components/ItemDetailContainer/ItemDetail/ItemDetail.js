import ItemQuantitySelector from "./ItemQuantitySelector/ItemQuantitySelector";
import Description from "./Description/Description";

export default function ItemDetail({products}) {
    const { instrument, category, price, alt, description, image } = products;

    return (
        <article >
            <h1 className="title-idc">{instrument}</h1>
            <h4 className="subtitle-idc">Categoría: {category}</h4>
            <div className="container-info-idc">
                <div>
                    <img src={image} alt={alt} className="img-idc" />
                </div>
                <div className="desc-container-idc">
                    <Description description={description}/>
                    <ItemQuantitySelector price={price} products={products} className="count-idc" />
                </div>
            </div>
        </article>
    );
};