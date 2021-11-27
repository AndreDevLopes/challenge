import { Container, Title , SubTitle, Text, BoxButton} from './styles'
import img from '../../assets/astronaut.png'
import useAppData from '../../data/hook/useApiData'
import ButtonSeach from '../../components/Buttons/ButtonSeach'

export default function Without(){
    const ctx = useAppData()

    return(<Container>
            <img src={img} alt="astronaut" />
            <Title tema={ctx.tema}>Está meio vazio por aqui!</Title>
            <SubTitle tema={ctx.tema}>Procure por pokémons para adicioná-los aos seus favoritos.</SubTitle>
            <BoxButton>
                <ButtonSeach>
                    <Text tema={ctx.tema}>
                        Procurar pokémons
                    </Text>
                </ButtonSeach>
            </BoxButton>
          </Container >)
}