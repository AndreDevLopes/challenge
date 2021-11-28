import styled from "styled-components"
import cores from '../../ui/cores'
import fonts from "../../ui/fonts";

interface TagProp{
    color: string,
    bg:string
}

interface TemaProp{
    tema?:string
}

export const Container = styled.main`
    height: 256px;
    width: 165px;
    border-radius: 8px;
    background-color: ${(props: TemaProp)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.white}`};
    padding:10px;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
    margin-right: 23px;
`;

export const Title = styled.h1`
    font-family: ${fonts.family};
    font-size: 18px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props: TemaProp)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
`;

export const SubTitle = styled.h2`
    font-family: ${fonts.family};
    font-size: 13px;
    font-style: normal;
    font-weight: ${fonts.medium};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${cores.gray_300};
`;

export const RowImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RowHeart = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const RowText = styled.div`
    margin-top: 10px;
`;

export const RowTags = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    > h2{
        margin-right: 5px;
    }
`;

export const RowButton = styled.div`
    margin-top: 10px;
`;

export const Tag = styled.h2`
    height: 20px;
    width: 50.54px;
    border-radius: 8px;
    font-family: ${fonts.family};
    font-size: 8px;
    font-style: normal;
    font-weight: ${fonts.medium};
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    background-color: ${(props: TagProp) => props.bg};
    color: ${(props: TagProp)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;