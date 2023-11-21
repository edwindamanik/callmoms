import React from "react";
import { Colors } from '../'

const CustomInput = ({ handleChange, placeholder, type }) => (
  <input
    onChange={handleChange}
    placeholder={placeholder}
    type={type}
    style={{ backgroundColor: Colors.white, border: 0, padding: "10px", borderRadius: 4, outline: 'none' }}
  />
);

export default CustomInput;
