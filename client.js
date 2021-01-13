const net = require('net');
const stdin = process.stdin;
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', ()=>{
    console.log('Successfully connected to game server')
    conn.write("Name: 8=D")
  
  })
  
  /* stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === "w") {
      conn.write("Move: up");
    } else if (key === "d") {
      conn.write("Move: right");
    } else if (key ==='a'){
      conn.write('Move: left');
    } else if (key === 's'){
      conn.write("Move: down")
    }
  }) */
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => { // when client gets data write on screen//
    console.log(data)

  })

  return conn;
}
module.exports = {connect};