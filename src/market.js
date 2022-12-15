const Router=require('express')
const router=Router()


const list=[{
    id:1,
    miles:0.3,
},
{
    id:2,
    miles:4,

},
{
    id:3,
    miles:5,
}];

router.get('/surya',(req,res)=>{
    const miles =req.query.miles
    const final=parseInt(miles)
    const todo=list.filter((a)=>a.miles<=final)
    res.send(todo)
});
module.exports=router;
