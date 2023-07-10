const http = require('http');
const express = require('express');
const path = require('path');const app = express();
app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use('/dec_demographic_change', function(req, res) {
    res.sendFile(path.join(__dirname + '/express/census_rate_of_change.html'));
});
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
const port = 4166;
server.listen(port);
console.debug('Server listening on port ' + port);
