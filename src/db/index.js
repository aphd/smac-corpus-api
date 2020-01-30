import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
export default async function makeDb() {
    const MongoClient = mongodb.MongoClient;
    const dbName = "smac-corpus";
    const client = new MongoClient(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect();
    const db = await client.db(dbName);
    db.makeId = makeIdFromString;
    return db;
}
function makeIdFromString(id) {
    return new mongodb.ObjectID(id);
}
