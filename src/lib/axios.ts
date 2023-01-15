import { BASE_API_URL } from "@/constants/base-api-url.constant";
import axios from "axios";

export const axiosInstance = axios.create({ baseURL: BASE_API_URL });
