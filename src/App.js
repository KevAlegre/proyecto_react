import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() { 
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡Musicalizate a tu mejor estilo!"}/>
    </div>
  );
}
export default App;