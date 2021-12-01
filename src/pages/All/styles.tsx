import styled from "styled-components"
import { device } from '../../ui/devices'

export const RowButtons = styled.section`
    padding: 20px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > button{
        margin-right:5px;
    }

    @media ${device.tablet}{
        padding: 20px 0 0 0;
        margin-left: 4%;
        display: block;
    }
`;