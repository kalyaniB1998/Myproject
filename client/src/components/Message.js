import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import DetailNavigation from './DetailNavigation'

function Messages() {
 
  let navigate = useNavigate();
  return (
    <div className='App'>
<div className='pulsediv'> 
<div className='pulsebrn' >
<NavLink to="/" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>
        <DetailNavigation/>
       
</div>


<div className='msgdiv'>
<button type='button'className='msgbutton' onClick={()=>{
    navigate("/Sendmessage");}}>Send Message</button>
   
      
   
  <table className='mtable'>
  <caption className='msgbutton'>1,2,3,4,5,6</caption>
 
  <table className='msgtable'>
   <thead >
    <tr>
      <th>Msg UID.</th>
      <th>Category</th>
      <th>Subject</th>
      <th>Sent to</th>
      <th>read/unread</th>
      <th>Sent By</th>
      <th>Delivered on</th>
    </tr>
    </thead>
    <tbody onClick={()=>{
          navigate("/SubmissionDetails");
        }}>
    <tr  className='msgtr'>
        <td>6</td>
        <td >Information</td>
        <td>rhkhtjkrhk</td>
        <td>2305</td>
        <td>0 of 0</td>
        <td></td>
        <td>Tue, 21-Mar-2023 01:10:13 pm</td>
      </tr>
      <tr  className='msgtr'>
        <td>5</td>
        <td>Job Aportunity</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>4</td>
        <td>Fee Reminder</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>3</td>
        <td>Irregular</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>2</td>
        <td>late of Office</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr  className='msgtr'>
        <td>1</td>
        <td>Apreciation</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      
      </tbody>
      </table>
   
  </table>
  </div>
  </div>

    
  )
}

export default Messages