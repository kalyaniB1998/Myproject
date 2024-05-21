import React from 'react'
import TopNavigation  from './TopNavigation';
// import {useNavigate} from 'react-router-dom';

function Aboutus() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  // let navigate = useNavigate();
  return (
    <div>
        <div className='pulsediv'>
      <div className='pulsebrn'>
       <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
        </div>
        <div>
       <TopNavigation></TopNavigation>
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
        
      <div style={{marginBottom:"20px"}}> 
         <h1><u><strong style={{fontSize:"3rem"}}><strong className='b'>B</strong><strong className='r'>R</strong><strong className='b'>N</strong> Infotech</strong></u></h1></div>
         <br></br>
    <div style={{display:"inline-block",marginLeft:"200px"}}>
         <h8 style={{width:"300px", textAlign:"justify",display:"inline-block",direction:"unset", marginRight:"100px",}}><h1 style={{fontFamily:"initial"}}><strong><u>Address</u></strong></h1> 2nd & 3rd Floor,Amma Nilayam,Jai Hind Enclave,Beside Axis Bank & Bloom Hitech, Ayyappa Society,Madhapur, Hyderabad - 500081 <br/><strong>Telephone:</strong> 040-48508586<br/>
         
         <strong>Contact:</strong> +91-9966309900<br/>
         <strong>E-mail: info@brninfotech.com</strong></h8>
         <h5><a href='https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=4d50ecf86976fd48&bih=719&biw=384&hl=en&sxsrf=ADLYWIKP4XOZNUkKS5IX8QVwNNvQirP5dQ%3A1715102160485&q=BRN%20Infotech&ludocid=2683529913168669701&ibp=gwp%3B0%2C7&lsig=AB86z5U0abYuvUIvNcRozwn8MT41&kgs=ff9bf50628d77d93&shndl=-1&shem=lsp&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2'>Click Here for Map</a></h5>
       </div>
       
 <div style={{width:"620px",textAlign:"justify",fontFamily:"initial",display:"inline-block",marginLeft:"90px"}}>
  <h1><u>About Us</u></h1>
        <h7 style={{width:"500px",textAlign:"justify",fontFamily:"initial",display:"inline-block"}}>BRN Infotech is a forerunner in training for Web Mobile Technologies like Apple iPhone,Google Android and Windows 8 Applications Development. We have trained 100's of students in India and conducted many corporate trainings in Leading IT Companies.Our experience in Mobile domain is outstanding and we have customized courses for Job Seekers, Corporations & Working Professionals. Our courses are designed and delivered to suit all levels of ability, so you can be sure that our training is matched precisely to your requirement. We offer 100% Job Assistance Courses for Job Seekers. According to recent news in a leading Business Magazine, the Indian Mobile market would require thousands of Professionals every year. We will help you to find your dream job easily.</h7>
        </div>
        
        </div>
    </div>
  )
}

export default Aboutus