const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middleWares/notFoundHandler");
const errorHandler = require("./middleWares/errorHandler");
dotenv.config();
const PORT = process.env.PORT;

connectDb();
//midlewares:
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/posts", postsRoutes);
//middle wares that handles error in the route (path)
app.use(notFoundHandler);
app.use(errorHandler);
//server
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
