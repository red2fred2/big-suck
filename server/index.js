const LiDAR = require('./LiDAR-stream.js')
const API = require('./api.js')

LiDAR.setParse(true)

LiDAR.onScan((scan, jsonString) => {
  API.send(jsonString)
})
