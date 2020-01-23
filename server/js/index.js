const LiDAR = require('./LiDAR-stream.js')
const API = require('./api.js')

LiDAR.setParse(false)

LiDAR.onScan((scan, jsonString) => {
  API.send(jsonString)
})
