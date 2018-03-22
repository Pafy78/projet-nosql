var mongo = require('./mongo');


//Examples of use

mongo.MongoFindQuery({
    "fname": "1."
}, 3, function (result) {
    mongo.GetInfoFromResult(result, "sender", function (list) {
        console.log(list);
    });
});


/*
mongo.MongoFindSender("rosalee.fleming@enron.com", 2, function (result) {
    console.log(result);
});
*/

/*
mongo.MongoFindBetweenDates("1999-10","1999-11", 2, function (result) {
    console.log(result);
});
*/
