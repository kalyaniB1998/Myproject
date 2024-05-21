import React from 'react'
import { NavLink } from 'react-router-dom';
function TopNavigation() {
    let activeLink=(obj)=>{
        if(obj.isActive===true){
        return({color:"black",backgroundColor:"white"})
      }};
    
  return (
    <div className='App'>
        <nav className='ranknav'>
        <NavLink className='rank' style={(obj)=>{
          return activeLink(obj);
             }} 
             to="/">Login</NavLink>

             <NavLink className='rank' style={(obj)=>{
              return activeLink(obj);
             }}
              to="/signup">Signup</NavLink>

              <NavLink className='rank' style={(obj)=>{
              return activeLink(obj);
             }}
              to="/home">Home</NavLink>

               <NavLink className='rank'
            to="/Ranking" style={(obj)=>{
              return activeLink(obj);}}>Task</NavLink>

              <NavLink className='rank' style={(obj)=>{
              return activeLink(obj);
             }}
            to="/manageuser">ManageUser</NavLink>

            <NavLink className='rank' style={(obj)=>{
              return activeLink(obj);
             }}
            to="/aboutus">AboutUs</NavLink>

            <NavLink className='rank' style={(obj)=>{
              return activeLink(obj);
             }}
            to="/">Logout</NavLink>
            

        </nav>
        
    </div>
  )
}

export default TopNavigation