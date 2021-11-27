import { BtnModal } from './styles'

interface ButtonModalProps{
    children?: any,
    color: string,
    onClick?: ()=>void
}

export default function ButtonModal(props: ButtonModalProps) {
    return(<BtnModal color={props.color} onClick={props.onClick}>
                {props.children}
           </BtnModal>)
}