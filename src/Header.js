import React from 'react'
import VehicleForm from './VehicleForm';
import VehicleParked from './VehicleParked'

function Header({allData}) {


  return (
    <div>Header
    <VehicleForm />
    
    <VehicleParked allData={allData}/>
    </div>
  )
}

export default Header