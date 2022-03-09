const express = require('express')
const app = express()
const mongoose =require('mongoose')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 4000

mongoose.connect('mongodb://127.0.0.1:27017/traineDB', { useNewurlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log('connection is done');
})

const userRoute = require('./src/routes/userRoute');
app.use('/user',userRoute);



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})









