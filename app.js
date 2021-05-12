const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router= require('./src/Route');
const morgan = require('morgan');
const path = require('path')
const hbs = require('express-handlebars')
const session = require('express-session')

//database
require('./src/DataBase')
//settings handlebars
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'secretWord', //palabra secreta 
    cookie: { maxAge: 10000*60   } //tiempo que dura la sesión abieta
  }))
//Route and Controllers
app.use(router)


app.listen(3000, ()=> console.log('Server running in port 3000'));

//app.listen(3000, () => console.log('Server running in port 3000'));