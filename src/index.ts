import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app =express();

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const server = http.createServer(app);

server.listen(8080, ()=>{
    console.log(`Server running on Port 8080`); 
})

const MONGO_URL = 'mongodb+srv://manisha:manisha%40345@manishacluster.rqxufcu.mongodb.net/';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(()=>console.log('MONGO_DB CONNECTED!'));//how to do it without .then
mongoose.connection.on('error',(error: Error) => console.log(error));


app.use('/', router());