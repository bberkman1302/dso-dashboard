import './selector.css';
import React, { Component } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


import dsodata from "../dsos_data.json";


function Selector({data, onOptionChange, selector_type, currentval}) {
  

  //maps the keys in "dsodata" to a list of companies, in sorted order. 
  const options = Object.keys(data)
  .sort((a, b) => a.localeCompare(b))
  .map((key) => key);


  const handleChange = (event, value) => {
    onOptionChange(value);
  };


  return (
    <div className = "selection">
        <div id = "selection_title">Select {selector_type}</div>
        <div id = "dropdown">
            <Autocomplete
                id = "dropdown-input"
                value={currentval}
                onChange={handleChange}
                options={options}
                renderInput={(params) => <TextField {...params} label = "Select"/>}
            />
        </div>
    </div>
  );
}

export default Selector;
