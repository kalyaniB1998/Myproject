import React from 'react'
import { NavLink } from 'react-router-dom'
import TopNavigation from './TopNavigation'
function ManageUser() {
  return (
    <div className='App'>
<div className='pulsediv'> 
<div className='pulsebrn' >
<NavLink to="/Home" style={{color:"white"}}>Home</NavLink>
      <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
  </div>

  <div>
       <TopNavigation></TopNavigation>
       
       </div>

</div>
<br></br>
<br></br>
<div className='mUserdiv'>
  <button type='button'className='manageusers'>ManageUser</button>
  <table className='mtable'>
    <br/>
  <div style={{display:"flex",justifyContent:"end",margin:"10px"}}>
            <label style={{marginRight:"10px"}}> My Search :</label>
            <input style={{padding:"5px"}}></input>
        </div>
  <table className="user1">
 <thead>
  <tr>
    <th>ID</th>
    <th>Photography</th>
    <th className="firstname">FirstName</th>
    <th className="surname">SurName</th>
    <th className="email">Email</th>
    <th>MobileNo</th>
    <th className="role">Role</th>
    <th className="approve">Aprove</th>
    <th className="edit">Edit</th>
    <th className="delete">Delete</th>
    </tr>
    </thead>
     <tbody>
      <tr>
       <td>1</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>2</td>
       <img className='images' src="./images/profile.png" ></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>3</td>
       <img className='images'src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>4</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>4</td>
       <img className='images'src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>5</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>6</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>7</td>
       <img className='images'src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>8</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>9</td>
       <img className='images'src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
      <tr>
       <td>10</td>
       <img className='images' src="./images/profile.png"></img>
       <td>Student 211208</td>
       <td></td>
       <td>BRNstudent211208@gmail.com</td>
       <td>+123-1234567890</td>
       <td>Student</td>
       <td>211208</td>
       <td>Edit</td>
       <td>Delete</td>
      </tr>
     </tbody>
  </table>
  </table>
</div><br></br>
    </div>

  )
  }
export default ManageUser