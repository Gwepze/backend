const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Users = require('./routes/users')

const app = express();

app.use(cors())
app.use(express.json())

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', ()=>{
    console.log("Connected to mongo database...")
})

app.get('/', (req, res)=>{
    res.send("Yoyuoyoy")
})

app.use('/users', Users)

app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`)
})