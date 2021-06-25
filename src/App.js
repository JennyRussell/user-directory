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

// handles the search query
const handleSearch = query => {
  if(query){
    // ensures lower case user input still returns results
    let value = query.toLowerCase();
    console.log(value);
    let result = [];
    // search results filter
    result = empData.filter((emp)=> {
     return emp.name.first.toLowerCase().includes(value) || emp.name.last.toLowerCase().includes(value) || emp.location.country.toLowerCase().includes(value) || emp.location.city.toLowerCase().includes(value);
    }) 
    setFilteredEmpData(result);
    // if user deletes search query, this returns the original list of employees
  } else if (!query){
    setFilteredEmpData(empData);
    return empData.filter((emp)=> {
      return true;
     }) 
  }
}
// API  call to get employee data
  useEffect(() => {
    if (!isLoaded){
      API.getEmp().then((res) => {
        setEmpData(res.data.results)
        setFilteredEmpData(res.data.results)
        // makes sure that once data is loaded, it doesn't keep refershing it
        setIsLoaded(true);
    }, [])
      .catch(error => {
        console.log('Error getting data')
      })
  }
  }, [])
  return (
    <div className="App">
<nav className="navbar navbar-light bg-secondary">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand text-light font-weight-bold" href="#">User Directory</a>
  </div>
</nav>
{/* components for the input search form and table */}
<InputField className="d-flex justify-content-center"filteredEmpData={filteredEmpData} handleSearch={handleSearch}/>     
<Table isLoaded={isLoaded} empData={filteredEmpData}/>  
    </div>
  );
}

export default App;
