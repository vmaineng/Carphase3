import React from 'react'
import ParkedCard from './ParkedCard'
import NewReservation from './NewReservation'

function VehicleParked({reservations, onRemoveItem, onUpdateReservation, onAddItem}) {
    const parkres = reservations.map(reservation => <ParkedCard key={reservation.id} {...reservation} onRemoveItem={onRemoveItem} onUpdateReservation={onUpdateReservation} onAddItem={onAddItem}/>)
  return (
    <div>Current Parking Reservations
        <ul className="parkres">{parkres}</ul>

        <NewReservation onAddItem={onAddItem} />
    </div>
  )
}

export default VehicleParked