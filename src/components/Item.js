import React,{useState} from "react";





function Item ({nombre,cantidad,precio}) {
  const [cont,setCont] = useState(1)
  
  return (
    <div className='item'>
      <h3>Nombre: {nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${precio}</p>
      <p>Seleccionado: {cont}</p>
      <div className='boton-sr'>
        <button onClick={() => cont < cantidad && setCont(cont + 1)}>+</button>
        <button onClick={() => cont > 1 && setCont(cont - 1) }>-</button>
      </div>
      <button style = {{marginTop: "20px",}}>Agregar al carrito</button>
    </div>

  )
}



export default Item;