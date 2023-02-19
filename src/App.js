import './App.css';
import React, { Component } from 'react';

import Cardgroup from './components/cardgroup';
import Topbar from './components/topbar';
import Selector from './components/selector';
import dsodata from "./dsos_data.json";


function App() {

  const [company, setCompany] = React.useState();
  const [deal, setDeal] = React.useState();

  const handleOptionChange = (option) => {
    if(option == ""){
      setCompany(null)
    }
    else{
      setCompany(option);
      setDeal(null)
    }
  };

  const handleChangeDeal = (option) => {
    if(option == ""){
      setDeal(null)
    }
    else{
      setDeal(option);
    }
  };

  //Some of the data is "limited or missing," so this checks if that is the case
  const check_found = (company) => {
    if(dsodata[company] == "Limited or Missing Data"){
      return false
    } else{
      return true
    }
  }

  //Grabs the relevant fund data to be passed into the Cardgroup component
  const get_relevant_fund_data = (company) => {
    const rel = {
      "Total Raised": company["Total Raised"],
      "Year Founded": company["Year Founded"],
      "Post Val": company["Post Valuation"]
    }
    return(rel)
  }

  //Grabs the relevant deal data to be passed into the Cardgroup component
  const get_relevant_deal_data = (deal) => {
    const rel = {
      "Deal Type": deal["Deal Type"],
      "Deal Amount": deal["Deal Amount"],
      "Deal Date": deal["Deal Date"]
    }
    return(rel)
  }


  return (
    <div className="App">
      <Topbar></Topbar>
          <div id = "dashwrap">
            <div id = "searchwrap">
              <Selector data = {dsodata} onOptionChange = {handleOptionChange} selector_type = "DSO" currentval={company}></Selector>
              {company && check_found(company) &&( //only trys to display deals if the company is selected data is found
                <Selector data = {dsodata[company]["Deals"]} onOptionChange = {handleChangeDeal} selector_type = "Deal" currentval={deal}></Selector>
              )}
            </div>
            {company && check_found(company) &&( //only displays info if company is selected and data is found
              <div id = "itemswrap">           
              <div id="selected-company">
                {dsodata[company]["Company Name"]}
              </div>
              <div className = "section-header">General Information</div>
              <Cardgroup data = {get_relevant_fund_data(dsodata[company])}></Cardgroup>
              <div className = "information">{dsodata[company]["Company Description"]}</div>
                {deal && (
                  <div id = "dealwrap">
                    <div className = "section-header">Deal Information ({deal})</div>
                    <Cardgroup data = {get_relevant_deal_data(dsodata[company]["Deals"][deal])}></Cardgroup>
                    <div className = "information">{dsodata[company]["Deals"][deal]["Deal Description"]}</div>
                  </div>
                )}
            </div>
            )}
            {company && !check_found(company) &&( //if company data not found
              <div id = "itemswrap">           
              <div id="selected-company">
                {company}
              </div>
              <div className = "section-header">General Information</div>
              <div className = "information">Limited or missing data.</div>
            </div>
            )}
          </div>
    </div>
  );
}

export default App;
