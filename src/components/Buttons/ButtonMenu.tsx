import { BtnMenu } from "./styles"
import { BiMenu } from 'react-icons/bi'
import useAppData from '../../data/hook/useApiData'
import cores from '../../ui/cores'


interface ButtonMenuProps{
    onClick?: ()=>void
}

export default function ButtonMenu(props: ButtonMenuProps) {
    const cxt = useAppData()

    return(
       <BtnMenu  onClick={props.onClick}>
          <BiMenu  fontSize={20} color={cxt.tema === "dark"? cores.white : cores.gray_500 } />
       </BtnMenu >
    )
}