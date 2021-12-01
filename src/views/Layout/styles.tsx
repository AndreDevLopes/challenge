import styled from 'styled-components'
import cores from '../../ui/cores'
import { device } from '../../ui/devices'

interface ContainerProps{
    tema?:string
}

export const Container = styled.div`
     background-color: ${(props: ContainerProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.gray_100}`};
`;

export const Main = styled.section`
    min-height: 90vh;
    padding-top: 50px;
    @media ${device.tablet}{
        min-height: 80.1vh;
    }
`;