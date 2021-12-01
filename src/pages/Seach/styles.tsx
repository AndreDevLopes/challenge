import styled from "styled-components"
import { device } from '../../ui/devices'

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
    width: 100%;
    margin-top:30px;
    padding-left: 10%;
    @media ${device.laptop}{
        padding-left: 0;
        width: 50%;
    }
`;

export const Col = styled.div`
    flex:${(props: ColProps)=>props.size};
`;

export const RowCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;