const express = require('express');

const mongo = require('./mongo');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/all', (req, res) => {
    mongo.MongoFindQuery({
        "fname": "1."
    }, 100, function (result) {
        mongo.GetInfoFromResult(result, "sender", function (list) {
            res.send({express : list});
        });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));