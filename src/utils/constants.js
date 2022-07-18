const apiURL = process.env.NODE_ENV !== 'production'? 'http://localhost:5000/api' : ''

const TOKEN_NAME = 'reactjs_passportjs'

export {apiURL, TOKEN_NAME}