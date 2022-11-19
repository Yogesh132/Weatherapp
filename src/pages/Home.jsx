import React from 'react'
import { useState } from 'react'
import './Home.css'

const Home = ({setValueprop}) => {
    const [value,setValue] =useState('')

    const getValue =(e) =>{
        setValue(e.target.value)
    }
    const passValue =()=>
    {
        setValueprop(value)
    }
    const handleKeyPress = (event) => {
        if(event.key === 13){
          console.log('enter press here! ')
          
        }
      }

    


  return (
        <>
        
      <div class="search-box">
    <button class="btn-search" onKeyUp={handleKeyPress}><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Search"
     value={value} onChange={getValue}/>
     <button onClick={passValue} >Search</button>
    </div>
    </>
  )
}

export default Home