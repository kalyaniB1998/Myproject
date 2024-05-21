const express = require("express");
const cors = require("cors");
 const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
 const mongoose =require("mongoose");
 const jwt = require("jsonwebtoken");
 const bcrypt = require('bcrypt');
let app = express();
app.use(cors());
app.use("/uploads",express.static('uploads'));

app.use(express.static(path.join(__dirname,"./client/build")));


const multer =  require ("multer");
let connectToMDB= async()=>{

    try{
        await mongoose.connect("mongodb+srv://kalyaniambhore98:kalyaniambhore98@cluster0.ylzksoz.mongodb.net/myProject?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Succesfully Connected to Dtatabase");
    }catch(err){
        console.log("Unable to connected to Database");
    };
}
let userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
    profilePic:String,
});
let User = new mongoose.model(
    "user",userSchema );
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "uploads");
        },
        filename: function (req, file, cb) {
            console.log(file);
      
          cb(null, `${Date.now()}_${file.originalname}`);
        }
      })
      
      const upload = multer({ storage: storage });

 
      app.post("/Signup",upload.single("profilePic"), async(req,res)=>{
        console.log("received data");
        console.log(req.body);
        console.log(req.file);
        
        let hashedPassword =await bcrypt.hash(req.body.password,10);
        
       try{
        let newUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:hashedPassword,
            profilePic:req.file.path,
        });


        let userData = await User.find().and({email:req.body.email})

        if(userData.length>0){
          res.json({status:"success",msg:"user account already exists"});
         }else{
          await User.insertMany([newUser]);
          console.log("user created Successfully");
          res.json({status:"success",msg:"user created Successfully"});

         }
       }catch(err){ 
        console.log("Unable to insert user into DB");
      console.log(err);
         res.json({status:"failure",msg:"Unable to create user"});
    }
        
    });
app.post("/validateLogin",upload.none(),async(req,res)=>{
  console.log(req.body);

 let userData = await User.find().and({email:req.body.email})
 if(userData.length> 0){
  let isPassword = await bcrypt.compare(req.body.password,userData[0].password)
  if(isPassword===true){
     
      let encryptedCredentials = jwt.sign({email:userData[0].email,password:userData[0].password},"KGB"
      );
      console.log(encryptedCredentials);

    res.json({status:"success",data:userData,token:encryptedCredentials,});

  }else{
    res.json({status:"failure",msg:"Invalid Password"})
  }
 }else{
res.json({status:"failure",msg:"invalid Username"})}


});
app.listen(6767,()=>{
    console.log("listening to port 6767");
});
connectToMDB();