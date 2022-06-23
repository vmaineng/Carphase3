import React from 'react'
import ParkedCard from './ParkedCard'

function VehicleParked({reservations, onRemoveItem}) {
    const parkres = reservations.map(reservation => <ParkedCard key={reservation.id} {...reservation} onRemoveItem={onRemoveItem}/>)
  return (
    <div>VehicleParked
        <ul className="parkres">{parkres}</ul>

    </div>
  )
}

export default VehicleParked