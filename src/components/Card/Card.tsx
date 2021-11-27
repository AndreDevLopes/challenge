import { Container,
         Title,
         RowImg,
         RowHeart,
         SubTitle,
         RowText,
         Tag,
         RowTags,
         RowButton
       } from "./styles"
import img from '../../assets/pokemon.png'
import { AiFillHeart } from 'react-icons/ai'
import cores from "../../ui/cores"
import ButtonCard from "../Buttons/ButtonCard"
import useAppData from "../../data/hook/useApiData"


export default function Card() {
    const ctx = useAppData()

    return(<Container tema={ctx.tema}>
                <RowHeart>
                    <AiFillHeart fontSize={30} color={ctx.tema === 'dark'? cores.white : cores.heart} />
                </RowHeart>
                <RowImg>
                    <img src={img} alt="pokemon" />
                </RowImg>
                <RowText>
                    <Title tema={ctx.tema}>Pikachu</Title>
                    <SubTitle>ID: 101</SubTitle>
                </RowText>
                <RowTags>
                    <Tag bg={cores.primary} color={cores.gray_500}>Elétrico</Tag>
                    <Tag bg={cores.dange} color={cores.white}>Fire</Tag>
                </RowTags>
                <RowButton>
                    <ButtonCard text="Ver detalhes" onClick={()=>{}} />
                </RowButton>
           </Container >)
} 