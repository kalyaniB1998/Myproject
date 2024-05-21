import React, { useRef } from 'react'
// import TopNavigation from './TopNavigation'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";

function Login() {
  let emailInputRef=useRef();
  let passwordInputRef = useRef();
  let dispatch = useDispatch();
  let navigate= useNavigate();
  let inputOnFocus=(inputRef)=>{
    inputRef.current.style.backgroundColor = "aqua";
   }
   let inputOnBlur= (inputRef)=>{
    inputRef.current.style.backgroundColor = "";
}
 

  let validateLoginFromServer =async()=>{
    let dataToSend = new FormData();
    dataToSend.append("email",emailInputRef.current.value);
    dataToSend.append("password",passwordInputRef.current.value);


    let reqOptions ={
      method:"POST",
      body:dataToSend,
    };

    let JSONdata = await fetch("http://localhost:6767/validateLogin",reqOptions);
    let JSOData = await JSONdata.json();
    // if(JSOData.status==="failure"){

    //   alert(JSOData.msg);
    // }else{
    //   dispatch({type:"login",data:JSOData.data[0]});
    //   navigate("/home");
    // }


    if(JSOData.status==="failure"){
      alert(JSOData.msg);
    }else{
      // localStorage.setItem("email",emailInputRef.current.value);
      // localStorage.setItem("password",passwordInputRef.current.value);
     localStorage.setItem("token",JSOData.token);
     console.log(JSOData);
     dispatch({type:"login",data:JSOData.data[0]});
      navigate("/home");
    }
  
  };
  return (
    <div className='div'>
    <div className='App'>
      <div className='login' >
      <div className='pulsediv'>
     
        <div className='div'>
        <img className='loginImg' src='./Images/BRN.png'></img>
       <form className='logindiv'>
        <h2 className='loginh1'>Sign In</h2>
        <input ref={emailInputRef}  onFocus={()=>{inputOnFocus(emailInputRef);}}
                     onBlur={()=>{inputOnBlur(emailInputRef)}} className='loginInput' placeholder=' E-mail'></input>
        <br></br>
        <br></br>
        <input ref={passwordInputRef}  onFocus={()=>{inputOnFocus(passwordInputRef);}}
                     onBlur={()=>{inputOnBlur(passwordInputRef)}} type='password' className='loginInput' placeholder='Password'></input>
        <br></br>
        <br></br>
        <button type='button' className='loginButton' onClick={()=>{
          validateLoginFromServer();
          // navigate("home")
        }}>LOGIN</button>
        <br></br>
        <br></br>
        <h4 className='loginsignup' onClick={()=>{
          navigate('/Signup')
        }} >CREATE AN ACCOUNT</h4> 
        
       </form>
       </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login