// so, we need some state to be updated
// we need a form or soemthing form like 

import './AddAPlant.css'
import { useState } from 'react';


function Add() {

/* const [plant, setPlant]=useState({}) */
const [name, setName] = useState("");
const [selectValue, setSelectValue] = useState("");
const [careTips, setCareTips] = useState("");
const [lastWatered, setLastWatered] = useState("");
const [plant, setplant] = useState({});

function handleClick(e){
  e.preventDefault();
  setplant({
    plant_name:name,
    reminder:selectValue, 
    care:careTips,
    last_watered:lastWatered
  })
  console.log(plant)
} 




return (
     
      <div className="App"> 
  
        <h2>New Plant</h2>
<form>
<div className="dropdown">
  <label className="dropbtn">
    Name
  </label>
  <div className="dropdown-content"> 
  <input type="text" name="name" onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}/>
  </div>
</div>
<div className="dropdown">
  <label className="dropbtn">
    Watering schedule:
    </label>
    <div className="dropdown-content"> 
    <select defaultValue="" onChange={(e) => {
              setSelectValue(e.target.value);
              console.log(selectValue);
            }}>
      <option value="">how often do you need to water</option>
      <option value="biweekly">twice a week</option>
      <option value="onceweekly">once a week</option>
      <option value="weekandahalf">every week and a half</option>
      <option value="twoweeks">every two weeks</option>
      <option value="never">literally never, it's a sansivera</option>
    </select>
    </div>
</div>
  <div className="dropdown">
  <label className="dropbtn">
   Care tips</label>
   <div className="dropdown-content"> 
    <input type="text" name="care tips" onChange={(e) => {
              setCareTips(e.target.value);
              console.log(careTips);
            }}/>
  
  </div>
</div>
   <div className="dropdown">
  <label className="dropbtn">
    Last watered
  </label>
  <div className="dropdown-content"> 
  <select defaultValue="" onChange={(e) => {
              setLastWatered(e.target.value);
              console.log(lastWatered);
            }}>
    <option value="0">0 days ago</option>
      <option value="1">1 days ago</option>
      <option value="2">2 days ago</option>
      <option value="3">3 days ago</option>
      <option value="4">4 days ago</option>
      <option value="5">5 days ago</option>
      <option value="6">6 days ago</option>
      <option value="7">7 days ago</option>
    </select>
    </div>
</div>
    <input onClick={(e) => {
            handleClick(e);
          }} className="submit" type="submit" value="Add a plant +" />
</form>
        </div>
    );
  }

  export default Add