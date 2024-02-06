const { v4 } = require("uuid");
const router = require("express").Router();
let todos = [];

const checkAuth=require("../middleware/checkAuth");
router.get("", (req, res) => {
  res.json(todos);
});

router.get("/:id",checkAuth,(req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);
  return res.json(todo);
});
router.post("",checkAuth, (req, res) => {
  const { title } = req.body;
  const todo = {
    id: v4(),
    title,
    completed: false,
  };
  todos.push(todo);
  return res.json(todos);
});

router.put("/:id",checkAuth, (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index].completed = !todos[index].completed;
  return res.json(todos[index]);
});

router.delete("/:id",checkAuth, (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => {
    return todo.id !== id;
  });
  return res.json(todos);
});

module.exports = router;
