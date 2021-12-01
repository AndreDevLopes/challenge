import styled from 'styled-components'
import cores from '../../ui/cores'
import fonts from '../../ui/fonts'
import { Link } from "react-router-dom"
import { device } from '../../ui/devices'


interface ColProps{
    size: number
}

interface TemaProps{
    tema?: string
}

interface MenuProps{
    visivel?: boolean,
    tema?: string
}


export const Nav = styled.nav`
    height: 50px;
    background-color: ${(props: TemaProps)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.primary}`};
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
`;

export const Logo = styled.img`
    width: 75px;
`;

export const Ul = styled.ul`
    display: none;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    @media ${device.tablet}{
        display: flex;
    }
`;

export const Li = styled(Link)`
    height: 44px;
    display: flex;
    align-items: center;
    font-family: ${fonts.family};
    font-weight: ${fonts.regular};
    font-size: 14px;
    color:${(props: TemaProps)=> props.tema === 'dark'? `${cores.white}` : `${cores.gray_500}`};
    border-bottom: solid ${(props: TemaProps)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.primary}`};
    cursor: pointer;
    text-decoration: none;
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
    display: none;
    @media ${device.tablet}{
        display: block;
    }
`;

export const BoxLogo= styled.div`
    margin-left: 10%;
`;

export const NumFavorito = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${cores.gray_500};
    color:${cores.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;

export const MenuMobileContainer = styled.section`
     background-color: ${(props:  MenuProps)=> props.tema === 'dark'? `${cores.gray_400}` : `${cores.primary}`};
     height: 200px;
     width: 100%;
     position: fixed;
     margin-top: 49px;
     display: ${(props: MenuProps) => props.visivel? "block":"none"};
     z-index: 150;
     padding: 25px;
     > button{
         margin-top: 20px;
         width: 320px;
         justify-content: space-between;
         padding-left: 15px;
         padding-right: 15px;
     }
    @media ${device.tablet}{
        display: none;
    }
`;

export const BoxButtonMobile = styled.div`
    margin-left: 70%;
    @media ${device.tablet}{
        display: none;
    }
`;