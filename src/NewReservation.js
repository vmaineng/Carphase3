import React, { useState } from 'react'

function NewReservation({id, price, arrival, departure,onAddItem}) {
    const [newVehicle, setNewVehicle] = useState('')
    const [newPrice, setNewPrice] = useState(0)
  //const [vehicleID, setVehicleID] = useState('')
  const [newArrival, setNewArrival] = useState(arrival)
  const [newDeparture, setNewDeparture] = useState(departure)


  function handleNewReservation(e) {
    e.preventDefault();
  
      fetch("http://localhost:9292/parkedcars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle: newVehicle,
          price: newPrice,
          arrival: newArrival,
          departure: newDeparture
        }),
      })
      .then(r => r.json())
      .then((parkedcars) => onAddItem(parkedcars))
      } 

  return (
    <div>NewReservation
           <form onSubmit={handleNewReservation}>
        <input 
        type="text"
        name="license plate number"
        placeholder="license plate number"
        value={ newVehicle}
        onChange={(e) => setNewVehicle(e.target.value)}
        />
          <input 
        type = "number"
        step= "0.01"
        placeholder="New price"
        value ={newPrice}
        onChange={(e) => setNewPrice(parseFloat(e.target.value))}/>
        <input
        type ="date"
        placeholder="Arrival"
        value ={newArrival}
        onChange={(e) => setNewArrival(e.target.value)} />
        <input
        type ="date"
        placeholder="Depature"
        value ={newDeparture}
        onChange={(e) => setNewDeparture(e.target.value)} />
      <button type="submit">Make new reservation</button>
      </form>
    </div>
  )
}

export default NewReservation