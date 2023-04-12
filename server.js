const { request } = require('express');
const express = require('express');
// the data/to-dos
const todosdata = require('./models/todos');
const app = express();
const PORT = 3000;

// Configure the app for jsx-view-engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Mount middleware (app.use)
app.use(express.urlencoded({ extended: false }));

// Mount routes
app.get('/', (req, res) => {
  res.render('Home');
});

// *Index Route: returns a list of todos
app.get('/todos', (req, res) => {
  res.render('Index', { todos: todosdata });
});

app.post('/todos', (req, res) => {
  // if (req.body.completed === 'on') {
  //   req.body.completed = true;
  // } else {
  //   req.body.completed = false;
  // }
  // console.log(req.body);
  // Below: Overriding .completed property of 'req.body'; if it doesn't exist already, I am adding it to 'req.body' object
  req.body.completed = req.body.completed === 'on';
  // if (req.body.urgent === 'on') {
  //   req.body.urgent = true;
  // } else {
  //   req.body.urgent = false;
  // }
  // Below: Overriding .urgent property of 'req.body'; if it doesn't exist already, I am adding it to 'req.body' object

  req.body.urgent = req.body.urgent === 'on';
  // console.log(req.body);
  todosdata.push(req.body);
  res.redirect('/todos');
});

app.post('/addNewGroceryItem', (req, res) => {
  todosdata[2].shoppingList.push(req.body.product);
  res.redirect('/todos/2');
});

app.get('/new-grocery-item', (req, res) => {
  res.render('NewGroceryItem');
});

// *NewToDo Route: returns a form to create a new todo
app.get('/todos/new', (req, res) => {
  res.render('NewToDo');
});

app.get('/todos/urgent', (req, res) => {
  res.render('Urgent', {
    urgentToDos: todosdata.filter((todo) => todo.urgent === true),
  });
});

// *Show Route: to return/send back a SINGLE resource (ie todo)
app.get('/todos/:indexOfTodosArray', (req, res) => {
  res.render('Show', { todo: todosdata[req.params.indexOfTodosArray] });
});

// *404 Route: returns a 404 Page Not Found
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// routes are what's on your server
// app.get is request and  res.send and res.render are ways for responding
// create 10 app.get
