const http = require("http");

let server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/post" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 302;
    res.write("<html>");
    res.write("<body> Node JS routing is working successfully </body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body> Welcome to the default page of Node JS ... ");
  res.write(
    "<form action='/post' method='POST'><button type='submit'> Send a POST request </button></form></body>"
  );
  res.write("</html>");
  res.end();
});

server.listen(3000);
