import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css"

function NavBar() {
    return (
        <header className="container-fluid">
            <nav className="row">
                <div className="d-flex justify-content-center">                    
                    <h2 className="mx-auto">Onda Sonora!</h2>
                    <div className="">
                        <CartWidget/>
                    </div>
                </div>
                <div>
                    <ul className="d-flex justify-content-evenly">
                        <li>
                            <a href="#">Guitarras</a>
                        </li>
                        <li>
                            <a href="#">Pianos</a>
                        </li>
                        <li>
                            <a href="#">Bajos</a>
                        </li>
                        <li>
                            <a href="#">Percusión</a>
                        </li>
                        <li>
                            <a href="#">Amplificadores</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;