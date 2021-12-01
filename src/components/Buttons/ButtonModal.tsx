import { BtnModal } from './styles'

interface ButtonModalProps{
    children?: any,
    color: string,
    bg:string,
    onClick?: ()=>void
}

export default function ButtonModal(props: ButtonModalProps) {
    return(<BtnModal bg={props.bg} color={props.color} onClick={props.onClick}>
                {props.children}
           </BtnModal>)
}