const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "mydb";

async function insertDocument() {
  try {
    console.log("📡 Connecting to MongoDB...");
    const client = await MongoClient.connect(url);
    console.log("✅ Connected to MongoDB!");

    const db = client.db(dbName);
    const myobj = { name: "Company Inc", address: "Highway 37" };

    const result = await db.collection("customers").insertOne(myobj);
    console.log(`🎉 1 document inserted: ${result.insertedId}`);

    client.close(); // Properly closing connection
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

insertDocument();


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
// 	console.log("1 document inserted");
// 	db.close();
//   });
// });
