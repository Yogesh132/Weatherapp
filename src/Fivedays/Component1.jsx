import React from 'react'
import './Component1.css'
import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const Component1 = () => {
  return (
<div>

<Link to='/'><FaArrowLeft className='leftarrow'/> </Link>


<div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            <tr>
              <td>
                DAY 
              </td>
              <td>TEMP MIN</td>

              <td>TEMP MAX</td>
              <td>WEATHER CONDITION</td>
              <td>WIND SPEED</td>
            </tr>
          </tbody>
        </table>
      </div>

</div> 
  )
}

export default Component1