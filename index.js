// בס"ד
import express from "express";
import database from "./utilis/database.js";
import router from "./routes/index.js";
const app = express();

app.use(express.urlencoded());
app.use(express.json());

const port = 3005;

app.use("/", router());

database
  .sync()
  .then((results) => {
    console.log(results);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
