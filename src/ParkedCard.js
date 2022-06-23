import React, { useState } from 'react'


function ParkedCard({id, price, arrival, departure, onRemoveItem, onUpdateReservation}) {
   const [updatedPrice, setUpdatedPrice] = useState(price)


function handleDeleteClick() {
    fetch(`http://localhost:9292/vehicles/${id}`, {
        method: "DELETE",
    });
    onRemoveItem(id);
}

function handleUpdateReservationClick(e) {
e.preventDefault();
fetch(`http://localhost:9292/parkedcars/${id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: updatedPrice}),
})
.then(r => r.json())
.then(updatedReservation => {
    onUpdateReservation(updatedReservation);
});
}

  return (
    <div>ParkedCard
        <li className="park">
            <p>Price: {price}</p>
        </li>
        <br></br>
        <button onClick={handleDeleteClick} className="deletebutton">
        🗑   </button>

    <form onSubmit={handleUpdateReservationClick}>
        <input 
        type = "number"
        step= "0.01"
        placeholder="New price"
        value ={updatedPrice}
        onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}/>
        <button type="submit">Update reservation</button>
    </form>

    </div>
  )
//to update and delete look at the code to add an omji to the button
}

export default ParkedCard