import { Nav,
         Logo,
         Ul,
         Li,
         Row,
         Col,
         BoxButton,
         BoxLogo
        } from "./styles"
import logodark from '../../assets/logodark.png'
import ButtonLogout from "../Buttons/ButtonLogout"
import useAppData from "../../data/hook/useApiData"


export default function Navbar(){
    const ctx = useAppData()
   
    return(<Nav tema={ctx.tema}>
                <Row>
                    <Col size={2}>
                        <BoxLogo>
                            <Logo src={logodark} alt="logo" />
                        </BoxLogo>
                    </Col>
                    <Col size={1}>
                        <Ul>
                            <Li tema={ctx.tema}>Favoritos</Li>
                            <Li tema={ctx.tema}>Procurar</Li>
                            <Li tema={ctx.tema}>Ver todos</Li>
                        </Ul>
                    </Col>
                    <Col size={2}>
                        <BoxButton>
                             <ButtonLogout />
                        </BoxButton>
                    </Col>
                </Row>
          </Nav >)
}