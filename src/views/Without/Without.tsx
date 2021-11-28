import { Container, Title , SubTitle, Text, BoxButton} from './styles'
import img from '../../assets/astronaut.png'
import useAppData from '../../data/hook/useApiData'
import ButtonSeach from '../../components/Buttons/ButtonSeach'
import { useNavigate } from 'react-router'

export default function Without(){
    const ctx = useAppData()
    const navigate = useNavigate()

    return(<Container>
            <img src={img} alt="astronaut" />
            <Title tema={ctx.tema}>Está meio vazio por aqui!</Title>
            <SubTitle tema={ctx.tema}>Procure por pokémons para adicioná-los aos seus favoritos.</SubTitle>
            <BoxButton>
                <ButtonSeach onClick={()=>{navigate('/seach')}}>
                    <Text tema={ctx.tema}>
                        Procurar pokémons
                    </Text>
                </ButtonSeach>
            </BoxButton>
          </Container >)
}