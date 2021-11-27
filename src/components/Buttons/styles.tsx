import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts';

interface TemaProps{
    tema?: string
}

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

export const Btn = styled.button`
    height: 31px;
    width: 139px;
    border-radius: 22px;
    cursor: pointer;
    background-color: ${(props: TemaProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
    border: ${(props: TemaProps)=> props.tema === 'dark'? `solid 1px ${cores.white}` : `solid 1px ${cores.gray_500}`};
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnLogout = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-self: flex-end;
    height: 28px;
    width: 89px;
    border-radius: 8px;
    border: ${(props: TemaProps)=> props.tema === 'dark'? `solid 1px ${cores.white}` : `solid 1px ${cores.gray_500}`};
    cursor: pointer;
    background-color: transparent;
`;

export const Text = styled.p`
    font-family: ${fonts.family};
    font-weight: ${fonts.medium};
    font-size: 12px;
    margin: 5px;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
`;