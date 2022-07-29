const express = require('express')
const uuid = require('uuid').v4
const session = require('express-session')
require('dotenv').config()
const cors = require('cors')
const passport = require('passport')
const SessionFileStore = require('session-file-store')(session)
const authRoute = require('./routes/auth.route')
const PORT = process.env.PORT
require('./passport')
const app = express()

app.use(cors({
    origin: process.env.WEB_APP_URL,
    method: 'GET,POST,PUSH,DELETE',
    credentials: true
}))
app.set('trust proxy',1)
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    key:'react-passportjs',
    genid: (req)=>{
        return uuid()
    },
    resave: true,
    saveUninitialized: false,
    store: SessionFileStore({}),    
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
}))
app.use(express.json()) //get info from html forms
app.use(express.urlencoded({extended: false})) //get info from html forms
require('./passport')

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoute)


app.listen(PORT, () => {
    console.clear()
    console.log('====================================');
    console.log('Node App is running on port::', PORT)
    console.log('====================================');}
    )