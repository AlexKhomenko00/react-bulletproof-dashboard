import { axiosInstance } from "@/lib/axios";
import { LoginDto } from "../dto/login.dto";

export const login = async (dto: LoginDto) => {
  return (await axiosInstance.post("/auth/login", dto)).data;
};
