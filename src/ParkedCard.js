import React from 'react'

function ParkedCard({price}) {
   // const {price} = reservation

  return (
    <div>ParkedCard
        <li className="park">
            <p>Price: {price}</p>
        </li>
    </div>
  )
}

export default ParkedCard