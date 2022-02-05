import datastore from "@seald-io/nedb";
const db = new datastore({ filename: `${__dirname}/memory.db` });
db.loadDatabase();
