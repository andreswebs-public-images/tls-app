const https = require('https');
const fs = require('fs');
const express = require('express');


const port = 8443;

const certDir = '/cert';
const certFile = 'tls.crt'
const keyFile = 'tls.key';

const options = {
  key: fs.readFileSync(`${certDir}/${keyFile}`),
  cert: fs.readFileSync(`${certDir}/${certFile}`)
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end('ok\n');
});

app.listen(port);

https.createServer(options, app).listen(port);
