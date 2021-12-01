import { BtnLogout, Text } from "./styles"
import { FiLogOut } from 'react-icons/fi'
import useAppData from '../../data/hooks/useApiData'
import cores from '../../ui/cores'

interface ButtonLogoutProps{
    onClick?: ()=>void
}

export default function ButtonLogout(props: ButtonLogoutProps) {
    const ctx = useAppData()

    return(
       <BtnLogout tema={ctx.tema} onClick={props.onClick}>
           <Text tema={ctx.tema} >Sair</Text>
           <FiLogOut color={ctx.tema === 'dark'? cores.white : cores.gray_500 }/>
       </BtnLogout>
    )
}