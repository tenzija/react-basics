const jwt = require('jsonwebtoken')

let userData = 100
let secret = 'supersecret'

const token = jwt.sign(userData, secret)
const decodeToken = jwt.verify(token, secret)

console.log(token)
console.log(decodeToken)