const router = require('express').Router()
const User = require('../models/users.model')

router.get('/', (req, res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => err)
})

router.post('/add', (req, res)=>{
    const username = req.body.username;
    const age = req.body.age;

    const newUser = new User({
        username,
        age
    })

    newUser.save()
        .then(()=> res.json('New user has been saved...'))
        .catch(err => res.status(400).json('err: ' + err))
})

router.delete('/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>res.json(`Deleted id: ${req.params.id}`))
        .catch(err => res.status(400).json('err: ' + err))
})

module.exports = router