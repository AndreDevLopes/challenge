import  ButtonLogin from "../../components/Buttons/ButtonLogin"
import Input from "../../components/Inputs/Input"
import { Form , Row, BoxButton} from './styles'


export default function FormLogin(){
    return(<Form>
                <Row>
                    <Input type="email" placeholder="Email" onChange={(e)=>{}} />      
                </Row>
                <Row>
                    <Input type="password" placeholder="senha" onChange={(e)=>{}} />
                </Row>
                <BoxButton>
                    <ButtonLogin  onClick={()=>{}}>
                        Entrar
                    </ButtonLogin>
                </BoxButton>
            </Form>)
}