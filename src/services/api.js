import axios from "axios";

export const api = axios.create({
  //baseURL: 'http://localhost:3000'
  baseURL: 'https://food-explorer-api-render.onrender.com'
});