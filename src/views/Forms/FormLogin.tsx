import { useState } from "react"
import  ButtonLogin from "../../components/Buttons/ButtonLogin"
import Input from "../../components/Inputs/Input"
import { Form , Row, BoxButton} from './styles'
import { useNavigate } from "react-router-dom"
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


export default function FormLogin(){
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate= useNavigate()

    const login = (e: any) =>{
        e.preventDefault()
        const hashDigest = sha256(email);
        const token= Base64.stringify(hmacSHA512(hashDigest, password));
        localStorage.setItem('token', token)
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