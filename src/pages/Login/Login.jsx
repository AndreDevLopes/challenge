import FormLogin from "../../views/Forms/FormLogin"
import ButtonTema from "../../components/Buttons/ButtonTema"
import { Container,
         Column,
         Title,
         Row,
         Img,
         Logo } from './styles'
import logo from '../../assets/logo.png'
import img from '../../assets/light.png'
import useAppData from "../../data/hook/useApiData"


export default function Login(){
    const ctx = useAppData()

    return (<Container>
                <Column> 
                    <Row>
                        <Logo src={logo} alt="logo" />
                        <Title>Comece a coletar pokémons!</Title> 
                        <FormLogin />  
                        <ButtonTema tema={ctx.tema} onClick={ctx.alternarTema} />
                    </Row> 
                </Column>
                <Column>
                    <Img src={img}  /> 
                </Column>
            </Container>)
}