import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from express!");
});

router.get("/trevor", (req, res) => {
  res.send("this is trevors page!");
  console.log("hit my route");
});

router.get("/joe", (req, res) => {
  res.send("this is joes page!");
  console.log("hit route joe");
});

router.get("/john", (req, res) => {
  res.send("this is john's page!");
});

//export the router and make it available to app.js
// module.exports = router;
export default router;
