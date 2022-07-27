import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();



const port=process.env.PORT ||5000;
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://vikrant8600:vikrant8600@cluster0.kz7hyxj.mongodb.net/blog"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected TO Database and Listening TO Localhost ${port}`)
  )
  .catch((err) => console.log(err));
