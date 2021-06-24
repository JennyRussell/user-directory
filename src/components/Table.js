import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';




function Table (props){

    return (
        <div className="container">
        <table >
            <thead>
                <tr>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Country</th>           

                </tr>
            </thead>
            <tbody>
            {props.isLoaded ? props.empData.map((emp,idx) => {
          let {first, last} = emp.name
          let {medium} = emp.picture
          let {city, country} = emp.location
      
          return (
              <tr key={idx}>
                  <td><img src={medium}></img></td>
                  <td>{first}</td>
                  <td>{last}</td>
                  <td>{city}</td>
                  <td>{country}</td>

              </tr>
          )
        }) : <tr></tr>}
            </tbody>
        </table>
        </div>
    )
}

export default Table;