import axios from "axios";

const getData = async (url) => {
  const todosResponse = await axios.get(url);
  let todos = todosResponse.data;
  if (!Array.isArray(todos)) {
    todos = [todos];
  }
  const populatedData = await Promise.all(
      todos.map(async (todo) => {
        const usersResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${todo.userId}`,
        );
        const {name, username, email} = usersResponse.data;
        const populatedItem = {
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
          user: {
            name,
            username,
            email,
          },
        };
        return populatedItem;
      }),
  );
  console.log(populatedData);
};
getData("https://jsonplaceholder.typicode.com/todos/9");
