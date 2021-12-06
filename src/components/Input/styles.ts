import styled from 'styled-components';
import { Input } from 'antd';


export const StyledInput = styled(Input)`
  background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #EFEFEF;
    border-radius: 12px;
    opacity: 1;

   
  .ant-input-suffix, .ant-input-prefix .anticon {
    color: #727272;
    opacity: 0.5;
    width: 19px;
    height: 19px;
    font-size: 16px;
  }
  ::placeholder {
    text-align: left;
    font: normal normal 300 16px/25px Poppins;
    letter-spacing: 0px;
    color: #727272;
    opacity: 0.5;
  }
`;