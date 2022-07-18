const apiURL = process.env.NODE_ENV !== 'production'? 'http://localhost:3000/api' : ''

const TOKEN_NAME = 'react_passportjs'

export {apiURL, TOKEN_NAME}