const { Router } = require('express')
const router = Router()
const isAuth = require('./isAuth')

const {
    getUsers,
    getRegister,
    createUser,
    getLogin,
    getUser,
    logoutUser

} = require('./controller')


router.get('/', isAuth, getUsers)
router.post('/register', createUser)
router.get('/register', getRegister)
router.get('/login', getLogin)
router.post('/login', getUser)
router.get('/logout', logoutUser)

module.exports = router