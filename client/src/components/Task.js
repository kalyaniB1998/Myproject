import React from 'react'

import {  NavLink } from 'react-router-dom'
import DetailNavigation from './DetailNavigation'


function Tasks() {
  return (
  <div className='App'>
    <div className='pulsediv'> 
    <div className='pulsebrn' >
<NavLink to="/Home" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
 <DetailNavigation/>
</div>

    </div>
  )
}

export default Tasks