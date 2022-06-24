import React from 'react'
import ParkedCard from './ParkedCard'

function VehicleParked({reservations, onRemoveItem, onUpdateReservation}) {
    const parkres = reservations.map(reservation => <ParkedCard key={reservation.id} {...reservation} onRemoveItem={onRemoveItem} onUpdateReservation={onUpdateReservation}/>)
  return (
    <div>Current Parking Reservations
        <ul className="parkres">{parkres}</ul>

    </div>
  )
}

export default VehicleParked