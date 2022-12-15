const Router=require('express')
const nodemailer=require('nodemailer')
const path=require('path')
const ehb=require('express-handlebars')
const bodyparser=require('body-parser')
const router=Router()

router.listen(9000,console.log('app is running'))
var otp;
otp=Math.random()
otp=otp*1000000
otp=parseInt(otp)
otp=JSON.stringify(otp)
console.log(otp)

router.use(bodyparser.urlencoded({extended : false}));
router.use(bodyparser.json());

var email;
let transporter=nodemailer.createTransport({
    host:'csurya@gmail.com',
    secure: true,
    port:9000,
    service:'gmail',
    auth:{
        user:'csurya073@gmail.com',
        pass:'ixgjpswjqnqjotkv',
    }
});
router.post('/sendmail',(req,res)=>{
    email=req.body.email;

        var mailoptions={
            to:req.body.email,
            subject:'otp for registration is',
            html:"<h3>***DONT SHARE THE OTP***</h3>"+otp,
        };
        transporter.sendMail(mailoptions,(error,info)=>{
            if (error) {
                return console.log(error);
            }
            res.send('otp send successfully')
            console.log('Message sent successfully: %s', info.messageId);   
            //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });


    });
router.post('/verify',(req,res)=>{
    user_otp=req.body.otp
    if(user_otp==otp){
        res.send('otp verified successfully')
    }
    else{
        res.send('otp missmatched')
    }
});
router.post('/verify_resend',(req,res)=>{
    user_otp=req.body.otp
    if(user_otp==resend_otp){
        res.send('otp verified successfully')
    }
    else{
        res.send('otp missmatched')
    }
});

router.post('/resend',(req,res)=>{
    resend_otp=Math.random()
    resend_otp=resend_otp*1000000
    resend_otp=parseInt(resend_otp)
    resend_otp=JSON.stringify(resend_otp)
    console.log(resend_otp)
    email=req.body.email;

        var mailoptions={
            to:req.body.email,
            subject:'otp for registration is',
            html: "<h3>***DONT SHARE THE OTP***</h3>"+resend_otp,
        };
        transporter.sendMail(mailoptions,(error,info)=>{
            if (error) {
                return console.log(error);
            }
            res.send('otp sent again successfully')
            console.log('Message sent successfully: %s', info.messageId);   
            //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    

})


module.exports=router