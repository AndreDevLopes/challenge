import { BtnClose } from "./styles"
import { AiOutlineClose } from 'react-icons/ai'
import useAppData from '../../data/hooks/useApiData'
import cores from '../../ui/cores'


interface ButtonCloseProps{
    onClick?: ()=>void
}

export default function ButtonClose(props: ButtonCloseProps) {
    const cxt = useAppData()

    return(
       <BtnClose  onClick={props.onClick}>
          <AiOutlineClose fontSize={20} color={cxt.tema === "dark"? cores.white : cores.gray_500 } />
       </BtnClose >
    )
}