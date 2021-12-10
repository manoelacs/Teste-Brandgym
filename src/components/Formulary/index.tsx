import { FC } from "react";
import { Form, Col, Row, Radio, Input, message, Space } from "antd";
import { orderBy } from "lodash";
import Button from "../Button/Button";

import { useParams } from "react-router-dom";
import { postQuestions } from "../../services/question";
import * as S from "./styles";

const { TextArea } = Input;
interface IProps {
  questions: any[];
}

const Formulary: FC<IProps> = ({ questions }) => {
  const [form] = Form.useForm();
  const response: any[] = [];
  const { id } = useParams();

  console.log(questions);

  /*  questions.forEach((question) => {
    response[question.id].add({});
  }); */
  console.log(response);

  const radioChange = (e: any) => {
    console.log("radio2 checked", e);
    const { value, id } = e.target;
    response[id].add({ id: value });
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = Number(e.target.name);
    const value = e.target?.value;
    response[name].add({ id: value });
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    const Answers = { options: response };
    if (id) {
      postQuestions(String(id), Answers)
        .then((res) => {
          const { data } = res;
          if (data.status.ok) {
            message.success("Respostas enviadas com sucesso!");
          } else {
            message.error("Tivemos um erro! Poderia enviar novamente?");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const ordered = orderBy(questions, ["order"], ["asc"]);

  const renderOptions = (options: any[], id: string) => {
    if (options.length > 1) {
      const orderedOptions = orderBy(options, ["order"], ["asc"]);

      return (
        <>
          <Radio.Group onChange={radioChange} id={id}>
            <Space direction="vertical">
              {orderedOptions.map((option) => (
                <Radio value={option.text}> {option.text}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </>
      );
    } else if (options.length === 1) {
      return <TextArea name={id} allowClear onChange={handleChangeInput} />;
    }
  };

  const renderFormItem = (question: any) => {
    return (
      <Row key={question.id}>
        <Col span={24}>
          <S.StyledLabel>{question.text}</S.StyledLabel>
        </Col>
        <Col span={24}>
          <Form.Item
            name={question.id}
            rules={
              question.option_set.length > 1
                ? [{ required: true, message: "Item obrigatório" }]
                : []
            }
            id={question.id}
          >
            {renderOptions(question.option_set, question.id)}
          </Form.Item>
        </Col>
      </Row>
    );
  };

  if (questions) {
    return (
      <Row>
        <Form
          form={form}
          name="validate_other"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
        >
          {ordered.map((question) => {
            return renderFormItem(question);
          })}
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Row>
    );
  } else {
    return <div> not questions</div>;
  }
};
export default Formulary;
