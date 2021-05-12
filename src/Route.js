const { Router } = require('express')
const router = Router()

const {
    getUsers,
    getRegister,
    createUser,
    getLogin,
    getUser,
    logoutUser

} = require('./controller')


router.get('/', getUsers)
router.post('/register', createUser)
router.get('/register', getRegister)
router.get('/login', getLogin)
router.post('/login', getUser)
router.get('/logout', logoutUser)

module.exports = router