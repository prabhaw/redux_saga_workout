import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
