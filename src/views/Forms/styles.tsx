import styled from 'styled-components'
import { device } from '../../ui/devices'

export const Form = styled.form`
    height: 60vh;
`;

export const Row = styled.div`
    margin-top: 10px;
    width: 80vw;
    @media ${device.tablet}{
        width: 24vw;
    }
`;

export const BoxButton= styled.div`
    margin-top: 50px;
`;