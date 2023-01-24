import './App.css';
import data from './info.json';
import Earrings from './Earrings.js';
import React from 'react';

import Aggregator from './Aggregator';
import { useState } from 'react';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';





const App = () => {

  
 
  const[gemstone, setGemstone] = useState("All");
  const[rating, setRating] = useState(false);
  const[reverse, setReverse] = useState(false);
  const[silver, setSilver] = useState(false);
  const[gold, setGold] = useState(false);

  //const[itemsToDisplay, setItems] = useState(data);
  
  
  
  


  const selectFilterType = (event) => {
    console.log(event.target.value, event.target.checked);
    
    if (event.target.value === "Gold") {
    
      setGold(event.target.checked); 
     
    } 
    
    if (event.target.value === "Silver") {
   
      setSilver(event.target.checked) 
      
    }
    
  }


  const selectGemstone = event => {
    console.log(event.target.value, event.target.checked);
    
    if (event.target.checked === true) {
      setGemstone(event.target.value)
    }else{
      setGemstone("All")
    }
  }

  const selectSort = event => {
    
      setRating(event.target.checked)
      setReverse(false)
      console.log(setRating)
    


  }

  const selectReverse = event => {
   
      setReverse(true)
      setRating(false)
      console.log(setReverse)
  
  }

  const matchesFilterMetal = item => {
    // all items should be shown when no filter is selected
    if(silver === false && gold ===false ) { 
      return true
    } else if (silver === true && item.type.includes("Silver")) {
      return true
    } else if (gold === true && item.type.includes("Gold")){
      return true
    }
  else {
      return false
    }
  }

  const matchesFilterGemstone = item => {
    // all items should be shown when no filter is selected
    if(gemstone === "All") { 
      return true
    } else if (gemstone === item.gemstone) {
      return true
    } else {
      return false
    }
  }

  const matchesFilters = item => {
    if (matchesFilterMetal(item) && matchesFilterGemstone(item) ) { // TODO: include other filter functions
      return true
    } else {
      return false
    }
  }

  

  let filteredList = data.filter((item) => {
    return (matchesFilters(item) === true && matchesFilterGemstone(item)) 
  });

  const compareRate = (a,b) => {
    if(rating === true){
      if(a.rating < b.rating){
        return 1;
      }
      if (a.rating === b.rating){
        return 0;
      }
      if (a.rating > b.rating){
        return -1;
      }
    }
    if(reverse === true){
      if(a.rating > b.rating){
        return 1;
      }
      if (a.rating === b.rating){
        return 0;
      }
      if (a.rating < b.rating){
        return -1;
      }

    }

  }

  filteredList = filteredList.sort(compareRate);

  const reset = () => {
    setGemstone("All")
    setRating(false)
    setReverse(false)
    setSilver(false)
    setGold(false)
    document.getElementById("Emerald").checked = false

  }


  
  return (
   
    <div className="App">
      <header className="App-header"> UIUX Earrings</header>
      <h1> earrings for every designer </h1>
      
      <div className="Display">
        <div>
          <Aggregator></Aggregator>
        </div>
        <div className="Sidebar">
          <div>
              <div> Filter By Metal
              <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Gold" value="Gold" onChange={selectFilterType}/>
                  <FormControlLabel control={<Checkbox />} label="Silver" value="Silver" onChange={selectFilterType}/>
              </FormGroup>
              </div>

              <div> Filter By Accessory/Additions
              <FormGroup>
                <RadioGroup>
                  <FormControlLabel control={<Radio />} id= "emerald "name="Emerald" label="Emerald" value="Emerald" onChange={selectGemstone} />
                  <FormControlLabel control={<Radio />} name= "Pearl" label="Pearl" value="Pearl" onChange={selectGemstone} />
                  <FormControlLabel control={<Radio />} name= "White Topaz" label="White Topaz" value="White Topaz" onChange={selectGemstone}/>
                  <FormControlLabel control={<Radio />} name= "Opal" label="Opal" value="Opal" onChange={selectGemstone}/>

                </RadioGroup>
              </FormGroup>
              </div>

              <div> Sort By:
                  <FormControl>
                      <FormLabel id="buttons-group-label">Rating and Price</FormLabel>
                      <RadioGroup
                          aria-labelledby="Rating-label"
                      
                          name="radio-buttons-group"
                      >
                          <FormControlLabel value="rating" control={<Radio />} label="most popular to least popular" onChange={selectSort} />
                          <FormControlLabel value="price" control={<Radio />} label="least popular to most popular" onChange={selectReverse}/>
                      </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <button onClick={reset}> Reset </button>

            
          </div>

        <div className="Products" >
        {filteredList?.map((info, index) => {
          return(
            <Earrings earring={info} key= {index}></Earrings>
          )})}
        </div>
        
      </div>
    </div>
    
  );
};

export default App;

