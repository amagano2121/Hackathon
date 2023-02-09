const e = require("express");
const express = require("express");

const app = express();

const port = 3002;

console.log("Server starting on port: " + port)

app.listen(port)

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

//This function returns all people with salaries
const getPeople = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");
      const data = await peopleCollection.find().toArray();
      callback(data);

   } catch (error) {
      console.error(error);
      return error;
   }
};

//This function returns people with no salaries
const filterPeople = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");
      const data = await peopleCollection.find({
         first_name: {},
         last_name: {},
         phone: {},
         role: {},
         location: {},
      }).toArray();

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

   //if the user is a manger/HR then
   getPeople(processData)

   //otherwise:
   //filterPeople(processData)
})