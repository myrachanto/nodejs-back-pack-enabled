const http = require('http')
import app from './app'

const port = process.env.PORT || 4500

const server = http.createServer(app);

server.listen(port)