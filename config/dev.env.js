var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE: JSON.stringify({
    apiKey: 'AIzaSyCuf85KAmxFzUvG8a7B2z8fCP9Qoc1_LoU',
    authDomain: 'vue-data.firebaseapp.com',
    databaseURL: 'https://vue-data.firebaseio.com',
    storageBucket: 'vue-data.appspot.com',
    messagingSenderId: '594203424885'
  })
})
