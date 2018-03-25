const express = require('express');

const mongo = require('./mongo');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/emails', (req, res) => {
    mongo.ListSenders(function(data){
        res.send({express : data});
    })
});



app.get('/api/details/:email', (req, res) => {
    mongo.MailOfSender(req.params.email, function (result) {
        res.send({express : result});
    });
});

app.get('/api/remove/:id', (req, res) => {
    mongo.RemoveWithId(req.params.id, function (result) {
        res.send({express : result});
    });
});

app.get('/api/update/text/:id/:value', (req, res) => {
    mongo.UpdateWithId(req.params.id, req.params.value, function (result) {
        res.send({express : result});
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));