var mongo = require('./mongo');


//Examples of use

mongo.MongoFindQuery({
    "fname": "1."
}, 3, function (result) {
    mongo.GetInfoFromResult(result, "sender", function (list) {
        console.log(list);
    });
});



//Examples of use
/*
mongo.MongoFindQuery({
    'sender': 'Test@test.com'
}, 3, function (result) {
    //console.log(result);
    mongo.GetInfoFromResult(result, "_id", function (list) {
        console.log(list);
    });
});
*/

/*
mongo.MongoFindSender("Test@test.com", 2, function (result) {
    console.log(result);
});
*/

/*
mongo.MongoFindBetweenDates("2000-01-12","2000-01-13", 2, function (result) {
    console.log(result);
});
*/

/*
mongo.UpdateWithId("52af48b5d55148fa0c199643", {
    sender: "Test@test.com"
}, function (result) {
    console.log(result);
})
*/

//mongo.RemoveWithId("52af48b5d55148fa0c199643", function () {})
