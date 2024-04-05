import express from "express";
import { MongoClient } from 'mongodb';
import cors from "cors";

const app = express();
const url = "mongodb+srv://sanjai:sanjai123@movies.vcowzfe.mongodb.net/?retryWrites=true&w=majority&appName=movies"
const client = new MongoClient(url);
await client.connect();
console.log("mongodb connected");
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get("/balance", async function (request, response) {
    const data = await client.db("Widgets").collection("Balance").find({}).toArray();
    response.status(200).send(data);
})
app.get("/transaction", async (req, res) => {
    const tableData = await client.db("Widgets").collection("recentTransaction").find({}).toArray();
    res.json(tableData);
});
app.post("/buy", async function (request, response) {
    const getPostman = request.body;
    const sendMethod = await client.db("Widgets").collection("recentTransaction").insertOne(getPostman);
    response.status(201).send(sendMethod);
});

app.listen(8000, () => {
    console.log("Server connected successfully..");
})
