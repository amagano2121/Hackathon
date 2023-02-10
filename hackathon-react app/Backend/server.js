const e = require("express");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(cors())
app.use(bodyParser.json())
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
/*const getPeople = async (callback) => {
   try {
      const peopleCollection = db.collection("Salary");
      const data = await peopleCollection.find({}).toArray();
      callback(data);

   } catch (error) {
      console.error(error);
      return error;
   }
};*/


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

app.get('/directory', async (req, res) => {
   let processData = (data) => {
      res.send(data);
   }
   filteroutSalary(processData)
})

app.get('/directory/:username', async (req, res) => {
   console.log(req.headers)
   attemptedPW = req.headers.password
   attemptedUN = req.headers.username
   let valid = ((await db.collection('Usernames/Passwords')
      .findOne({ username: attemptedUN }))?.password === attemptedPW);
   console.log(`/directory/user:`, req.headers, valid);

   let returned_people = []

   //return the user's username
   const username = req.params.username

   //return just the user
   const user = await db.collection('Salary').findOne({ last_name: username })

   const direct_reports = user.direct_reports

   if (user.role === 'HR') {

      const employee_salaries = await db.collection("Salary")
         .find({})
         .toArray()
         .then(people => { console.log(people); returned_people.push(...people) })

   }

   else if (user.role === 'Manager') {

      const direct_report_salaries = await db.collection("Salary")
         .find({ last_name: { $in: direct_reports } })
         .toArray()
         .then(people => { console.log(people); returned_people.push(user); returned_people.push(...people) })
   }

   else {

      returned_people.push(user)

   }

   //let processData = (data) => {
   // res.send(data);
   //}
   res.send(returned_people)
})

app.post('/login', async (req, res) => {
   attemptedPW = req.body.password
   attemptedUN = req.body.username
   let loggedInUser = ((await db.collection('Usernames/Passwords')
      .findOne({ username: attemptedUN, password: attemptedPW })));
   console.log('/login:', req.body, loggedInUser);

   //console.log(attemptedPW)
   //console.log(attemptedUN)
   //res.send(await db.collection('Salary').findOne({}))
   if (loggedInUser) {
      res.send(loggedInUser)
   } else {
      res.status(304).send()
   }

})