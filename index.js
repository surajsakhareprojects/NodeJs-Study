const express = require('express');
const app = express();
const port = process.env.port | 7000;
const userRouter = require('./route/users')
const { connectMongoDB } = require('./connection/index')
const { logResponse } = require('./middlewares/logs-middleware');



// middleware - plugins
connectMongoDB('mongodb://localhost:27017/app-01');
app.use(logResponse('./log.txt'));

// important for routing req.body.
app.use(express.urlencoded({extended: false}));

// Router
app.use('/user', userRouter);   



app.listen(port, console.log('Port listning at 7000'));
