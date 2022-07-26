const apiURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''

const TOKEN_NAME = 'react_passportjs'



export { apiURL, TOKEN_NAME }