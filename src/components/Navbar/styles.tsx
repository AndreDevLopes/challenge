import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts'


interface ColProps{
    size: number
}

interface TemaProps{
    tema?: string
}


export const Nav = styled.nav`
    height: 50px;
    background-color: ${(props: TemaProps)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.primary}`};
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 75px;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
`;

export const Li = styled.li`
    height: 44px;
    display: flex;
    align-items: center;
    font-family: ${fonts.family};
    font-weight: ${fonts.regular};
    font-style:normal;
    font-size: 14px;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    border-bottom: solid ${(props: TemaProps)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.primary}`};
    cursor: pointer;
    &:hover{
        color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.primary}` : `${cores.gray_500}`};
        font-weight: ${fonts.semibold};
        border-bottom: solid;
    }
`;


export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Col = styled.div`
    flex:${(props: ColProps)=>props.size};
`;

export const BoxButton = styled.div`
    margin-left: 70%;
`;

export const BoxLogo= styled.div`
    margin-left: 10%;
`;
