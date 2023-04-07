const express = require('express');
const app = express();
const PORT = 3000;

// Configure the app for jsx-view-engine
app.set('view engine', 'jsx');
// Mount middleware (app.use)

// Mount routes
app.get('/', (req, res) => {
  res.send('<h1>Todos App But Not Really</h1>');
});

app.listen(3000, () => {
  console.log(`Server running on port: ${PORT}`);
});

// routes are what's on your server
// app.get is request and  res.send and res.render are ways for responding
// create 10 app.get
