"use strict";

window.WebSocket = window.WebSocket || window.mozWebSocket;
if (!window.WebSocket) throw new Error('web sockets are not supported');
var connection = new WebSocket('ws://192.168.1.251:8080');

connection.onmessage = function (msg) {
  var scan = JSON.parse(msg.data);
  renderMap(scan);
};