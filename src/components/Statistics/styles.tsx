import styled from "styled-components"
import fonts from '../../ui/fonts'
import cores from '../../ui/cores'

interface ColProps{
    size: number
}

export const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Col = styled.div`
    flex:${(props: ColProps)=>props.size};
`;

export const Text = styled.p`
    font-family: ${fonts.family};
    font-size: 12px;
    font-style: normal;
    font-weight: ${fonts.medium};
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`;

export const Number = styled.p`
    font-family: ${fonts.family};
    font-size: 10px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
`;

export const BarCont = styled.div`
    width: 100%;
    background-color: ${cores.gray_200} ;
    height: 9px;
    border-radius: 8px;
`;

export const BarProg = styled(BarCont)`
    width: ${(props: ColProps)=> `${props.size}%`};
    background-color: ${cores.primary} ;
`;

export const Title = styled.h1`
    font-family: ${fonts.family};
    font-size: 13px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${cores.gray_200}
`;