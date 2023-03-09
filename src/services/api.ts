import axios from "axios";
import { API_URL } from "../config";

const BASE_API_URI = API_URL;

export const api = axios.create({
  baseURL: BASE_API_URI,
});
