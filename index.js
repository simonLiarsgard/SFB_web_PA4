const express = require('express');

//Express setup
const app = express();

app.get('/'), function() {
    console.log('GET request');
};

//Listen for requests
app.listen(process.env.port || 4000, function (){
    console.log('now listening for requests');
});