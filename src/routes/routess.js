const Router =require('express')

const router1=Router()

const list=[{
    item:'apple',
    quantity:20,
},
{
    item:'banana',
    quantity:34,
}]

router1.get('/surya',(req,res,next)=>{
    res.send(list)
    next()
});
router1.post('/surya',(req,res)=>{
     console.log(req.body)
     list.push(req.body)
     res.send(202)
});
router1.get('/surya/:items',(req,res)=>{
    const item=req.params.item
    const final=list.find((g)=>g.item===item)
    res.send(final)

});

module.exports=router1
