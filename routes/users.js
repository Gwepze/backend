const User = require('../models/users.model');
const router = require('express').Router();

router.get('/', (req, res)=>{
    User.find()
        .then(users=> res.json(users))
        .catch(err => res.status(400).res.json( "Error: " + err))
})

router.post('/add', (req, res)=>{
    const username = req.body.username;
    const age = req.body.age;

    const newUser = new User({
        username,
        age
    })

    newUser.save()
        .then(()=> res.json("User successfully saved to database"))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;