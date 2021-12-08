import { ButtonProps } from 'antd';
import { FC } from 'react';
import * as S from './styles';

const Container: FC< ButtonProps > = ( props ) => {
    return(        
        <S.StyledContainer {...props}> { props.children } </S.StyledContainer>
    )
}; export default Container;