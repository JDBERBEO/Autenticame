const User = require('./User')

const getUsers = async(req,res) => {
    const users = await User.find().lean();
    console.log(users)
    {'estos usres: ', users}
    res.render('users', {users})
}

const getRegister = (req, res) => {
     res.render('RegisterForm')
}

const createUser = async(req, res) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save();

    console.log(user)
    res.redirect('/login')
}

const getLogin = (req, res) => {
    res.render('LogInform')
}

module.exports = {
    getUsers,
    getRegister,
    createUser,
    getLogin 
}