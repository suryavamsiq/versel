const express=require('express')
const session=require('express-session')
const app=express()
app.listen(4000)
app.use(express.json())
app.use(session({
    secret:'dffffbfbbbf',
    resave:false,
    saveUninitialised:false
}))
app.get('/cart',(req,res)=>{
    const {cart} =req.session
    if(!cart){
        res.send('you dont have cart items')

    }
    else{
        res.send(cart)
    }
})
app.post('/cart',(req,res)=>{
    const {item,quantity}=req.body
    const cartItems={item,quantity}
    const cart =req.session.cart
    if(cart){
        req.session.cart.item.push(cartItems)


    }
    else{
        req.session.cart={
            items:[cartItems]
        }
    }
    res.send(200)
})