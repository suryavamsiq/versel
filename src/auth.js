const {Router, request}=require('express')
const session=require('express-session')
const router=Router()
const User=require('./routes/schema')
const {hashPassword}=require('./routes/helpers')
router.post('/login',(req,res)=>{
    const{username,password}=req.body;
    if(username&&password){
        if(req.session.user){
            res.send(req.session.user);
        }else{
            req.session.user={
                username,
            };
            res.send(req.session) 
        }
      
    }
});
router.post('/login',async (req,res)=>{
    const {username,password,email}=req.body;
    const userDB= await User.findOne({ $and: [{password},{ email }] });
    if(userDB)
    {
        res.status(400).send({msg: "user already exists"})
    }
    else{
        
        res.send('please go to sign up page erri puka');
    };
   

});
router.post('/signup',async (req,res)=>{
    const {username,password,email}=req.body;
    const userDB= await User.findOne({ $or: [{username},{ email }] });
    if(userDB)
    {
        res.status(400).send({msg: "user already exists"})
    }
    else{
        const newUser= await User.create({username,password,email});
        newUser.save();
        res.send('success created');
        
    };

})

module.exports=router;                                                      
