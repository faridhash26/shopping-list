const express = require('express');
const mongoose = require('mongoose');
const config = require('config');




const app = express();



// body parser middleware 
app.use(express.json());


// dbconfig
const db = config.get("mongoUrl");

// connect to mongo
mongoose.connect(db , {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true})
.then(()=> console.log('Mongodb  connected ...') )
.catch(err =>  console.log (err));




// use routes 
app.use('/api/items' ,   require('./routes/api/items'));
app.use('/api/users' ,   require('./routes/api/users'));
app.use('/api/auth' ,   require('./routes/api/auth'));


const port = process.env.Port || 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`));