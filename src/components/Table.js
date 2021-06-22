import React from "react";



function Table (props){

    return (
        <table>
            <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                </tr>
            </thead>
            <tbody>
            {props.isLoaded ? props.empData.map((emp,idx) => {
          let {first, last} = emp.name
          return (
              <tr key={idx}>
                  <td>{first}</td>
                  <td>{last}</td>
              </tr>
          )
        }) : "loading"}
            </tbody>
        </table>
    )
}

export default Table;