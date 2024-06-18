const express=require('express');
const cors= require('cors');
const app=express()
const {readdirSync}=require('fs');

const {db}=require('./db/db')

require('dotenv').config()

const PORT=process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors())

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))

// app.get('/',(req,res)=>{

//     res.send("Hello world")
// })

const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log("Listening to the port",PORT)
    })
}

server()