const Datastore = require("@seald-io/nedb");
const db = new Datastore({ filename: `${__dirname}/memory.db` });
db.loadDatabase();
var debug_mode = false;
if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
  debug_mode = true;
}

if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Database manager started in debug mode`);

function check(id: string, sub: string, callback: (found: boolean) => void): void {
  if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Database module is indexing...`);
  //console.log(db);
  db.find({ sub: sub, id: id }, (err: Error, docs: Array<{ sub: string; id: string }>) => {
    if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Indexing complete`);
    if (err) return console.log(err);
    if (docs.length == 0) {
      callback(false);
      db.insert({ sub: sub, id: id }, (err, doc) => {
        if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): A new entry is stored`);
      });
    } else {
      callback(true);
      if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Entry found, returning TRUE`);
    }
  });
  return;
}

export = check;
