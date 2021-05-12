const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')
//const QueryString = require('qs');

const User = new Schema({
    name : String,
    email: String,
    password: String,
})

User.pre('save', function (next) {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(this.password, salt)  
        this.password = hash
        next()
    } catch (err) {
        next(err)
    }
})

module.exports = model('User', User)