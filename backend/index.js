import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";
import rateLimitrer from "./middleware/rateLimiter.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use(rateLimitrer);
app.use("/api/notes", notesRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
