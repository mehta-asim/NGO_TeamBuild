import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from 'url';

//set up the root directory refrence
//find the global URL using fileURLToPath
// and then turn that into the __dirname (something like Users/Desktop)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;

//set up the static assets
// href="css/main.css"
app.use(express.static(path.join(__dirname, "public")));
// getting route parameters ((like php GET and POST superglobals))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//thse are our main routes
//tell app to use the router file
app.use("/", router);

//use this route for anything that doesnt match
// app.use(function (req, res) {
//   //route doesnt match, proabbly a 404 or somethiung
//   console.log("page does not exist");
//   res.send("page does not exist");
// });

// app.get("/", (req, res) => {
//   res.send("hello from express!");
// });

// app.get("/trevor", (req, res) => {
//   res.send("this is trevors page!");
// });

// app.get("/joe", (req, res) => {
//   res.send("this is joes page!");
// });

// app.get("/john", (req, res) => {
//   res.send("this is john's page!");
// });

app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
