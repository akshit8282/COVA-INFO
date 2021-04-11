const express=require('express');
const router=express.Router();
const multer=require('multer');
const thumbnailGenerator = require('../helper/videothumbnail');
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


router.post('/', upload.single('file'), (req, res, next) => {
  thumbnailGenerator.generateThumbnail(
    // /api/videos is made publically available in App.js
    'http://127.0.0.1:3000'+ '/api/videos/' + req.file.filename.replace(/ /g, '_'), 
    req.file.filename.replace(/ /g, '_'),
    req.userData.data.firstName);
  res.status(200).json({
    message: 'Video upload successful'
  });
});
module.exports=router;