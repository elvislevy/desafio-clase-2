import React from "react";
import Item from "./Item";


const ItemList = ({stock}) => {

  
  return (
    
    stock.map(({producto, cantidad, precio}) => (
      <Item 
        nombre = {producto} 
        cantidad = {cantidad} 
        precio = {precio}
      />
    ))
  )

   
}


export default ItemList;