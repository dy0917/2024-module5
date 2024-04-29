const express = require("express");
const getTodo = require("../todoController");
const  a = require("./Controllers/calculatorController");
const {addNumbers, b} =a;

// ports.forEach((port) => {
const app = express();
const calculatorRoutes = require("./calculatorRoute");
app.use(express.json());

app.use(( req, res, next) => {
  const header = req.headers;
  // if (!header.authorization) {
  //   res.sendStatus(401);
  //   return;
  // }
  console.log("top", header);
  next();
});

app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);
app.get("/a", (req, res) => {
  res.json({ a: "a" });
});

app.use("/add", (req, res, next) => {
  const header = req.headers;
  console.log("header ", header);
  console.log("add");
  next();
});
app.get(
  "/add",
  (req, res, next) => {
    const bool = false;
    if (!bool) {
      res.json({});
    }
    console.log("1");
    next();
  },
  (req, res, next) => {
    console.log("2");
    next();
  },
  (request, response) => {
    let number1 = parseInt(request.query.num1);
    let number2 = parseInt(request.query.num2);
    let sum = number1 + number2;
    console.log("query", request.query);
    console.log("headers", request.headers);
    console.log("body", request.body);
    response.json({ result: sum });
  }
);

const todos = [
  { id: 1, title: "Buy groceries" },
  { id: 2, title: "Do laundry!!!" },
];

// GET all todos
app.get("/singleThread", async (req, res) => {
  await count();
  res.json();
});

async function count() {
  for (let i = 0; i < 1000000; i++) {
    console.log(i);
  }
}

app.get("/todos", (req, res) => {
  console.log("api todo", todos);
  res.json(todos);
});

// POST a new todo
app.post("/todos", (req, res) => {
  const tempTodo = req.body;
  const id = Math.max(...todos.map((t) => t.id)) + 1;
  const newTdo = { ...tempTodo, id: id };
  todos.push(newTdo);
  res.status(201).json(newTdo);
});
const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

app.get("/users", (req, res) => {
  const userId = req.query.userId;
  console.log(req.params);
  const user = users.find((user) => user.id == userId);
  console.log(user);
  res.json(user);
});

app.get("/users/:id/cars/:carId", (req, res) => {
  const userId = req.params.id;
  console.log(req.params);
  const user = users.find((user) => user.id == userId);
  console.log(user);
  res.json(user);
});

app.get("/users/:id", (req, res) => {
  const headers = req.headers;
  const userId = req.params.id;
  // try {
  const user = users.find((user) => user.id == userId);
  if (!user) throw new Error();
  res.json(user);
  // } catch (e) {
  //   res.sendStatus(404);
  // }
});

app.post("/users", (req, res) => {
  const body = req.body;
  const maxId = Math.max(...users.map((user) => user.id));
  const newUser = { ...body, id: maxId + 1 };
  users.push(newUser);
  console.log(users);
  res.json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  
  const user = users.find((user) => user.id == id);
  const userIndex = users.findIndex((user) => user.id == id);
  const updatedUser = { ...user, ...body };
  users.splice(userIndex, 1, updatedUser);
  console.log(users);
  res.json(updatedUser);
});

// PUT (update) an existing todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  const found = todos.map((todo) => todo.id).indexOf(id);
  todos.splice(found, 1, updatedTodo);
  res.json(updatedTodo);
});

// DELETE a todo by id
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const found = todos.map((todo) => todo.id).indexOf(id);
  todos.splice(found, 1);
  res.sendStatus(204);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ res: "Something broke!" });
});
module.exports = app
