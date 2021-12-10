export const mockData = {
  questions: [
    {
      id: 1,
      name: "Score",
      text: "O quanto você apoia o sucesso da Brand Gym?",
      order: 1,
      option_set: [
        {
          id: 1,
          text: "Apoio ativamente",
          option_type: "STRONGLY_SUPPORT",
          order: 1,
          question: 1,
        },
        {
          id: 2,
          text: "Apoio",
          option_type: "SUPPORT",
          order: 2,
          question: 1,
        },
        {
          id: 3,
          text: "Apoio em parte",
          option_type: "PARTIALLY_SUPPORT",
          order: 3,
          question: 1,
        },
        {
          id: 4,
          text: "Sou neutro",
          option_type: "NEUTRAL",
          order: 4,
          question: 1,
        },
        {
          id: 5,
          text: "Não apoio",
          option_type: "NOT_SUPPORT",
          order: 5,
          question: 1,
        },
        {
          id: 6,
          text: "Sou contra",
          option_type: "AGAINST",
          order: 6,
          question: 1,
        },
      ],
    },
  ],
  theme: {
    primary_color: "1552FF",
    text_color_on_bg_primary: "FFFFFF",
  },
};
