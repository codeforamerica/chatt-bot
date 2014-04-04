var restify = require('restify')
var Promise = require('bluebird')
var spam = require('./chatspam')
var formatTrello = require('./formatTrello')
var request = require('pr-request')

var server = restify.createServer({
  name: 'chatbot'
})

server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('/keepalive', function (req, res, next) {
  console.log('pong')
  res.send(Date.now()+'')
  next()
})

function keepalive() {
  request(process.env.CHATBOT_URL + '/keepalive')
}

server.get('/webhooks/trello', function (req, res, next) {
  console.log('yup')
  res.send('got it')
  next()
})

server.head('/webhooks/trello', function (req, res, next) {
  res.send()
})
server.post('/webhooks/trello', function (req, res, next) {
  // console.log(JSON.stringify(req.body,null,2))
  console.log('->')
  console.log(formatTrello(req.body))
  spam(formatTrello(req.body))
  res.send()
})

server.on('after', console.log.bind(console, 'after'))

module.exports.start = function start() {
  return new Promise(function (resolve, reject) {
    server.listen(process.env.PORT, resolve)
  }).then(function () {
    console.log('listening on ' + process.env.PORT)
    setInterval(keepalive, 60e3)
  })
}