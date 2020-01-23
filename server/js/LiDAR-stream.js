const Stream = require('child_process').spawn('./driver', ['/dev/ttyUSB0'])
const LiDAR = []
module.exports = LiDAR

LiDAR.onScan = callback => onScan = callback
LiDAR.setParse = bool => parse = bool
LiDAR.scans = []

const delLength = 'DELIMETER'.length

let onScan = scan => {},
    parse = true,
    isFirstRun = true,
    runningChunk = ''

Stream.stdout.on('data', data => {
  //clean up data stream
  let chunk = data.toString().replace(/\n/g, '')

  //first data back gives LiDAR status
  if(isFirstRun) {
    isFirstRun = false
    LiDAR.status = chunk
    return
  }

  runningChunk += chunk
  let index = runningChunk.indexOf('DELIMETER')

  while(index !== -1) {
    let jsonString = runningChunk.substring(0, index)

    //choose parse mode
    let scan
    if(parse) scan = JSON.parse(jsonString)
    else scan = jsonString

    onScan(scan, jsonString)
    LiDAR.scans.push(scan)

    //max of 70 scans
    if(LiDAR.scans.length > 70) LiDAR.scans.shift()

    //cut out used jsonString from runningChunk
    runningChunk = runningChunk.substring(index+delLength)
    index = runningChunk.indexOf('DELIMETER')
  }
})
