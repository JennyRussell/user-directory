import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const InputField = () => {
  return (
    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
  </div>

  );
}

export default InputField;