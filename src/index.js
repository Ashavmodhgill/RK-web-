import express from 'express'
import {connect} from '../src/config/database.js'
import bodyParser from 'body-parser';


const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));

 
app.listen(3003, async()=>{
console.log("server started");
 await connect();
 console.log("DB connected")

})