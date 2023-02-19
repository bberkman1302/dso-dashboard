import React, { Component } from 'react';
import Infocard from './infocard';
import './cardgroup.css';



function Cardgroup({data}){

  //renders group of infocards
  const Rendergroup = (info) => {
    return (
      <>
        {Object.keys(info).map((key) => (
          <Infocard title = {key} info = {info[key]}></Infocard>
        ))}
      </>
    );
  };


  return (
    <div className = "info-wrap">
      {Rendergroup(data)}
    </div>
  );
}

export default Cardgroup