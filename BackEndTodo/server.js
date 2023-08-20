const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const cors = require("cors");
require('dotenv').config();


const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/todo",router);


const client = new MongoClient(process.env.URL);
let db;

    // Define routes of the app here

    // 1. Read
    // Read operation using get
    router.get("/", async (req, res) => { 
        let todos = await db.collection("todoCollection").find({}).toArray();
        res.send(todos);
    })

    router.get("/:id", async (req, res) => {
        const filter={_id:new ObjectId(req.params.id)};
        let todos = await db.collection("todoCollection").find(filter).toArray();
        res.send(todos);
    })

    // 2. Create
    // Create operation using Post 
    router.post("/add", async (req, res) => {
        await db.collection("todoCollection").insertOne(req.body);
        res.send("Data Posting Successfully");
    })

    // 3. update
    // update operation using patch 
    router.patch("/update/:id", async(req, res) => {
        const filter={_id:new ObjectId(req.params.id)};
        const update={
            $set : req.body 
        }
            await db.collection("todoCollection").findOneAndUpdate(filter, update);
        res.end("patch Request");
    })

    // 4. Delete
    // Delete operation using delete 
    router.delete("/delete/:id", async(req, res) => {
        const id=new ObjectId(req.params.id);
        await db.collection("todoCollection").deleteOne({_id:id})
        res.end("delete Request");
    });

    
    // 0. connection to mongodb and starting the server
    async function connectToMongoDBStartServer() {
    await client.connect();
    db = client.db("todoDB");
    console.log("connected to mongodb successfully")
    // connected to database 
 
    // Starting a server
    app.listen(process.env.PORT, () => { console.log("Your are listening to the port 8080!!") });

}
console.log(process.env);

connectToMongoDBStartServer().then(console.log("success")).catch(console.error);


