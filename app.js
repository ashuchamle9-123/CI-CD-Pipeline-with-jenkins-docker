const http = require('http');

const PORT = 3000;
const PROJECT_NAME = "CI/CD-Pipeline-with-jenkins-docker";

const server = http.createServer((req, res) => {

  console.log(`Request: ${req.method} ${req.url}`);

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
  <h1>🚀 Hello from my project</h1>
  <h2>CI/CD-Pipeline-with-jenkins-docker</h2>
  <p>Deployed using Jenkins CI/CD Pipeline & Docker</p>
`);
  } 
  
  else if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({
      message: "Hello from my project",
      project: PROJECT_NAME,
      status: "OK"
    }));
  } 
  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write("404 - Page Not Found");
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
