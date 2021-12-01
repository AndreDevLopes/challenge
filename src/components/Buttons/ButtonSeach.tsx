import { BtnSeach } from "./styles"
import useAppData from '../../data/hooks/useApiData'

interface ButtonSeachProps{
    children?: any,
    onClick?: ()=>void
}

export default function ButtonSeach(props: ButtonSeachProps) {
    const ctx = useAppData()

    return(
       <BtnSeach tema={ctx.tema} onClick={props.onClick}>
           {props.children}
       </BtnSeach>
    )
}