const express=require('express');
const router=express.Router();
const multer=require('multer');
const VideoDetail=require('../Models/VideoDetail');
//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage ,
limits:{
    fieldSize:1024*1024*50,//50mb
}
})


router.post('/',upload.single('file'),(req,res,next)=>{
  
  const videoDetails = new VideoDetail({
    uploader_name: req.userData.data.firstName,
    upload_title: req.file.filename.replace(/ /g, '_'),
    video_path: 'http://127.0.0.1:3000' + '/api/videos/' + req.file.originalname.replace(/ /g, '_'), 
   
  });
  videoDetails
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
    return res.json({message:'video uploaded'})
});
module.exports=router;