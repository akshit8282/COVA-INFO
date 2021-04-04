const express=require('express');
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');

app.use(morgan());
app.use(cors());
//bodyparser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
//setting mongoose
mongoose.connect("mongodb://localhost/VideoServer", {
  useNewUrlParser: "true",
  useUnifiedTopology: 'true',
  
});
mongoose.Promise=global.Promise;
mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })

app.use('/api/signup',require('./Routes/signup'));
app.listen(3000,()=>{
    console.log('app is running on 3000');
})