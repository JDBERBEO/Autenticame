const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/autenticame', { 
    useNewUrlParser: true })
.then(()=> console.warn('mongodb connected'))
.catch((err) => console.warn(err.message))