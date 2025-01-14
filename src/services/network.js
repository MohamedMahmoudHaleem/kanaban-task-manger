import axios from "axios";

// 'https://dummyjson.com/todos/1'
const baseURL = "https://dummyjson.com";
const params = "todos";
const endPoint = "10";

export const getRequest = async () => {
  const { data: todos } = await axios.get(`${baseURL}/${params}`, {
    // params: query,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return todos;
};
