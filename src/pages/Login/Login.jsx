import FormLogin from "../../views/Forms/FormLogin"
import { Container,
         Column,
         Title,
         Row,
         Img,
         Logo} from './styles'
import logo from '../../assets/logo.png'
import img from '../../assets/light.png'

export default function Login(){
    return (<Container>
                <Column> 
                    <Row>
                        <Logo src={logo} alt="logo" />
                        <Title>Comece a coletar pokémons!</Title> 
                        <FormLogin />   
                    </Row> 
                </Column>
                <Column>
                    <Img src={img}  /> 
                </Column>
            </Container>)
}