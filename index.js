var http = require('./http')
var setWatch = require('./watch')

http.start().then(setWatch)
