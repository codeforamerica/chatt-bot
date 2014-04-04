var Chat = require('hipchatter')
var chat = new Chat(process.env.HIPCHAT_TOKEN)
var Promise = require('bluebird')


function spam(msg) {
  return new Promise(function (resolve, reject) {

    chat.notify('bot-test', {
      message: msg,
      token: process.env.HIPCHAT_TRELLO_CHITCHATT
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