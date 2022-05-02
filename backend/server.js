const express = require('express');
const colors=require('colors');
const cors=require('cors')
const connectDB = require('./config/db')
const { errorHandler }=require('./middleware/errorMiddleware')
require('dotenv').config();
const app = express();
connectDB()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port=process.env.PORT || 3000; 

 app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port,()=>{console.log("server is running on port "+port)});


