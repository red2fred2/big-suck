const WS = require('websocket').server;
const HTTP = require('http');

const Server = HTTP.createServer((req, res) => {});
Server.listen(8080)
const WSserver = new WS({httpServer: Server})

let connections = []

WSserver.on('request', req => {
  let conn = req.accept(null, req.origin)

  conn.on('message', msg => {
    console.log(msg)
  })

  conn.on('close', conn => {

  })

  connections.push(conn)
})

module.exports.send = msg => {
  connections.forEach(conn => {
    conn.sendUTF(msg)
  })
}
