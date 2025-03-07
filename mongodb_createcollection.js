const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";

MongoClient.connect(url)
  .then(client => {
    console.log("Database connection successful!");
    const db = client.db(dbName);
    client.close(); // Close the connection properly
  })
  .catch(err => {
    console.error("Error connecting to database:", err);
  });
