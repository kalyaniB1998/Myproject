import React from 'react'
import { NavLink } from 'react-router-dom'
function DetailNavigation() {
  let activeLink=(obj)=>{
    if(obj.isActive===true){
    return({color:"black",backgroundColor:"white"})
  }};

  return (
    <div>
        <nav className='ranknav'>
       
      <NavLink style={(obj)=>{
  return activeLink(obj);
 }} to="/ranking" className='rank'>Ranking</NavLink>

 <NavLink style={(obj)=>{
  return activeLink(obj);
 }} to="/feeReport" className='rank'>Fee Report</NavLink>

 <NavLink style={(obj)=>{
  return activeLink(obj);
 }}  to="/batchesSummary" className='rank'>Batches Summary</NavLink>
 <NavLink style={(obj)=>{
  return activeLink(obj);
 }}  to="/request" className='rank'>Requests</NavLink>
 <NavLink style={(obj)=>{
  return activeLink(obj);
 }}  to="/message" className='rank'>Messages</NavLink>
 

</nav>
    </div>
  )
}

export default DetailNavigation