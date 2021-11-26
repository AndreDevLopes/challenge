import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts';

export const Entrada = styled.input`
    height: 54px;
    width: 99%;
    border-radius: 8px;
    font-family: ${fonts.family};
    font-weight: ${fonts.regular};
    border: solid 1px ${cores.gray_300};
`;