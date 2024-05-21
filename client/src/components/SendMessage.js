// import React, { useState } from 'react'
 import { Placeholder } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import Accordion from 'react-bootstrap/Accordion';

function Sendmessage() {
    let navigate = useNavigate();
   
  return (
    <div className='App' >
      
    <form className='smsgForm'>
        
        <h1 className='smsgh1'  >Review and Get Instalment</h1>
           
            
                <label className='smsgLabel' style={{marginRight:"70px",marginLeft:"-230px"}}>Select</label>
            <div className='smsgoption'  >
             
                <option>In Progress Batch</option>
                <option>2305</option>
                <option>2306</option>
                <option>2307</option>
                <option>2308</option>
                <option>2309</option>
               
               </div>
            
        
                <label className='smsgLabel' style={{marginRight:"50px"}}>Category </label>
                <select >
                    <option>Select...</option>
                    <option>Job Opportunity</option>
                    <option>Fee Reminder</option>
                    <option>Irregular</option>
                    <option>Late Of Ofc</option>
                    <option>Appreciation</option>
                </select>
          
            
                <label className='smsgLabel' >Subject</label>
                <input style={{marginLeft:"30px",width:"200px"}}></input>
            
            <Placeholder style={{marginRight:"100px"}}>Please enter subject</Placeholder>
            
                <label className='smsgLabel'style={{marginLeft:"-60px"}}>Message</label>
               <textarea className='smsgText'></textarea>
            
            <Placeholder >Please describe message in detail</Placeholder>
         
            
            <div className='smsgbutton'>
            
            <button>Send Message</button>
            <button type='button' onClick={()=>{
                navigate("/Message")
            }}>Cancel</button>
          
            </div>
            
        </form>
        
       
      </div>    
   
  )
}

export default Sendmessage