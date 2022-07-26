const router = require('express').Router()
const passport = require('passport')

router.get('/google',
    passport.authenticate('google', { scope: ['profile','email'] })
)

router.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy();
    res.redirect(process.env.WEB_APP_URL)
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'Login failed'
    })
})

router.get('/login/success', (req, res) => {
    console.log('login session::', req)
    // console.log('login session::', req.sessionStore.sessions)
    if (!!req.session.passport?.user) {
        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: req.session.passport.user,
        })
    }
    else {
        res.status(401).json({
            success: false,
            message: 'Login failed'
        })
    }

})

router.get('/google/callback',
    passport.authenticate('google', {
        // session: true,
        // successRedirect: process.env.WEB_APP_URL,
        failureRedirect: '/login'
    }), (req, res) => {
        
        // console.log('callback session::',req.session);
        res.redirect(process.env.WEB_APP_URL)
    })


module.exports = router