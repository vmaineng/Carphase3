import React from 'react'
import VehicleForm from './VehicleForm';


function Header({allData}) {


  return (
    <nav >
    <div class="container-fluit">
    <span class="navbar-brand mb-0 h2" className="display-1">CarLot</span>

    <VehicleForm />
    
    </div>
    </nav>
  )
}

export default Header