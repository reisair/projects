import axios from "axios";

const getData = async (url) => {
  const todosResponse = await axios.get(url);

  let todos = todosResponse.data;

  if (!Array.isArray(todos)) {
    todos = [todos];
  }

  const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users/",
  );
  const users = usersResponse.data;
  const populatedData = todos.map((todo) => {
    const user = users.find((user) => user.id === todo.userId);
    const {name, username, email} = user;
    const newTodo = {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      user: {
        name,
        username,
        email,
      },
    };
    return newTodo;
  });
  console.log(populatedData);

};
getData("https://jsonplaceholder.typicode.com/todos/2");
