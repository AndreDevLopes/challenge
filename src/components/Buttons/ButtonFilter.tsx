import { BtnFilter , Text} from './styles'
import useAppData from '../../data/hook/useApiData'

interface ButtonFilterProps{
    text: string,
    select?: boolean,
    onClick?: ()=>void 
}

export default function ButtonFilter(props: ButtonFilterProps) {
    const ctx = useAppData()

    return(<BtnFilter select={props.select} tema={ctx.tema}>
                <Text select={props.select} tema={ctx.tema}>
                     {props.text}
                </Text>
            </BtnFilter>)
}