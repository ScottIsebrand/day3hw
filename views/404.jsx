const React = require('react');

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found 😞</h2>
      <a href="/todos">Back to to-do list</a>
    </div>
  );
}

module.exports = NotFound;
