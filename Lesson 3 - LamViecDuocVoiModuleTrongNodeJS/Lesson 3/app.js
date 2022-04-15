const http = require("http");
const server = http.createServer((req, res) => {
  res.WriteHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World",
    })
  );
});
server.listen(3000, "localhost");
