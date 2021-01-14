let connection;

const setUpInput = function(conn) {
connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }  if (data === "w") {
    connection.write("Move: up");
  } else if (data === "d") {
    connection.write("Move: right");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  }
}

module.exports = {setUpInput, connection};