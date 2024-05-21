import { useRef,useState } from 'react';
import React from 'react'
// import TopNavigation from './TopNavigation'
import {useNavigate} from 'react-router-dom';


function Signup() {
  let firstNameInputRef = useRef();
        let lastNameInputRef = useRef();
        let ageInputRef = useRef();
        let emailInputRef = useRef();
        let passwordInputRef = useRef();
        let profilePicInputRef = useRef();
        let maleInputRef = useRef();
        let femaleInputRef = useRef();
        let otherInputRef = useRef();
        let marriedInputRef = useRef();
        let singleInputRef = useRef();
  
  let navigate= useNavigate();
  let [imageURL,setImageURL]= useState("/Images/Profile.png");

  let inputOnFocus=(inputRef)=>{
    inputRef.current.style.backgroundColor = "skyblue";
   }
   let inputOnBlur= (inputRef)=>{
    inputRef.current.style.backgroundColor = "";
}


  let sendSignupDataTOServerFD = async()=>{
    let dataToSend = new FormData();
  dataToSend.append("firstName",firstNameInputRef.current.value);
  dataToSend.append("lastName",lastNameInputRef.current.value);
  dataToSend.append("age",ageInputRef.current.value);
  dataToSend.append("email",emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);
  dataToSend.append("male",maleInputRef.current.value);
  dataToSend.append("female",femaleInputRef.current.value);
  dataToSend.append("other",otherInputRef.current.value);
  dataToSend.append("married",marriedInputRef.current.value);
  dataToSend.append("single",singleInputRef.current.value);

  for(let i=0;i<profilePicInputRef.current.files.length;i++){
  dataToSend.append("profilePic",profilePicInputRef.current.files[i]);
}
    let reqOption={
    method:"POST",
   body:dataToSend,
   };
   let JSONdata = await fetch("http://localhost:6767/Signup",reqOption);
   let JSOData = await JSONdata.json();
   alert(JSOData.msg);
   console.log(JSOData);
  //  navigate("/");
}

  return (
   <div className='pulsediv'>
   <div className='App'>
   <div className='pulsebrn'>
       <h1><strong className='pulse'>Pulse.</strong><strong className='b'>B</strong><strong className='r'>R</strong><strong className='n'>n</strong></h1>
        </div>
        <div className='signupDiv'>
      
        <div >
       
       <div className='sformDiv' >
       <form className='signForm'>
       <h2 className='loginh1'>SignUp</h2>
    
       <div  className='sForm' >
        <input placeholder='First Name' ref={firstNameInputRef}
           onFocus={()=>{inputOnFocus(firstNameInputRef);}}
           onBlur={()=>{inputOnBlur(firstNameInputRef)}}></input>
       </div>
       <div  className='sForm'>
        <input placeholder='Last Name' ref={lastNameInputRef}
          onFocus={()=>{inputOnFocus(lastNameInputRef);}}
          onBlur={()=>{inputOnBlur(lastNameInputRef)}}></input>
       </div>


       <div className='sForm'>
         <input placeholder='Age'  ref={ageInputRef}
          onFocus={()=>{inputOnFocus(ageInputRef);}}
          onBlur={()=>{inputOnBlur(ageInputRef)}}></input>
                </div>
     <div>
      <label className='genderDiv' style={{marginLeft:"5%"}}>Gender  : </label>
        <label for="male" ref={maleInputRef}>Male</label>
        <input className='genderDiv' type='radio' name='identity'></input>
        <label for="female">Female</label>
        <input  ref={femaleInputRef} className='genderDiv' type='radio' name='identity'></input>
        <label for="other" ref={otherInputRef}>Other</label>
        <input  ref={otherInputRef} className='genderDiv' type='radio' name='identity'></input>
       </div>


       <div className='labelDiv'>
       <label className='labelDiv' style={{marginLeft:"11%"}}>Marrital Status  : </label>
        <label for="Married">Married</label>
        <input ref={marriedInputRef} className='labelDiv' type='radio' name='id'></input>
        <label for="single">Single</label>
        <input ref={singleInputRef} className='labelDiv' type='radio' name='id'></input>
       </div>

       {/* <div  className='sForm'>
     
       <input type='file'  onChange={()=>{
          let selectedFilePath = URL.createObj(profilePicInputRef.current.file[0]);
          setImageURL(selectedFilePath);
          console.log(selectedFilePath);
         }}></input>
       </div> */}
       <div>
                    {/* <label >Profile Pic</label> */}
                    <input type='file' ref={profilePicInputRef}
                     onFocus={()=>{inputOnFocus(profilePicInputRef);}}
                     onBlur={()=>{inputOnBlur(profilePicInputRef)}} 
                     onChange={()=>{
                        let selectedFilePath = URL.createObjectURL(profilePicInputRef.current.files[0]);
                        setImageURL(selectedFilePath);
                        console.log(selectedFilePath);
                     }}></input>
                </div>
      
       <img className='signupimg' src={imageURL}></img>
       
       <div  className='sForm'>
        <input placeholder='Mobile Number'></input>
       </div>
       <div  className='sForm'>
       <input placeholder='E-mail' ref={emailInputRef}
                    onFocus={()=>{inputOnFocus(emailInputRef);}}
                    onBlur={()=>{inputOnBlur(emailInputRef)}}></input>
       </div>
       <div  className='sForm'>
        <input placeholder='password' ref={passwordInputRef}
                    onFocus={()=>{inputOnFocus(passwordInputRef);}}
                    onBlur={()=>{inputOnBlur(passwordInputRef)}}></input>
       </div>
      
       <button type='button' className='loginButton' onClick={()=>{
          // navigate('/')
          sendSignupDataTOServerFD();
        }}>SIGNUP</button>
        <button type='button' className='loginButton' onClick={()=>{
          navigate("/")
        }}>LOGIN</button>
      </form>
       </div>
       </div>
        </div>
        
    </div>
    </div>
  )
}

export default Signup