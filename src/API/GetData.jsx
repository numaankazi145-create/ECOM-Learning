import axios from "axios";
// import { useEffect } from "react";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export async function GetData() {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get("/products");
    return response?.data?.products;
  } catch (error) {
    throw error;
  }
}


