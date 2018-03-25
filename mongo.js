var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID

var password = "admin123";
var dburl = "mongodb://admin:" + password + "@mongenron-shard-00-00-ebkb0.mongodb.net:27017,mongenron-shard-00-01-ebkb0.mongodb.net:27017,mongenron-shard-00-02-ebkb0.mongodb.net:27017/test?ssl=true&replicaSet=MongEnron-shard-0&authSource=admin";

/*
function MongoFind(id, sender, recipients, cc, text, mid, fpath, bcc, to, replyto, ctype, fname, date, folder, subject) {*/

exports.GetInfoFromResult = function (result, infoNeeded, callback) {
    var returnList = [];

    result.forEach(function (singleResult) {
        returnList.push(singleResult[infoNeeded]);
    });
    callback(returnList);
}

exports.JsonFromResult = function (result, callback) {

}

exports.MongoFindQuery = function (query, limit, callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            dbo.collection("Enron").find(query).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    db.close();
                    callback(result);
                }
            });
        }
        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

exports.MongoFindSender = function (sender, limit, callback) {
    // Connect to the db
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            var query = {
                "sender": sender
            };

            dbo.collection("Enron").find(query).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                db.close();
                callback(result);
            });
        }
        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

exports.MongoFindBetweenDates = function (gteDate, lteDate, limit, callback) {
    // Connect to the db
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            var query = {
                $and: [{
                    "date": {
                        $gte: gteDate
                    }
                }, {
                    "date": {
                        $lte: lteDate
                    }
                }]
            };

            dbo.collection("Enron").find(query).limit(limit).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                db.close();
                callback(result);
            });
        }
        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

exports.ListSenders = function (callback) {
    MongoClient.connect(dburl, function (err, db) {
        if (!err) {
            console.log("We are connected");
            var dbo = db.db("MongEnron");

            dbo.collection("Enron").distinct('sender', function (err, docs) {
                docs.sort();
                callback(docs);
                //Error managment
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

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
                callback(result);
            });
        }
        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

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
        }

        //Error managment
        if (err) {
            console.log(err);
        }
    });
}

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