import React, {useState} from 'react'


function VehicleForm() {
  const [vehicle, setVehicle] = useState("");

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
    .then((vehicle) => {
      setVehicle(vehicle);
    })
  };
 
  // if vehicle.length = 0
  //   "No reservation"
    

  // if response.length = 0, print "No reservation", then return setVehicle
  

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
      </form>
      
      </div>
  )
}

export default VehicleForm