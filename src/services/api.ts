import axios from "axios";

export const TOKEN_KEY = "__collier_digital__";

export const getAuthenticationToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

const api = axios.create({
  baseURL:
    "https://www.staging.purplemetrics.com.br/api/v1/list_questions/3ab56d05-278e-4cbe-bf15-ba2535d6b740/",
});

export default api;
