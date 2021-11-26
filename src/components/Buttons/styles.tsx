import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts';

export const Button = styled.button`
    background-color: ${cores.primary};
    font-size: 16px;
    font-family: ${fonts.family};
    font-weight: ${fonts.medium};
    color: ${cores.gray_500};
    height: 54px;
    width: 100%;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;