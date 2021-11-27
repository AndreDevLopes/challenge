import { Btn , Text } from "./styles"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import cores from '../../ui/cores'

interface ButtonTemaProps{
    tema?: string,
    onClick?: ()=>void
}

export default function ButtonTema(props: ButtonTemaProps){
    
    return(
        <Btn onClick={props.onClick} tema={props.tema}>
            {props.tema === 'dark'? <BsFillSunFill color={cores.white} /> : <BsFillMoonFill />}
            {props.tema === 'dark'? <Text tema={props.tema} >Tema claro</Text> : <Text tema={props.tema}>Tema escuro</Text>}
        </Btn>
    )
}