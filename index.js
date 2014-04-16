var Chat = require('hipchatter')
var chat = new Chat(process.env.HIPCHAT_TOKEN)
var Promise = require('bluebird')


function spam(msg) {
  return new Promise(function (resolve, reject) {

    chat.notify('bot-test', {
      message: msg,
      token: process.env.HIPCHAT_TRELLO_ROOM
    }, function (e,r) {
      if (e) {
        reject(new Error(r))
      } else{
        resolve()
      }
    })

  })
}

module.exports = spam

// spam('omg hai2u')
//   .then(function () {
//     console.log('k')
//   })
//   .catch(function (e) {
//     console.error('womp', e)
//   })

var http = require('./http')
var setWatch = require('./watch')

http.start().then(setWatch)