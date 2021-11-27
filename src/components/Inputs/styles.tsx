import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts';

interface EntradaProps{
    tema?: string
}

export const Entrada = styled.input`
    height: 54px;
    width: 91.5%;
    border-radius: 8px;
    font-family: ${fonts.family};
    font-weight: ${fonts.regular};
    font-size: 12px;
    border: solid 1px ${cores.gray_300};
    background-color: ${(props: EntradaProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.gray_100}`};
    color: ${(props: EntradaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    padding-left: 26px;
`;

export const Seach = styled(Entrada)`
    background-color: ${(props: EntradaProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
`;

export const Btn = styled.button`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 55px;
    top:4px;
    background-color: transparent;

`;

export const Container = styled.div`
    display: flex;
    position: relative;
`;