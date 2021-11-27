import { BtnClose } from "./styles"
import { AiOutlineClose } from 'react-icons/ai'


interface ButtonCloseProps{
    onClick?: ()=>void
}

export default function ButtonClose(props: ButtonCloseProps) {

    return(
       <BtnClose  onClick={props.onClick}>
          <AiOutlineClose fontSize={20} />
       </BtnClose >
    )
}