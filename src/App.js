import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  NavbarE  from './components/Navbar';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';


const listaproductos = [
  {
      producto: "item1",
      cantidad: 2,
      precio: 150,
  },
  {
      producto: "item2",
      cantidad: 10,
      precio: 150,
  },
  {
      producto: "item3",
      cantidad: 20,
      precio: 150,
  },
  {
      producto: "item4",
      cantidad: 12,
      precio: 150,
  },
  {
      producto: "item5",
      cantidad: 8,
      precio: 150,
  },
  {
      producto: "item6",
      cantidad: 10,
      precio: 150,
  },
]





function App() {


  return (
    <div className="App">
      <NavbarE/>
      <ItemListContainer
        stock = {listaproductos} 
      />
    </div>
  );
}

export default App;
