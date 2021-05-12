const { Router } = require('express')
const router = Router()

const {
    getUsers,
    getRegister,
    createUser,
    getLogin
} = require('./controller')


router.get('/', getUsers)
router.post('/register', createUser)
router.get('/register', getRegister)
router.get('/login', getLogin)

module.exports = router