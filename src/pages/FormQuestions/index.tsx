import { FC, useState, useEffect } from "react";
import api from "../../services/api";
import { getQuestions, postQuestions } from "../../services/question";
import { useParams } from "react-router-dom";
import Formulary from "../../components/Formulary";
import Container from "../../components/Container";
import { mockData } from "./mock";
import * as S from "./styles";

const FormQuestions = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getQuestions(id)
        .then((res) => {
          let data = res.data as any[];
          setData(data);
          setQuestions(res.data.questions as any[]);
        })
        .catch((err) => {
          console.log(err);
          const { questions } = mockData;
          setQuestions(questions);
        });
    }
  }, [id]);

  return (
    <>
      <Container>
        <S.StyledTitle>Questionário </S.StyledTitle>
        {questions.length > 0 ? (
          <Formulary questions={questions} />
        ) : (
          <div> Carregando... </div>
        )}
      </Container>
    </>
  );
};
export default FormQuestions;
