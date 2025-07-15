import axios from "axios";

export const BASE_API_URL = axios.create({
  baseURL: "http://localhost:8080",
});