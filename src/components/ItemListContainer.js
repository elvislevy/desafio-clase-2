import React from "react";
import ItemList from "./ItemList";



const ItemListContainer = ({stock}) => {

  
  return (
      <div className="itemListContainer">
        <ItemList
            stock={stock}
          />
      </div>
  )

   
}


export default ItemListContainer;