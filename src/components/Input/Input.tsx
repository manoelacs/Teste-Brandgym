import { InputProps } from 'antd';
import { FC } from 'react';
import * as S from './styles';

const Input:FC< InputProps > = ( props ) => {
    return(
        <S.StyledInput {...props} />
    )
 }; export default Input;