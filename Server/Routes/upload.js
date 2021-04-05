const express=require('express');
const router=express.Router();
const multer=require('multer');
//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage ,
limits:{
    fieldSize:1024*1024*50,//50mb
}
})


router.post('/',upload.single('file'),(req,res,next)=>{
res.status(200).json({
message:'vid uploaded'
})
});
module.exports=router;