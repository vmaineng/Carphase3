// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import VehicleForm from './VehicleForm';
import { Route, Switch } from "react-router-dom";



function App() {
// const [allData, setallData] = useState([]) //might have to change alldata

// useEffect(() => {
//   fetch("http://localhost:9292/vehicles")
//   .then(r => r.json())
//   .then(data => {
//     setallData(data)
//   })
// }, [])



  return (

    <div className="App">
         <Header />
      <Switch>
        <Route path="/">
         <VehicleForm />
         </Route>
         
         {/* <Route path="/new">

         </Route> */}
         </Switch>
    </div>
  );
}

export default App;
