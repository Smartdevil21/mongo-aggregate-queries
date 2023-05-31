require("dotenv/config");
require("./configs/db.config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const educationRouter = require("./routes/education.route");
const achievementRouter = require("./routes/achievement.route");
const userRouter = require("./routes/user.route");

const PORT = process.env.PORT || 8001;
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);
app.use(educationRouter);
app.use(achievementRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from the backend!",
  });
});

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
