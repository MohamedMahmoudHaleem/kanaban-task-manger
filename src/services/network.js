import axios from "axios";

// 'https://dummyjson.com/todos/1'
const baseURL = "https://dummyjson.com";
const params = "todos";
const endPoint = "1";

export const getRequest = async () => {
  const { data: todos } = await axios.get(`${baseURL}/${params}/${endPoint}`, {
    // params: query,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return todos;
};
