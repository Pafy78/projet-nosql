var mongo = require('./mongo');

//Testing the update
/*
mongo.MongoFindSender(".elizondo@enron.com", 2, function (result) {
    console.log(result);
});

mongo.UpdateWithId("52af48b6d55148fa0c19a529", "Ken, I am a loyal Enron Employee for over 17 years and my opinion (however insignificant) is that we stand and fight and not take any buy out offer from anyone.\n\nI know that I speak for the rest of my team when I say lets stand and fight and not sell out to the first bidder who will not give us what we are really worth.  We are the best and continue to be the best in the energy world, that is my attitude every day that I proudly come to work.  \n\nPlease reconsider and take our lumps like Columbia Gas System, like Continental Airlines and get back into solvency the best way we know how to.  The past is past, lets pick up ourselves by our boot straps and get back into the fight and win this one.\n\nYou know that you can count on me and the rest of my team in ETS to stand by this decision to stand and fight.\n\nEver Loyal and willing to serve.\n\nRudy Elizondo (ETS).\n\nps If you need more inspirational speeches from me, I will be happy to oblige.\n\n\n\n This Is a TESTTTTTTTTTT number 3", function () {
    console.log("done");
    mongo.MongoFindSender(".elizondo@enron.com", 2, function (result) {
        console.log(result);
    });
})
*/

/*
mongo.MongoFindQuery({
    "fname": "1."
}, 3, function (result) {
    mongo.GetInfoFromResult(result, "sender", function (list) {
        console.log(list);
    });
});
*/


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
mongo.MongoFindBetweenDates("2000-01-12","2000-01-13", 2, function (result) {
    console.log(result);
});
*/

/*
mongo.MongoFindSender("Test@test.com", 2, function (result) {
    console.log(result);
});
*/

//New Examples of use

/*
mongo.ListSenders(function(listSenders){
    console.log(listSenders);
})
*/

/* Everything from a sender
mongo.MailOfSender("rosalee.fleming@enron.com", function (result) {
    console.log(result);
});
*/
/*Get list of subject of a sender
mongo.MailOfSender("rosalee.fleming@enron.com", function (result) {
    //console.log(result);
    mongo.GetInfoFromResult(result, "subject", function (list) {
        console.log(list);
    });
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
