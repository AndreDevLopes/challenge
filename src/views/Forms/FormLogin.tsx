import { useState } from "react"
import  ButtonLogin from "../../components/Buttons/ButtonLogin"
import Input from "../../components/Inputs/Input"
import { Form , Row, BoxButton} from './styles'
import { useNavigate } from "react-router-dom"


export default function FormLogin(){
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate= useNavigate()

    const login = (e: any) =>{
        e.preventDefault()
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        navigate('/home')
    }

    return(<Form onSubmit={(e)=>{login(e)}}>
                <Row>
                    <Input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />      
                </Row>
                <Row>
                    <Input type="password" placeholder="senha" onChange={(e)=>{setPassword(e.target.value)}} />
                </Row>
                <BoxButton>
                    <ButtonLogin>
                        Entrar
                    </ButtonLogin>
                </BoxButton>
            </Form>)
}