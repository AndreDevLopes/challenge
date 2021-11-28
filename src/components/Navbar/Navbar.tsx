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
import { useNavigate } from "react-router"



export default function Navbar(){
    const ctx = useAppData()
    const navigate = useNavigate()

    const sair = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }
   
    return(<Nav tema={ctx.tema}>
                <Row>
                    <Col size={2}>
                        <BoxLogo>
                            <Logo src={logodark} alt="logo" />
                        </BoxLogo>
                    </Col>
                    <Col size={1}>
                        <Ul>
                            <Li to="/home" tema={ctx.tema}>Favoritos</Li>
                            <Li to="/seach" tema={ctx.tema}>Procurar</Li>
                            <Li to="/all" tema={ctx.tema}>Ver todos</Li>
                        </Ul>
                    </Col>
                    <Col size={2}>
                        <BoxButton>
                             <ButtonLogout onClick={()=>{sair()}} />
                        </BoxButton>
                    </Col>
                </Row>
          </Nav >)
}