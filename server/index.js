const express = require('express')
const axios = require('axios')
const session = require('express-session')
const cookieParser = require('cookie-parser')
// const cookieSession = require('cookie-session')
require('dotenv').config()
const cors = require('cors')

const authRoute = require('./routes/auth.route')
const PORT = process.env.PORT
axios.defaults.withCredentials = true

const app = express()
app.use(cors({
    origin: process.env.WEB_APP_URL,
    method: 'GET,POST,PUSH,DELETE',
    credentials: true
}))


const passport = require('passport')
require('./passport')

app.use(session({
    // key:'session',
    secret: 'some secret',
    // resave: true,
    // saveUninitialized: true,
    // maxAge: 24 * 60 * 60 * 1000,
    httpOnly: false,
    cookie: {maxAge: 24 * 60 * 60 * 1000},

}))
app.use(cookieParser())
// app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use(cookieSession({
//     name: 'RioWin',
//     keys: [process.env.SESSION_SECRET_KEY],
//     maxAge: 30 * 24 * 60 * 60 * 1000
// }))

app.use(passport.initialize())
app.use(passport.session())


app.use('/auth', authRoute)


app.listen(PORT, () => {
    console.clear()
    console.log('====================================');
    console.log('Node App is running on port::', PORT)
    console.log('====================================');}
    )