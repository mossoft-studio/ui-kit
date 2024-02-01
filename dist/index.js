
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui-kit.cjs.development.js')
} else {
  module.exports = require('./ui-kit.cjs.development.js')
}
