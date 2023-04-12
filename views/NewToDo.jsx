const React = require('react');

function NewToDo() {
  return (
    <div>
      <h1>New To-Do Task Record</h1>
      {/* NOTE: action is the route (telling form where to go); method is the HTTP verb.*/}
      <form action="/todos" method="POST">
        To-do: <input type="text" name="todotask" />
        <br />
        Is Completed: <input type="checkbox" name="completed" />
        <br />
        Is Urgent: <input type="checkbox" name="urgent" />
        <br />
        <input type="submit" value="Create new to-do task" />
      </form>
      <br />
      <a href="/todos">Or go back to the list of to-do tasks</a>
    </div>
  );
}

module.exports = NewToDo;
