const mongoose=require('mongoose')
mongoose
    .connect('mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.nucrbbe.mongodb.net/Practice?retryWrites=true')
    .then(()=> console.log('connected to db'));

