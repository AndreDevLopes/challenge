import ButtonTema from "../Buttons/ButtonTema"
import useAppData from "../../data/hook/useApiData"
import { Container } from "./styles"

export default function Footer(){
    const ctx = useAppData()
    return(<Container>
                <ButtonTema tema={ctx.tema} onClick={ctx.alternarTema} />
           </Container>)
} 