import { useLogin } from "@/lib/auth";

export const LoginForm = () => {
  const { isLoading, mutate } = useLogin();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    mutate({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};
