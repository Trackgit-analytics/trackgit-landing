import axios from "axios";
import { API } from "@/models/data/LinkDirectory.ts";

const baseService = axios.create({
  baseURL: API.baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default baseService;
