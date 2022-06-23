import React from 'react'

function ParkedCard({id, price, arrival, departure, onRemoveItem}) {
   // const {price} = reservation


function handleDeleteClick() {
    fetch(`http://localhost:9292/vehicles/${id}`, {
        method: "DELETE",
    });
    onRemoveItem(id);
}

  return (
    <div>ParkedCard
        <li className="park">
            <p>Price: {price}</p>
        </li>
        <br></br>
        <button onClick={handleDeleteClick} className="deletebutton">
        🗑   </button>
    </div>
  )
//to update and delete look at the code to add an omji to the button
}

export default ParkedCard