const React = require('react');

function Index(props) {
  const { todos } = props;

  return (
    <div>
      <h1>List of To-Do's</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              Task '<a href={`/todos/${index}`}>{todo.todotask}</a>' is{' '}
              {todo.completed ? 'completed 🙂 ' : 'unfinished'}{' '}
            </li>
          );
        })}
      </ul>
      <a href="/todos/urgent">See urgent to-dos</a>
      <br />
      <a href="/todos/new">Create a new to-do task</a>
    </div>
  );
}

module.exports = Index;
