const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const router = require("./routes/catRoutes")
// app.use("/api/category", require("./routes/catRoutes"));

const app = express();


connectDb();


const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/", router)


app.use(errorHandler);


// app.get("/hii", (req, res) => {
//   res.status(200).json({
//     message: 'It works!'
// });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


