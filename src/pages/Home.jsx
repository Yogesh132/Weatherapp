import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



const Home = ({setValueprop}) => {
    

const setValue = (e)=>{
  let newvalue=document.getElementById(`value123`).value
  setValueprop(newvalue)
}
  return (
        <>
  <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    <div>
{/* <input type="text" id='value123'/> */}
{/* <button onClick={setValue}>Submit</button> */}
{/* <button class="glow-on-hover" type="button" onClick={setValue}>SUBMIT</button> */}


<button className='one' type='button'>

<Link to="/five" >Five Days Weather Forcast</Link>
</button>


    </div>
    
<div>


<div class="searchBox">

<input className="searchInput"type="text" id='value123'  placeholder="Search"/>
<button className="searchButton"type="button" onClick={setValue} >
  
    <>
   <FaSearch />
    </>
</button>
</div>

</div>


    </>
  )
}

export default Home