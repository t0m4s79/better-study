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
    res.render('index.ejs')
})

/**************************************/
//              ROUTING
/**************************************/

app.get('/dashboard', (req,res) =>{
    res.render('dashboard.ejs')
})

app.get('/files', (req,res) =>{
    res.render('files.ejs')
})

app.get('/calendar', (req,res) =>{
    res.render('calendar.ejs')
})

app.get('/statistics', (req,res) =>{
    res.render('statistics.ejs')
})

app.get('/settings', (req,res) =>{
    res.render('settings.ejs')
})

app.get('/studyplan', (req,res) =>{
    res.render('studyplan.ejs')
})

app.get('/signup', (req,res) =>{
    res.render('signup.ejs')
})

app.get('/login', (req,res) =>{
    res.render('login.ejs')
})