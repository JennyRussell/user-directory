import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import React, {useState,useEffect} from "react";
import Table from './components/Table';
import InputField from './components/InputField';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [empData, setEmpData] = useState("");
const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded){
      API.getEmp().then((res) => {
        setEmpData(res.data.results)
        console.log(res.data.results);
        setIsLoaded(true);
    })
  }
  })
  return (
    <div className="App">
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand " href="#">User Directory</a>
  </div>
</nav>
<InputField />     
<Table isLoaded={isLoaded} empData={empData}/>
    
      
      
    </div>
  );
}

export default App;
