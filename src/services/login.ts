import api, { TOKEN_KEY } from "./api";

export interface ISignIn {
  login: string;
  password: string;
}

export const signIn = async (signInData: ISignIn) => {
  const { login, password } = signInData;
  const response = await api.post("auth/login", { login, password });
  console.log(response);

  sessionStorage.setItem(TOKEN_KEY, response?.data?.accessToken);
};

export const signOut = async () => {
  sessionStorage.removeItem(TOKEN_KEY);
};