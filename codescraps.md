Do a req.query with an input form for first and last name?
res.send('hello ' + req.query.firstName + ' ' + req.params.lastName);

Work with a

======
Server.js

if (req.body.urgent === 'on') {
req.body.urgent = true;
} else {
req.body.urgent = false;
}

======
NewToDo.jsx

Is Urgent: <input type="checkbox" name="urgent" />
<br />

======
Show.jsx

{todo.urgent ? 'is URGENT' : 'is not urgent'}{' '}
and

======
Index.jsx

{todo.urgent ? 'urgent❗' : 'not urgent'} and{' '}
