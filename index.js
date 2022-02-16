import http from "http";

const host = "127.0.0.1";
const port = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end(`Hi there! request.method: ${request.method}, request.url: ${request.url}`);
});

server.listen(port, host, () => {
  console.log(`Server is running at ${host}: ${port}`);
});
