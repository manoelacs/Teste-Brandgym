import styled from 'styled-components';
import { Form } from 'antd';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
`;


export const LoginFormWrapper = styled.div`
  display: flex;
  width: calc(100vw/2);
  
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 760px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const LoginForm = styled.div`
   display: flex;
   flex-direction:column;
   justify-content: center;
   width:250px;
`
export const Title = styled.p`
    height: 56px;
    text-align: center;
    font: normal normal bold 25px/20px Poppins;
    letter-spacing: 0px;
    color: #404040;
    opacity: 1;
`
export const Subtitle = styled.p`
    text-align: center;
    font: normal normal 300 14px/18px Poppins;
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
`;
export const BackgroundImageWrapper = styled.div`
    height: 100vh;
    width: calc(100vw/2);
    *, *::before, *::after {
     box-sizing: inherit; 
}
    box-sizing: initial;
    background: transparent linear-gradient(321deg, #007BFF 0%, #1A008E 100%) 0% 
    0% no-repeat padding-box;
    opacity: 1;
     @media (max-width: 760px) {
        display: none;
     }
`;
export const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  //background: green;
`;
export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;  
  
  .ant-form-item-label {
    padding: 0;
  }
  .ant-form-item-label > label {
    color: #646d82;
    height: auto;
  }
  .ant-form-item-label > label.ant-form-item-required::before {
    content: none;
  }
`;
export const LinkText = styled.p`
  text-align: center;
  font: normal normal 300 14px/20px Poppins;
  letter-spacing: 0px;
  color: #727272;
  opacity: 1;
  cursor: pointer;
 // width: fit-content;
  margin-left: auto;
  a { 
    color: #727272;
  }
`;
export const StyledSpan = styled.span`
    text-align: center;
    font: normal normal bold 14px/20px Poppins;
    letter-spacing: 0px;
    
    a { 
      color: #007BFF;
  }
`;