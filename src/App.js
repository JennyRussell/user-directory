import './App.css';
import API from "./utils/API";
import React, {useState,useEffect} from "react";
import Table from './components/Table';
import InputField from './components/InputField';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [empData, setEmpData] = useState("");
const [filteredEmpData, setFilteredEmpData] = useState(empData);
const [isLoaded, setIsLoaded] = useState(false);

const handleSearch = query => {
  if(query){
  let value = query.toLowerCase();
  console.log(value);
  let result = [];
  result = empData.filter((emp)=> {
    return emp.name.first.toLowerCase().includes(value) || emp.name.last.toLowerCase().includes(value) || emp.location.country.toLowerCase().includes(value) || emp.location.city.toLowerCase().includes(value);
  })
  setFilteredEmpData(result);
}
}

  useEffect(() => {
    if (!isLoaded){
      API.getEmp().then((res) => {
        setEmpData(res.data.results)
        setFilteredEmpData(res.data.results)
        setIsLoaded(true);
    }, [])
      .catch(error => {
        console.log('Error getting data')
      })
  }
  }, [])
  return (
    <div className="App">
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand " href="#">User Directory</a>
  </div>
</nav>
<InputField filteredEmpData={filteredEmpData} handleSearch={handleSearch}/>     
<Table isLoaded={isLoaded} empData={filteredEmpData}/>  
    </div>
  );
}

export default App;
