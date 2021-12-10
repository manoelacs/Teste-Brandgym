import styled from "styled-components";
import { Form } from "antd";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
`;
export const StyledTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #11142d;
  padding-bottom: 30px;
`;

export const Title = styled.p`
  height: 56px;
  text-align: center;
  font: normal normal bold 25px/20px Poppins;
  letter-spacing: 0px;
  color: #404040;
  opacity: 1;
`;
export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
`;
