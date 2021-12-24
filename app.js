const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

//express uses public to look for html/css/images
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen((3000), () => {
    console.log("Listening on localhost port 3000")
})

app.get('/', (req,res) => {
    res.render('landing.ejs')
})