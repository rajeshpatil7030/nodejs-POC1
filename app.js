const express = require('express');
const path = require('path');

const app = express();

const router = express.Router()
// sendFile will go here
app.get('/', function(req, res) {
    res.redirect('/home');
  });


// sendFile will go here
router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.html'));
  });


router.get("/details",(req,res,next)=>{
    console.log('Request URL:', req.originalUrl)
    req.customDate = new Date()
    next()
},(req,res,next)=>{
    console.log('Request Type:', req.method)
    next()
},(req,res)=>{
    res.send("<ul> <li><a href='/home'>Home</a></li><h1>" + req.customDate + "</h1></ul>")
})


app.use('/',router)

app.listen(3000,(req,res)=>{
    console.log('server running on 3000')
})