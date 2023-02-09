const e = require("express");
const express = require("express");

const app = express();
const port = 3002;
app.listen(port)
console.log("Server starting on port: " + port)

const mongodb = require("mongodb")
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://dbuser:Vegan07212000!@starwarscharacters.k6zkvly.mongodb.net/Hackathon";
const client = new MongoClient(uri);
const db = client.db("Hackathon");

// get connetion info
function connect() {
   try {
      const conn = client.connect();
      console.log(conn);
   } catch (error) {
      console.error(error);
      return error;
   }
}

const getPeople = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");              //insert name of the collection that we are working with      
      const data = await peopleCollection.find().toArray();
      callback(data);
   } catch (error) {
      console.error(error);
      return error;
   }
};

app.get('/directory', (req, res) => {

   let processData = (data) => {
      console.log(data);
      res.send(data);
   }

   getPeople(processData)

})