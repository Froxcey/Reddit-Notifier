const datastore = require("@seald-io/nedb");
const db = new datastore({ filename: `${__dirname}/memory.db` });

db.loadDatabase();
db.find({ sub: "r/ralsei", id: "1111" }, (err, doc) => {
  if (err) return console.log(err);
  console.log(doc);
});
console.log();
