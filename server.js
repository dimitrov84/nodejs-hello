var express = require('express');
var os = require("os");
var cors = require('cors');
const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to OpenShift!! \n My HostName is: ' + os.hostname() + '\n BYE!');
});

app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);


process.on('SIGTERM', function () {
    console.log('Cleanup.....');
    process.exit();
});

