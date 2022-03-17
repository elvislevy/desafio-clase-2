import React, { useState } from "react";


const Items = () => {
    let [acc,setAcc] = useState (0);

    function click () {
        setAcc(acc + 1)
    }
    
    return (
        <div>
            <button onClick={click}>item 1</button>
            <button onClick={click}>item 2</button>
            <button onClick={click}>item 3</button>
            <button onClick={click}>item 4</button>
            <button onClick={click}>item 5</button>
            <h1>Cantidad de productos: {acc}</h1>
        </div>

    )
}

export default Items;