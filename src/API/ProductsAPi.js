// import axios from "axios";
// const BASE_URL = axios.create({
//     baseURL:"https://dummyjson.com/products",
// })

// export const getProductsByCategory = async (category) => {
//   const endpoint = category ? `category/${category}`:"category";
//   const response = await BASE_URL.get(endpoint);
//   return response.data;
// };

import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export const getProductsByCategory = async (category) => {
  const endpoint = category ? `category/${category}` : "";

  const response = await BASE_URL.get(endpoint);
  return response.data;
};