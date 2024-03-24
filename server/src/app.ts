import express from "express";
import router from "./routes/user.route.js";
import { connectDB } from "./utils/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import {config} from "dotenv"
config()

const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/v1/user", router);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Express started at port ${port}`);
  });
});
