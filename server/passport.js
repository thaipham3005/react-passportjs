const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
    function (accessToken, refreshToken, profile, done) {
        // done(null, {accessToken, ...profile})
        done(null, profile)
    })

)

passport.serializeUser((user, done)=>{
    const sessUser = {
        id: user.id,
        displayName: user.displayName,
        email: user.emails[0].value,
        photo: user.photos[0].value,
        provider: user.provider,
        // accessToken: user.accessToken
    }

    // console.log('serialized request::', req)
    done(null, sessUser)   
    
})

passport.deserializeUser((user, done)=>{
    // req.user = user
    console.log('deserialized user::', user)
    done(null, user)
})