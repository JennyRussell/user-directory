import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";

// event handler for the user input search query
const InputField = (props) => {
    const handleInputChange = (e) => {
      props.handleSearch(e.target.value);
    }

  return (
    <div className="input-group mb-3 p-3">
  <input type="text" className="form-control" onChange={handleInputChange} placeholder="Search here..." aria-label="" aria-describedby="basic-addon2"></input>
  <div className="input-group-append">
  </div>
  </div>

  );
}

export default InputField;