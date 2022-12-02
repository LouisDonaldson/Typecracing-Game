const http = require("http");
const fs = require("fs").promises;
http
  .createServer(async (req, res) => {
    if (req.url == "/") {
      const contents = await fs.readFile(__dirname + "/index.html");
      res.end(contents);
    } else if (false) {
    } else {
      try {
        const contents = await fs.readFile(__dirname + req.url);
        res.end(contents);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    }
  })
  .listen(8000);
