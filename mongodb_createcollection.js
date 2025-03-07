const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "mydb";

MongoClient.connect(url)
  .then((client) => {
    console.log("✅ Connected to MongoDB!");
    const db = client.db(dbName);
    return db.collection("customers").insertOne({ name: "Test User" });
  })
  .then(() => {
    console.log("🎉 Database and collection created successfully!");
  })
  .catch((err) => {
    console.error("❌ Error:", err);
  });


  // var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/";

// console.log("Starting MongoDB connection..."); // Debug log

// MongoClient.connect(url, function (err, client) {
//   if (err) {
//     console.error("Connection error:", err);
//     return;
//   }

//   console.log("Connected to MongoDB!"); // Debug log
//   var dbo = client.db("mydb");

//   dbo.createCollection("customers", function (err, res) {
//     if (err) {
//       console.error("Collection creation error:", err);
//       return;
//     }
//     console.log("Collection created!");
//     client.close();
//   });
// });
