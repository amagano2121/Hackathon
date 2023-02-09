const e = require("express");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors())
const port = 3004;

console.log("Server starting on port: " + port)

app.listen(port)

const mongodb = require("mongodb")
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://dbuser:Vegan07212000!@starwarscharacters.k6zkvly.mongodb.net/Hackathon";
const client = new MongoClient(uri);
const db = client.db("Hackathon");

//^^^^^^^^^^^^^^Set up^^^^^^^^^^^^^^//

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


//returns all people from collection including their salaries
const getPeople = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");
      const data = await peopleCollection.find({}).toArray();
      callback(data);

   } catch (error) {
      console.error(error);
      return error;
   }
};

//returns all people from collection excluding their salaries

const filteroutSalary = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");
      const data = await peopleCollection.find({}).project({ salary: 0 }).toArray();
      callback(data);

   } catch (error) {
      console.error(error);
      return error;
   }
};


app.get('/directory/:username', async (req, res) => {

   //should be the user's username
   const username = req.params.username
   console.log(username)

   //should return just the role of the user
   const user = await db.collection('Salary').findOne({ last_name: username })
   console.log(user)

   const direct_reports = user.direct_reports

   let processData = (data) => {

      res.send(data);
   }

   if (user.role === 'HR') {
      getPeople(processData)           //they can see everbody and their salaries 
   }

   if (user.role === 'Manager') {

      //managerFilter(username)

   }

   else {

      filteroutSalary(processData)     //otherwise they can only see people without their salaries

   }
})