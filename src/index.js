import express from 'express'
import cors from 'cors'
import {connect} from '../src/config/database.js'
import bodyParser from 'body-parser';
import apiroutes from './routes/index.js'
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
  passportAuth (passport);

const app = express();
 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(passport.initialize());
 app.use('/api', apiroutes)
 
app.listen(3003, async()=>{
console.log("server started");
 await connect();
 console.log("DB connected")

})