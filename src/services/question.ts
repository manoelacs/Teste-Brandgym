import api from "./api";

export interface IResponse {
  id: string;
  text?: string;
}
export interface IQuestions {
  options: IResponse[];
}

export const getQuestions = (id: string | undefined) => {
  return api.get(`user=${id}?fields=theme`);
};

export const postQuestions = (id: string, data: IQuestions) => {
  return api.post(`user=${id}`, data);
};
