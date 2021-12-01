import styled from "styled-components"
import cores from '../../ui/cores'
import fonts from '../../ui/fonts'
import { device } from '../../ui/devices'
import { Tag } from '../../components/Card/styles'


interface TemaProp{
    tema?:string
}

interface ModalProps{
    visivel?: boolean
}

export const Container = styled.div`
    height: 600px;
    width: 75vw;
    border-radius: 8px;
    padding: 0 24px;
    color: ${(props: TemaProp)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    background-color: ${(props: TemaProp)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.white}`};
    @media ${device.tablet}{
        width: 358px;
    }
`;

export const Box = styled.div`
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index:100;
    display:${(props: ModalProps)=>props.visivel? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
        
`;

export const Header = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`;

export const HeaderTitle = styled.p`
    font-family: ${fonts.family};
    font-size: 16px;
    font-style: normal;
    font-weight: ${fonts.regular};
    text-align: left;
`;

export const TagBody = styled(Tag)`
    height: 30px;
    width: 90px;
    font-size:12px;
`;

export const RowImgs = styled.div`
    display: flex;
    > img{
        margin-right: 5px;
    }
`;

export const Img = styled.img`
    height: 84px;
    width: 78px;
    border-radius: 0px;
`;

export const Title = styled.h1`
    font-family: ${fonts.family};
    font-size: 24px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top:15px;
    > h2{
        margin-right: 18px;
    }
`;

export const SubTitle = styled.h2`
    font-family: ${fonts.family};
    font-size: 18px;
    font-style: normal;
    font-weight: ${fonts.medium};
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
`;

export const Title2 = styled.h1`
    font-family: ${fonts.family};
    font-size: 13px;
    font-style: normal;
    font-weight: ${fonts.semibold};
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${cores.gray_200}
`;