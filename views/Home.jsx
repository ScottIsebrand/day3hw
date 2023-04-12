const React = require('react');

function Home() {
  return (
    <div>
      <h1>To-Do List App</h1>
      <p>
        <a href="/todos">See Your To-Do List</a>
      </p>
      <p>
        <a href="/todos/new">Create a To-Do Task</a>
      </p>
    </div>
  );
}
module.exports = Home;
