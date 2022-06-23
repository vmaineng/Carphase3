// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';



function App() {
const [allData, setallData] = useState([]) //might have to change alldata

useEffect(() => {
  fetch("http://localhost:9292/vehicles")
  .then(r => r.json())
  .then(data => {
    setallData(data)
  })
}, [])



  return (
    
    <div className="App">
       <Header allData={allData}/>
    </div>
  );
}

export default App;
