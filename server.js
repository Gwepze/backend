const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users')

require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;



app.use(cors())
app.use(express.json())

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log(`Successfully connected to Mongo Database` )
}).on('error', function(error){
    console.log('Error is: ', error);
});

app.get('/', (req, res)=>{
    res.send('dfasdfasf')
})

app.use('/users', usersRoute)

app.listen(PORT, ()=> {
    console.log(`Connected to port ${PORT}`)
})