const mongoose=require('mongoose');
const User=require('../Models/User');
const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
router.post('/',(req,res,next)=>{
User.find({email:req.body.email}).exec().
then(user=>{
    if(user.length<1){
       return res.status(400).json({message:'no user'});
    }//it means no user with this email
    else{
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
           
            if(err){
               return res.status(400).json({message:'auth failed'});
            }if(result){
               
                return res.status(200).json({result:'authenticated'});
            }
           return res.status(400).json({message:'auth failed'});
        })
    }
})
.catch(err=>{ return res.status(400).json({message:err});
})
});

module.exports=router;
