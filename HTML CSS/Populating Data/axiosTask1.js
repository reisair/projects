import axios from "axios";

const getData = async (url) => {
  const response = await axios.get(url);
  console.log(response.data);
};
getData("https://jsonplaceholder.typicode.com/todos/1");