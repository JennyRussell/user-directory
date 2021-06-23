import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";


const InputField = (props) => {

   

  return (
    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Filter by.." aria-describedby="basic-addon2"></input>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Search</button>
  </div>
  </div>

  );
}

export default InputField;