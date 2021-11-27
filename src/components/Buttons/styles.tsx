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
interface BtnProps{
    tema?: string
}

export const Btn = styled.button`
    height: 31px;
    width: 139px;
    border-radius: 22px;
    cursor: pointer;
    background-color: ${(props: BtnProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
    border: ${(props: BtnProps)=> props.tema === 'dark'? `solid 1px ${cores.white}` : `solid 1px ${cores.gray_500}`};
    color:${(props: BtnProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    font-family: ${fonts.family};
    font-weight: ${fonts.medium};
    font-size: 12px;
    margin: 5px;
`;