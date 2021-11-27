import styled from "styled-components"
import fonts from '../../ui/fonts'
import cores from '../../ui/cores'

interface TemaProps{
    tema?:string
}

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: ${fonts.family};
    font-size: 24px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
`;

export const SubTitle = styled.p`
    font-family: ${fonts.family};
    font-size: 14px;
    font-style: normal;
    font-weight: ${fonts.regular};
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
`;

export const Text = styled.p`
    font-family: ${fonts.family};
    font-size: 14px;
    font-style: normal;
    font-weight: ${fonts.medium};
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
`;

export const BoxButton = styled.div`
    margin-top:50px;
`;