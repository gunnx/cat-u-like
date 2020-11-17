import axios from "axios";
import { API_KEY, BASE_API_URL } from "../config";

const http = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export default http;
