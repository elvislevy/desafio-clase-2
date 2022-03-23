import React,{useState, useEffect} from "react";





function Item ({stock,addCart}) {
  const [contador,setContador] = useState(0)

  const prodPrueba = stock.find(i => i.producto === "item5")
  const {producto,cantidad} = prodPrueba 
  
  let cantidadMax = cantidad
  
  function click (op) {
    if(op ==="sumar" && contador < cantidad) {
      return setContador(contador + 1)
    } else if (op ==="restar" && contador > 0) {
      return setContador(contador - 1)
    }
  }
  function onAdd(contador,producto){
    addCart(contador,producto)
  }
  
  useEffect((contador) => {
    cantidadMax -= contador
  })
  
  return (
    <div className='item'>
      <h3>{producto}</h3>
      <p>Cantidad: {contador}</p>
      <p>Cantidad máxima: {cantidadMax}</p>
      <div className='boton-sr'>
        <button onClick={() => click("sumar")}>+</button>
        <button onClick={() => click("restar")}>-</button>
      </div>
      <button style = {{marginTop: "20px",}} onClick={() => onAdd(contador,producto)}>Agregar al carrito</button>
    </div>

  )
}



export default Item;