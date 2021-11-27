import styled from 'styled-components'
import fonts from '../../ui/fonts'
import cores from '../../ui/cores'

interface ContainerProps{
    tema?: string
}

interface TitleProps{
    tema?: string
}

export const Container = styled.div`
    display: flex;
    margin: 0;
    background-color: ${(props: ContainerProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
`;

export const Column = styled.div`
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding:0 80px;
    height: 95vh;
`;

export const Title = styled.h1`
    font-family: ${fonts.family};
    font-size: 36px;
    font-weight: ${fonts.bold};
    color: ${(props: TitleProps)=> props.tema === 'dark'? `${cores.primary}` : `${cores.gray_500}`};
`;

export const Img = styled.img`
    width: 58.8vw;
`;

export const Logo = styled.img`
    width: 250px;
    margin-bottom: 50px;
    margin-top: 20px;
`;

export const BoxTitle = styled.div`
    margin-bottom: 50px;
`;