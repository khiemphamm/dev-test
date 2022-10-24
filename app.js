import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

import userRouter from './src/routes/userRoutes.js'


const app = express();
dotenv.config();
app.use(express.json({limit:'50mb'}));
app.use(cors());
app.use(cookieParser());

//connecting mongoose db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`DB Connect`)
});
mongoose.connection.on('Error',err=>{
    console.log(`Error : ${err.message}`, )
})


//routes
app.use('/user', userRouter);

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Localhost: ${port}`)
})