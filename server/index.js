const express = require('express')
const uuid = require('uuid').v4
const axios = require('axios')
const session = require('express-session')
require('dotenv').config()
const cors = require('cors')
const passport = require('passport')
const SessionFileStore = require('session-file-store')(session)
const authRoute = require('./routes/auth.route')
const PORT = process.env.PORT
axios.defaults.withCredentials = true
require('./passport')
const app = express()
app.use(cors({
    origin: process.env.WEB_APP_URL,
    method: 'GET,POST,PUSH,DELETE',
    credentials: true
}))
app.set('trust proxy',1)
app.use(session({
    // key:'session',
    // genid: (req)=>{
    //     console.log('Inside session middleware',req.sessionID);
    //     return uuid()
    // },
    secret: 'somesecret',
    resave: false,
    saveUninitialized: false,
    store: SessionFileStore(),    
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: false,
        // httpOnly: false,
        // domain: '/'
    },
}))
app.use(express.json()) //get info from html forms
app.use(express.urlencoded({extended: false})) //get info from html forms
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoute)


app.listen(PORT, () => {
    // console.clear()
    console.log('====================================');
    console.log('Node App is running on port::', PORT)
    console.log('====================================');}
    )