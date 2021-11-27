import { Btn , Text } from "./styles"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

interface ButtonTemaProps{
    tema: string,
    onClick?: ()=>void
}

export default function ButtonTema(props: ButtonTemaProps){
    
    return(
        <Btn onClick={props.onClick} tema={props.tema || 'ligth'}>
            {props.tema === 'dark'? <BsFillSunFill /> : <BsFillMoonFill />}
            {props.tema === 'dark'? <Text>Tema claro</Text>:<Text>Tema escuro</Text>}
        </Btn>
    )
}