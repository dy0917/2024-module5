const express = require("express");
const getTodo = require("../todoController");

const ports = [8081, 8082, 8083];
const port = 3000;
// ports.forEach((port) => {
const app = express();
app.use(express.json());

app.use("/", express.static("public"));

app.get("/a", (req, res) => {
  res.json({ a: "a" });
});

app.get("/add", (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);
  let sum = number1 + number2;
  console.log("query",request.query);
  console.log('headers',request.headers);
  console.log("body",request.body);
  response.json({ result: sum });
});

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

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
