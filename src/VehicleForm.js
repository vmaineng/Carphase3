import React, {useState} from 'react'
import VehicleParked from './VehicleParked'

function VehicleForm() {
  const [vehicle, setVehicle] = useState('');
  const [errors, setErrors] = useState(null);
  const [reservations, setReservation] = useState([])
  const [newVehicle, setNewVehicle] = useState('')

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

  function handleNewReservation(e) {
    e.preventDefault();
  
      fetch("http://localhost:9292/parkedcars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle: newVehicle
        }),
      })
      .then(r => r.json())
      .then((parkedcars) => handleAddReservation(parkedcars))
      }
 
//add a new vehicle
function handleAddReservation(newReservation) {
  const updatedReservationArray = [...reservations, newReservation];
  setReservation(updatedReservationArray);
}


//delete vehicle 
  function handleRemoveItem(id) {
    const updatedReservationArray = reservations.filter((reservation) => reservation.id !== id);
    setReservation(updatedReservationArray);
  }

  //update vehicle
  function handleUpdateReservation(updatedReservation) {
    const updatedReservationArray = reservations.map((reservation) => {
      if (reservation.id === updatedReservation.id) {
        return updatedReservation;
      } else {
        return reservation;
      }
    });
    setReservation(updatedReservationArray);
  }

  return (
    <div className="row g-3">
      <h2>Reserve your parking space today!</h2>
      <div >
      <form onSubmit={handleSubmit} class="col-md-6">
        <input 
        type="text" 
        vehicle="vehicle"
        class="form-control"
        aria-label="License Plate"
        placeholder="License Plate"
        value={vehicle.license}
        onChange={(e) => setVehicle(e.target.value)}
        />
       
        <button type="submit" class="d-grid gap-2 col-6 mx-auto btn-primary">Check vehicle</button>
        <br></br>
        {/* <form action="/action_page.php" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <label for="arrival">Arrival</label>
        <input type="datetime-local" id="arrival"/>
        <button type="submit">Enter</button>
        </form>
        <form action="/action_page.php" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <label for="depature">Depature</label>
        <input type="datetime-local" id="depature"/>
        <button type="submit">Enter</button>
        </form> */}
      </form>
      </div>
      {errors && <p>{errors}</p>}
      <form onSubmit={handleNewReservation}>
        <input 
        type="text"
        name="name"
        placeholder="name"
        value={ newVehicle}
        onChange={(e) => setNewVehicle(e.target.value)}
        />
      <button type="submit">Make new reservation</button>
      </form>

      <VehicleParked 
          reservations={reservations} 
          onRemoveItem={handleRemoveItem}
          onUpdateReservation={handleUpdateReservation}/>
      </div>
  )
}

export default VehicleForm