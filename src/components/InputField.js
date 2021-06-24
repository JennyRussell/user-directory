import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";


const InputField = (props) => {
    const [search, setSearch] = useState("");

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div className="input-group mb-3">
  <input type="text" className="form-control" onChange={handleInputChange} placeholder="Search here..." aria-label="" aria-describedby="basic-addon2"></input>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" onClick={() => props.handleSearch(search)}>Search</button>
  </div>
  </div>

  );
}

export default InputField;