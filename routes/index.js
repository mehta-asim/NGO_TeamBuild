import express from "express";
const router = express.Router();

import path from "path";
import { fileURLToPath } from 'url';

//set up the root directory refrence
//find the global URL using fileURLToPath
// and then turn that into the __dirname (something like Users/Desktop)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// this is the root route - think of this like index.html
router.get("/", (req, res) => {
  // res.send("hello from express!");
  //send back the index.html file
  //   res.sendFile(path.join(__dirname, "views/index.html"));
  // res.sendFile("../views/index.html");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});



router.get("/trevor", (req, res) => {
  res.send("this is trevors page!");
  // res.sendFile(path.join(__dirname, "../views/index.html"));
  console.log("hit my route");
});

router.get("/joe", (req, res) => {
  res.send("this is joes page!");
  // res.sendFile(path.join(__dirname, "../views/index.html"));
  console.log("hit route joe");
});

router.get("/john", (req, res) => {
  res.send("this is john's page!");
  // res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.use((req, res) => {
  console.log('page does not exist');
  res.sendFile(path.join(__dirname, "../views/404.html"));
})

//export the router and make it available to app.js
// module.exports = router;
export default router;
