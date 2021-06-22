import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import React, {useState,useEffect} from "react";
import Table from './components/Table';


function App() {
const [empData, setEmpData] = useState("");
const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded){
      API.getEmp().then((res) => {
        setEmpData(res.data.results)
        setIsLoaded(true);
    })
  }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<Table isLoaded={isLoaded} empData={empData}/>
    
      
      </header>
    </div>
  );
}

export default App;
