import styled from "styled-components"

interface ColProps{
    size: number
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self:center;
    width: 50%;
    margin-top:50px;
`;

export const Col = styled.div`
    flex:${(props: ColProps)=>props.size};
`;