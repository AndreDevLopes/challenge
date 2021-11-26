import styled from 'styled-components'
import fonts from '../../ui/fonts'


export const Container = styled.div`
    display: flex;
    margin: 0;
`;

export const Column = styled.div`
    flex-direction: column;
    padding: 10px;
    max-width: 500px;
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
`;

export const Img = styled.img`
    width: 59vw;
    height: 95vh;
`;

export const Logo = styled.img`
    width: 250px;
    margin-bottom: 70px;
`;

