var request = require('pr-request')

function setWatch() {
  // idempotent set webhook if not exist

  return request({
      url:'https://trello.com/1/tokens/' + process.env.TRELLO_TOKEN + '/webhooks?key='+process.env.TRELLO_KEY,
      json: true
    })
    .then(function (res) {
      console.log(res.statusCode, res.body)
      if (res.statusCode !== 200) { throw new Error(res.statusCode)}
      if (!Array.isArray(res.body)) { throw new Error('invalid response')}
      if (res.body.length) { return; }

      console.log('webhook not set, registering...')

      console.log(JSON.stringify({
          description: 'chatbot',
          callbackURL: process.env.CHATBOT_URL + '/webhooks/trello',
          idModel: process.env.TRELLO_BOARD_ID
        }))

      return request({
        url: 'https://trello.com/1/tokens/' + process.env.TRELLO_TOKEN + '/webhooks?key='+process.env.TRELLO_KEY,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          description: 'chatbot',
          callbackURL: process.env.CHATBOT_URL + '/webhooks/trello',
          idModel: process.env.TRELLO_BOARD_ID
        }),
        json: true
      }).then(function (res) {
        console.log(res.statusCode, res.body)
        //console.log(res.request)
      })

    })
}

//setWatch()

module.exports = setWatch