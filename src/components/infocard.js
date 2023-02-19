import './infocard.css';
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Infocard({title, info}){

  //if info is empty, convert to "n/a"
  const check_empty = (data) => {
    if(data == "" || data == " "){
      return "n/a"
    } else{
      return data
    }
  }

  return(
    <Card>
      <CardContent>
        <div className = "cardtitle">{title}</div>
        <div className = "cardinfo">{check_empty(info)}</div>
      </CardContent>
    </Card>
  );

}

export default Infocard