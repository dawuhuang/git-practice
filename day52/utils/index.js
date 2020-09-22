

// import './src/dateFormat'
// import './src/htmlEscape'
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')
module.exports = {
   ...date,
   ...escape
}