const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        maxlength: 3
    }
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;