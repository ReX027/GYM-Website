const express = require("express"); // Importing express module
const path = require("path"); //module to join the path of pug file to express app
const fs = require('fs'); //file system module to read/write file

const app = express(); // Intializing express app
const port = 80 // setting port to default as 80

//database connection
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Bookclass');
}
// Defining mongoose schema
const BookSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    gender: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
});
const Book = mongoose.model('Book', BookSchema);
// Express configuration
app.use('/static',express.static('static')); // For serving static files
app.use(express.urlencoded()); //middleware to config html file in express

// Pug configuration
app.set('view engine','pug'); //setting template engine as pug
app.set('views',path.join(__dirname,'views')) //setting the views directory

//Endpoints
app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
})
app.get('/Classes',(req,res)=>{
    res.status(200).render('Classes.pug');
})

app.post('/',(req,res)=>{
    var myData = new Book(req.body);
    myData.save().then(()=>{
        res.status(200).send("Your item has been saved in the database");
    }).catch(()=>{
        res.status(400).send('Item was not saved to the database'); // Send JSON response
    })
    // res.status(200).render('home.pug');  //status 200 means successful request.
})
// listen to server // starting server
app.listen(port,()=>{

    console.log(`The application started successfully on port ${port}`);
})
