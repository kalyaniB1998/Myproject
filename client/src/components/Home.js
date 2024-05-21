import React from 'react'
// import TopNavigation from './TopNavigation'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  let navigate= useNavigate();
  let storeObj = useSelector((store)=>{
    return store;
  });
  console.log(storeObj);
  return (
    <div>
         <div className='pulsediv'>
      <div className='pulsebrn'>
       <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
        </div>
        <nav className='ranknav'>
       {/* <TopNavigation></TopNavigation> */}
       <button type='button'  onClick={()=>{
          navigate('/')
        }} >SIGN IN</button> 
         <button type='button'   onClick={()=>{
          navigate('/Signup')
        }} >SIGN UP</button> 
         <button type='button'  onClick={()=>{
          navigate('/AboutUs')
        }} >ABOUT US</button> 
        </nav>
         
        </div>
        <div className='photodiv'>
       <img className='photo' src='./Images/photo.png'></img>
       <h4 style={{fontSize:"2rem",marginTop:"100px",fontFamily:"sans-serif",color:"GrayText"}}>Web Development & Mobile Practical Training</h4>
 
       <div className='icon'>
       <img src='./Images/facebook.jpg'
           onClick={() => handleClick('https://www.facebook.com/brninfotech?mibextid=ZbWKwL')}></img>
        <img src='./Images/linkdin.png'
        onClick={() => handleClick('https://www.linkedin.com/in/brn-infotech-b6606546/')}></img>
        <img src='./Images/youtube.png'></img> 
        <img src='./Images/whatsapp.png'></img>
        <h1 style={{display:"flex",marginTop:"5px",fontFamily:"cursive",fontSize:"1.3rem"}}>9966309900</h1>
        </div>
        </div>
        <div>
        <h2>Hi,Welcome to {storeObj.loginDetails.firstName}  {storeObj.loginDetails.lastName}</h2>
        </div>
        <div className='hDiv'>
      <table className='mtable'>
         <caption style={{backgroundColor:"rgb(80,180,230)",color:"white",padding:"7px",fontSize:"1.4rem"}} >New Batch on <em>MERN FULL STACK & REACT NATIVE</em> Practical Training</caption>
          <thead className='Hth'>
          
            <th className='Hth'>Course Name</th>
            <th>Mode</th>
            <th>Date & Timing</th>
            <th>Location</th>
          </thead>
          <tbody >
            <tr >
              <td className='Htd'>MERN FULL STACK DEVELOPMENT & REACT NATIVE
             WEB AND MOBILE DEVELOPMENT</td>
             <td>Offline Classroom / Online Practical Training</td>
             <td>New batch starts from 22 April @ 11:00 am onwards
             8 hours Practical Training</td>
             <td><a href='https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=4d50ecf86976fd48&bih=719&biw=384&hl=en&sxsrf=ADLYWIKP4XOZNUkKS5IX8QVwNNvQirP5dQ%3A1715102160485&q=BRN%20Infotech&ludocid=2683529913168669701&ibp=gwp%3B0%2C7&lsig=AB86z5U0abYuvUIvNcRozwn8MT41&kgs=ff9bf50628d77d93&shndl=-1&shem=lsp&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2'>Click Here for Map</a> BRN Infotech,Hyderabad</td>
             </tr>
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home