const express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = process.env.PORT || 3000;


var urlencodedParser = bodyParser.urlencoded({ extended: false });

const request = require('request');

var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/particle'); 
app.set('view engine', 'hbs');

// respond with "hello world" when a GET request is made to the homepage

app.get('/', (req, res) => {
 // let url = 'https://reqres.in/api/users/2';
  request({
    url: 'https://reqres.in/api/users?page=2',
    json: true
  }, (error, response, body)=>{
    console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.render('index.hbs', {body : body.data[0], body2: body.data[2], body1: body.data[1]});
    });    
});

app.get('/developer', (req, res) => {
  // let url = 'https://reqres.in/api/users/2';
   request({
     url: 'https://reqres.in/api/users?page=1',
     json: true
   }, (error, response, body)=>{
     console.log('error:', error); // Print the error if one occurred
     // console.log('statusCode:', response && response.statusCode); 
     console.log(body); // Print the HTML for the Google homepage.
     res.render('developer.hbs', {data : body.data});
     });    
 });

app.listen(port, () => { 
  console.log(`app listening to app js to port ${port}`);
  });