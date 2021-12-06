import api from "./api";

interface IQuestions {
  options: [
    {
      id: string;
      text: string;
    }
  ];
}

export const getQuestions = (id: string | undefined) => {
  return api.get(`user=${id}?fields=theme`);
};

export const postQuestions = (id: string, data: IQuestions) => {
  return api.post(`user=${id}`, data);
};
