const express=require('express')
const finaal=require('./routes/routess')
const passport=require('passport')
const finaal1=require('./market')
const auth=require('./auth')
const session=require('express-session')
const app=express()
const google=require('./googleA')
require('dotenv').config()

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));

const port =process.env.port || 5000;  
app.listen(port,console.log('app is running'+port))
require('./routes/data')
app.use(google)


app.use(express.json())
