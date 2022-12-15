
const  router=require('express')
const passport=require('passport')
const Router=router(); 
console.log('1219')
require('dotenv').config()
const session=require('express-session');
require('./passport')
console.log('1212')
Router.use(passport.initialize())
Router.use(passport.session())

Router.get('/google',passport.authenticate('google',{scope:['profile','email']}));
Router.get('/success',(req,res)=>{
    res.send('call back success');
});

Router.get('/google/callback',passport.authenticate('google',{ failureRedirect: '/failed'}),
    function(req,res){
        res.redirect('/success');
    }
);

module.exports=Router;