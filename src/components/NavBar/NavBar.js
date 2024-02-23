import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {

    return (
        <header className="container-fluid">
            <nav className="row nav-bar">
                <div className="d-flex justify-content-center">                    
                    <Link to="/" className="mx-auto brand-name">Onda Sonora!</Link>
                    <div className="">
                        <CartWidget/>
                    </div>
                </div>
                <div>
                    <ul className="d-flex justify-content-evenly">
                        <li className="li-link">
                            <Link to="category/guitarras" className="category-link-nb" >Guitarras</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/pianos"  className="category-link-nb">Pianos</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/bajos"  className="category-link-nb">Bajos</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/saxofones"  className="category-link-nb">Saxofones</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/percusion"  className="category-link-nb">Percusión</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/amplificadores"  className="category-link-nb">Amplificadores</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;