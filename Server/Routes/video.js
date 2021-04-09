const express=require('express');
const bcrypt=require('bcrypt');
const videoDetails=require('../Models/VideoDetail');
const router=express.Router();
router.get('/',(req,res,next)=>{
    videoDetails.find({},(err,result)=>{
        if(err){
            return  res.status(400).json({message:err});

        }
        if(res){
           return  res.status(400).json({result:result});
        }
    })
})
router.get('/:id',(req,res,next)=>{
    console.log(req.params.video_path);
    videoDetails.find({id:req.params.video_path},(err,result)=>{
        if(err){
            return  res.status(400).json({message:err});

        }
        if(res){
           return  res.status(400).json({result:result});
        }
    })
})
module.exports=router