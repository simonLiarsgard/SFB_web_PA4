const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Express setup
const app = express();

//connect to mongodb
let mongodbConnect = 'mongodb+srv://simon:simon@sfb-e7z0g.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongodbConnect);
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api'));

//Error handling middleware
app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err._message})
});

//Listen for requests
app.listen(process.env.PORT || 4000, () => {
    console.log('now listening for requests');
});