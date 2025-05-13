import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Survey, { ISurvey } from "./data/survey";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/", async (req, res) => {
  try {
    const surveyData: ISurvey = req.body;
    const saveData = new Survey(surveyData);
    await saveData.save();
    res.status(201).json(saveData);
  } catch (err) {
    res.sendStatus(400);
  }
});

app.get("/", async (req, res) => {
  try {
    const data = await Survey.find();
    res.status(200).json(data);
  } catch (err) {
    res.sendStatus(400);
  }
});

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/survey")
  .then(() => {
    console.log("Sucessfully connected to mongoDB");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
  });
