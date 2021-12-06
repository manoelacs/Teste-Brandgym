import { ButtonProps } from 'antd';
import { FC } from 'react';
import * as S from './styles';

const Button: FC< ButtonProps > = ( props ) => {
    return(        
        <S.StyledButton {...props}> { props.children } </S.StyledButton>
    )
}; export default Button;