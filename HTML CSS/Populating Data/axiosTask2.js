import axios from "axios";

const getData = async () => {
    const todosResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/",
    );
    const todos = todosResponse.data;
    const populatedData = await Promise.all(
        todos.map(async (todo) => {
          const usersResponse = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`,
          );
          const user = usersResponse.data;
          const populatedItem = {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            user,
          };
          return populatedItem;
        }),
    );
  };
  getData("https://jsonplaceholder.typicode.com/todos/");
  