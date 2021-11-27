import styled from 'styled-components'
import cores from '../../ui/cores'

interface ContainerProps{
    tema?:string
}

export const Container = styled.div`
     background-color: ${(props: ContainerProps)=> props.tema === 'dark'? `${cores.gray_500}` : `${cores.white}`};
`;