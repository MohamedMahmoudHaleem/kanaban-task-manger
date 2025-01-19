import axios from "axios";

// 'https://dummyjson.com/todos/1'
const baseURL = "https://dummyjson.com/todos";
const limit = 5;
const skip = 10;

export const getRequest = async () => {
  const { data: todos } = await axios.get(
    `${baseURL}?limit=${limit}&skip=${skip}`,
    {
      // params: query,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return todos;
};
