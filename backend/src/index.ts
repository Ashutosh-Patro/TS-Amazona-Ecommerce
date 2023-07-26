import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouters";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI!)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Database not connected");
  });

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// {
//   credentials: true,
//   origin: ["http://localhost:5173"],
// }

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
