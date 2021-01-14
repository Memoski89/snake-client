const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host:IP,
    port:PORT
  });
  conn.on('connect', ()=>{
    console.log('Successfully connected to game server')
    conn.write("Name: !!!")
    conn.write('Say: HOE')
  
 }) 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => { // when client gets data write on screen//
    console.log(data)

  })

  return conn;
}
module.exports = {connect};