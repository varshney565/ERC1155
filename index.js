if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const body_parser = require("body-parser");
app.use(body_parser.json());

require('./route/route')(app);

app.listen(process.env.PORT,()=>{
    console.log("Application started running at port number ",process.env.PORT);
});