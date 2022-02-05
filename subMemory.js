"use strict";
var Datastore = require("@seald-io/nedb");
var db = new Datastore({ filename: "".concat(__dirname, "/memory.db") });
db.loadDatabase();
var debug_mode = false;
if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
    debug_mode = true;
}
if (debug_mode)
    console.log("[Debug]: Database manager started in debug mode");
function check(id, sub, callback) {
    if (debug_mode)
        console.log("[Debug]: Indexing...");
    //console.log(db);
    db.find({ sub: sub, id: id }, function (err, docs) {
        if (debug_mode)
            console.log("[Debug]: Indexing complete");
        if (err)
            return console.log(err);
        if (docs.length == 0) {
            callback(false);
            db.insert({ sub: sub, id: id }, function (err, doc) {
                if (debug_mode)
                    console.log("[Debug]: A new entry is stored");
            });
        }
        else {
            callback(true);
            if (debug_mode)
                console.log("[Debug]: Entry found, returning TRUE");
        }
    });
    return;
}
module.exports = check;
