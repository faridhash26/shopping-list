const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





const app = express();



// body parser middleware 
app.use(bodyParser.json());


// dbconfig
const db = require('./config/keys').mongoUrl;

// connect to mongo
mongoose.connect(db , {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Mongodb  connected ...') )
.catch(err =>  console.log (err));




// use routes 
app.use('/api/items' ,   require('./routes/api/items'));



const port = process.env.Port || 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`));