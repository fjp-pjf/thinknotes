import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/notes", notesRoutes);
connectDB();

app.listen(PORT, () => {
  console.log("RUNNING ON 5001");
});
