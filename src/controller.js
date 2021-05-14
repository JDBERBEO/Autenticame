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
    res.render('LogInForm')
}

const getUser = async (req, res) => {
    const {email, password } = req.body
    const user = await User.findOne({email})
    if (user) {
        const correctPassword = await user.passwordMatch(password)
       
        if(correctPassword) {
            console.log('user exists')
            console.log('userID: ', user._id)
            req.session.userId = user._id
            req.session.userEmail = user.email

            res.redirect('/')
        }
        else {
            console.log('user exists, wrong password written')
            //req.flash('errorMsg', 'User or password are incorrect')
            res.redirect('/login')   
        }
    }else {
        console.log('user does not exist')
        //req.flash('errorMsg', 'User or password are incorrect')
        res.redirect('/login')
    }
}

const logoutUser = (req, res) => {
    req.session.userId = null 
    res.redirect('/login')
}

module.exports = {
    getUsers,
    getRegister,
    createUser,
    getLogin,
    getUser,
    logoutUser 
}