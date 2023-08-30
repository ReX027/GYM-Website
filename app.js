const express = require("express"); // Importing express module
const path = require("path"); //module to join the path of pug file to express app
const fs = require('fs'); //file system module to read/write file

const app = express(); // Intializing express app
const port = 80 // setting port to default as 80

// Express configuration
app.use('/static',express.static('static')); // For serving static files
app.use(express.urlencoded()); //middleware to config html file in express

// Pug configuration
app.set('view engine','pug'); //setting template engine as pug
app.set('views',path.join(__dirname,'views')) //setting the views directory

//Endpoints
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})

app.post('/',(req,res)=>{
    firstname = req.body.firstname;
    lastname = req.body.lastname;
    email = req.body.email;
    age = req.body.age;
    address = req.body.address;
    city = req.body.city;
    state = req.body.state;
    zip = req.body.zip;
    let outputwrite = `Name of client is ${firstname} ${lastname} , email address - ${email} , ${age} years old ,residing at ${address},${city},${state},${zip}`;
    fs.writeFileSync('output.txt',outputwrite);
    const params = {'message':'Your form has been submitted successfully'};
    res.status(200).render('index.pug',params);  //status 200 means successful request.
})

// listen to server // starting server
app.listen(port,()=>{
    
    console.log(`The application started successfully on port ${port}`);
})
