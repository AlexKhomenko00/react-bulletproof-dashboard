import { LoginDto, login } from "@/features/auth";
import { configureAuth } from "react-query-auth";

const loginFn = async (loginDto: LoginDto) => {
  return await login(loginDto);
};

const userFn = async () => {
  console.log("userFn");
};

const registerFn = async (credentials: unknown) => {
  console.log("Registered with credentials", credentials);
  // Not used in this example
};

const logoutFn = async () => {
  console.log("Logged out");
  // Not used in this example
};

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});
