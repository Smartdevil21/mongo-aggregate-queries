const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/collectionQueryTest";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connection successful!"))
  .catch((error) => console.group(`Err in connecting to db: ${error}`));
