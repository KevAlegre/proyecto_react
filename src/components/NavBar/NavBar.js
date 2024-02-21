import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
    return (
        <header className="container-fluid">
            <nav className="row">
                <div className="d-flex justify-content-center">                    
                    <Link to="/" className="mx-auto brand-name">Onda Sonora!</Link>
                    <div className="">
                        <CartWidget/>
                    </div>
                </div>
                <div>
                    <ul className="d-flex justify-content-evenly">
                        <li>
                            <Link to="" className="category-link">Guitarras</Link>
                        </li>
                        <li>
                            <Link to="" className="category-link">Pianos</Link>
                        </li>
                        <li>
                            <Link to="" className="category-link">Bajos</Link>
                        </li>
                        <li>
                            <Link to="" className="category-link">Percusión</Link>
                        </li>
                        <li>
                            <Link to="" className="category-link">Amplificadores</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;