import { BtnCard , Text} from './styles'
interface ButtonCardProps{
    text: string,
    onClick?: ()=>void
}

export default function ButtonCard(props: ButtonCardProps) {
    return (<BtnCard onClick={props.onClick} >
                <Text>{props.text}</Text>
            </BtnCard >)
}