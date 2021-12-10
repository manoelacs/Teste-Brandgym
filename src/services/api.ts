import axios from "axios";

const api = axios.create({
  baseURL:
    "https://www.staging.purplemetrics.com.br/api/v1/list_questions/3ab56d05-278e-4cbe-bf15-ba2535d6b740/",
});

export default api;
