const express = require("express");
const router = express.Router();
const {addNumbers} = require('./Controllers/calculatorController')

// new route for adding two numbers
router.use((req, res, next) => {
  console.log("calculator");
  next();
});
router.get("/add", addNumbers);

router.post("/add", (req,res)=>{
  const a =""
  const b = "";
const result =   AbortController.add()
res.json();
}
);
module.exports = router;
