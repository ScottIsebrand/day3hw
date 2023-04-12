const React = require('react');

function NewGroceryItem() {
  return (
    <div>
      <h1>New Grocery Item</h1>
      {/* NOTE: action is the route (telling form where to go); method is the HTTP verb.*/}
      <form action="/addNewGroceryItem" method="POST">
        To-do: <input type="text" name="product" />
        <br />
        <input type="submit" value="Add Grocery Item" />
      </form>
      <br />
      <a href="/todos">Or go back to the list of to-do tasks</a>
    </div>
  );
}

module.exports = NewGroceryItem;
