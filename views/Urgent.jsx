const React = require('react');

function Urgent(props) {
  const { urgentToDos } = props;

  return (
    <div>
      <h1>List of Urgent To-Do's</h1>
      <ul>
        {urgentToDos.map((todo, index) => {
          return (
            <li>
              '<span>{todo.todotask}</span>' is{' '}
              {todo.completed ? 'completed 🙂 ' : 'unfinished'}{' '}
            </li>
          );
        })}
      </ul>
      <br />
      <a href="/todos">See all to-do tasks.</a>
    </div>
  );
}

module.exports = Urgent;
