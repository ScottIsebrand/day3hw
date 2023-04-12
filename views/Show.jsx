// const { useState } = require('react');
const React = require('react');

function Show(props) {
  const { todo } = props;

  return (
    <div>
      <p>
        The task '{todo.todotask}'{' '}
        {todo.completed ? 'is completed' : 'is unfinished'}.
      </p>
      <br />

      {todo.todotask === 'get groceries' && (
        <div>
          <p>Shopping list:</p>
          <ol>
            {todo.shoppingList.map((product, index) => {
              return <li key={index}>{product}</li>;
            })}
          </ol>
          <a href="/new-grocery-item">Add item to groceries list</a>
        </div>
      )}
      <a href="/todos">Back to the list of to-do tasks.</a>
    </div>
  );
}

module.exports = Show;
