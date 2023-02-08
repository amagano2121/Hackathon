const e = require("express");
const express = require("express");

const app = express();

const port = 7000;

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
  
const getPeople = async (callback) => {
    try {
        const peopleCollection = db.collection(" X ");              //the X will be noSalary or Salary
        const data = await peopleCollection.find().toArray();
        callback(data);
        cleanup();
     }  catch (error) {
        console.error(error);
        return error;
     }
   };

const cleanup = (event) => {
    client.close();
    process.exit();
   };
  

app.get('/people', (req, res) => {

    let processData = (data) => {console.log(data);}

    res.render(getPeople(processData))

});