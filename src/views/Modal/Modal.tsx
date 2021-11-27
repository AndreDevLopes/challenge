import { Container,
         Box,
         Header,
         HeaderTitle,
         TagBody,
         RowImgs,
         Img,
         Title,
         Row,
         SubTitle,
         Title2
        } from './styles'
import { RowTags } from '../../components/Card/styles'
import ButtonClose from '../../components/Buttons/ButtonClose'
import cores from '../../ui/cores'
import img1 from '../../assets/pokemon.png'
import img2 from '../../assets/pokemon2.png'
import Statistics from '../../components/Statistics/Statistics'
import ButtonModal from '../../components/Buttons/ButtonModal'


export default function Modal() {
    return(
        <Box>
            <Container>
                <Header>
                    <HeaderTitle>
                       Detalhes
                    </HeaderTitle>
                    <ButtonClose />
                </Header>
                <hr></hr>
                <Title>Pikachu</Title>
                <RowImgs>
                    <Img src={img1}  alt="" />
                    <Img src={img2}  alt="" />
                </RowImgs>
                <Row>
                    <SubTitle>1.23m</SubTitle>
                    <SubTitle>54Kg</SubTitle>
                </Row>
                <RowTags>
                    <TagBody bg={cores.primary} color={cores.gray_500}>Elétrico</TagBody>
                    <TagBody bg={cores.dange} color={cores.white}>Fire</TagBody>
                </RowTags>
                <Row>
                    <Title2>Estatisticas</Title2>
                </Row>
                <Statistics />
                <Row>
                    <ButtonModal color={cores.primary}>
                        Adicionar aos favoritos
                    </ButtonModal>
                </Row>
            </Container>
        </Box>
        )
}