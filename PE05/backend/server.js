import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://GayatriCS628PE05:PE05123CS628@cs628pe05gayatri.fubdl9r.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(5050, () => console.log("Server started"));