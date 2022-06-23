import React, {useState} from 'react'
import VehicleParked from './VehicleParked'

function VehicleForm() {
  const [vehicle, setVehicle] = useState('');
  const [errors, setErrors] = useState(null);
  const [reservations, setReservation] = useState([])

function handleSubmit(e) {
  e.preventDefault();

    fetch("http://localhost:9292/vehicles/find_by", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehicle: vehicle
      }),
    })
    .then(r => r.json())
    .then((parkedcars) => {
      if (parkedcars.length === 0){
        setErrors("No reservation for this vehicle")
      } else {
      setReservation(parkedcars)};
    })
  };
 

//delete vehicle 
  function handleRemoveItem(id) {
    const newVehicle = reservations.filter((reservation) => reservation.id !== id);
    setReservation(newVehicle);
  }


  return (
    <div className="vehicleform">
      <h2>Search by Vehicle License Plate</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        vehicle="vehicle"
        placeholder="License Plate"
        value={vehicle.license}
        onChange={(e) => setVehicle(e.target.value)}
        />

        <button type="submit">Check vehicle</button>
        <br></br>
        <form action="/action_page.php">
        <label for="arrival">Arrival</label>
        <input type="datetime-local" id="arrival"/>
        <button type="submit">Enter</button>
        </form>
        <form action="/action_page.php">
        <label for="depature">Depature</label>
        <input type="datetime-local" id="depature"/>
        <button type="submit">Enter</button>
        </form>
      </form>
      
      {errors && <p>{errors}</p>}

      <button type="submit">Make new reservation</button>
      
      <VehicleParked reservations={reservations} onRemoveItem={handleRemoveItem}/>
      </div>
  )
}

export default VehicleForm