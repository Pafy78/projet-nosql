var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID

var password = "admin123";
var dburl = "mongodb://admin:" + password + "@mongenron-shard-00-00-ebkb0.mongodb.net:27017,mongenron-shard-00-01-ebkb0.mongodb.net:27017,mongenron-shard-00-02-ebkb0.mongodb.net:27017/test?ssl=true&replicaSet=MongEnron-shard-0&authSource=admin";

//Return the list of a specific field from a json of result
exports.GetInfoFromResult = function (result, infoNeeded, callback) {
    var returnList = [];

    result.forEach(function (singleResult) {
        returnList.push(singleResult[infoNeeded]);
    });
    callback(returnList);
}

//Return the list of sender
exports.ListSenders = function (callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            dbo.collection("Enron").distinct('sender', function (err, docs) {
                docs.sort();
                db.close();
                console.log("Connection closed");
                callback(docs);
                //Error managment
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

//Get everything by sender
exports.MailOfSender = function (searchSender, callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            var query = {
                'sender': searchSender
            };

            dbo.collection("Enron").find(query).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                db.close();
                console.log("Connection closed");
                callback(result);
            });
        }
        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

//Update the text of a specific mail ID
exports.UpdateWithId = function (id, newText, callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");
            var query = {
                $set: {
                    text: newText
                }
            };
            var ObjectId = new ObjectID.createFromHexString(id);

            dbo.collection("Enron").update({
                _id: ObjectId
            }, query);
            console.log("Update done");
            db.close();
            console.log("Connection closed");
        }

        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

//Remove a mail of a specific ID
exports.RemoveWithId = function (id, callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");
            var ObjectId = new ObjectID.createFromHexString(id)
            var query = {
                _id: ObjectId
            };

            dbo.collection("Enron").remove(query, function (err, obj) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(obj.result.n + " document(s) deleted");
                    db.close();
                    console.log("Connection closed");
                    callback();
                }
            });

            //Error managment
            if (err) {
                console.log(err);
            }
        }
    });
}


//Queries if runned on a local DB called Enron:
//Final project

//ListSenders
/*
db.enron.distinct('sender');
*/

//MailOfSender
/*
var searchSender = "rosalee.fleming@enron.com";
db.enron.find({'sender':searchSender},{})
*/

//UpdateWithId
/*
var idToUpdate = ObjectId("52af48b5d55148fa0c199643");
var newText = "Text after update";
db.enron.updateOne({ "_id" : idToUpdate },{ $set: { "text" : newText } });
*/

//RemoveWithId
/*
var idToDelete = ObjectId("52af48b5d55148fa0c199643");
db.enron.remove( {"_id": idToDelete});
*/
