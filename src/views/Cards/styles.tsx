import styled from "styled-components"
import { device } from '../../ui/devices'

export const Container = styled.div`
    padding:50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media ${device.tablet}{
        justify-content: start;
        align-items: flex-start;
    }
`;