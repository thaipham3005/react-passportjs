const express = require('express')
const cookieSession = require('cookie-session')
require('dotenv').config()
const PORT = process.env.PORT || 5005

const app = express()
app.use(cookieSession({
    name: 'session',
    keys: ['app'],
    maxAge: 24 * 60 * 60 * 1000 //1 day
}))

app.listen(PORT, ()=> console.log('Node App is running on port::', PORT))