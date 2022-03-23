import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  NavbarE  from './components/Navbar';
import Item from './components/ItemCount';


let ListaProductos = [
  {
      producto: "item1",
      cantidad: 2,
  },
  {
      producto: "item2",
      cantidad: 10,
  },
  {
      producto: "item3",
      cantidad: 20,
  },
  {
      producto: "item4",
      cantidad: 12,
  },
  {
      producto: "item5",
      cantidad: 8,
  },
  {
      producto: "item6",
      cantidad: 10,
  },
]

let carrito = 0

function addCart(contador,producto) {
    const prod = ListaProductos.find(i => i.producto === producto)
    prod.cantidad -= contador
    console.log(prod)
    console.log(ListaProductos)
}





function App() {


  return (
    <div className="App">
      <NavbarE contador = {carrito}/>
      <Item 
        stock = {ListaProductos}
        addCart = {addCart}
      />
    </div>
  );
}

export default App;
