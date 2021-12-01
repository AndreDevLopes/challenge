import FormLogin from "../../views/Forms/FormLogin"
import ButtonTema from "../../components/Buttons/ButtonTema"
import { Container,
         Column,
         Title,
         Row,
         Img,
         Logo,
         BoxTitle } from './styles'
import logo from '../../assets/logo.png'
import img from '../../assets/light.png'
import imgDark from '../../assets/dark.png'
import useAppData from "../../data/hooks/useApiData"



export default function Login(){

    const ctx = useAppData()

    return (<Container tema={ctx.tema}>
                <Column> 
                    <Row>
                        <Logo src={logo} alt="logo" />
                        <BoxTitle>
                            <Title tema={ctx.tema}>Comece a coletar pokémons!</Title> 
                        </BoxTitle>
                        <FormLogin />  
                        <ButtonTema tema={ctx.tema} onClick={ctx.alternarTema} />
                    </Row> 
                </Column>
                <Column>
                    <Img src={ctx.tema === 'dark'? imgDark : img}  /> 
                </Column>
            </Container>)
}