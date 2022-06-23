import React from 'react'
import ParkedCard from './ParkedCard'

function VehicleParked({reservations}) {
    const parkres = reservations.map(reservation => <ParkedCard key={reservation.id} {...reservation} />)
  return (
    <div>VehicleParked
        <ul className="parkres">{parkres}</ul>

    </div>
  )
}

export default VehicleParked