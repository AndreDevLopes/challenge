import { Container,
         Title,
         RowImg,
         RowHeart,
         SubTitle,
         RowText,
         Tag,
         RowTags,
         RowButton,
         Img
       } from "./styles"

import { FiHeart } from 'react-icons/fi'
import cores from "../../ui/cores"
import ButtonCard from "../Buttons/ButtonCard"
import useAppData from "../../data/hooks/useApiData"
import { useEffect } from 'react'
import Modal from '../../views/Modal/Modal'
import { useFetchPoke } from '../../data/hooks/useFetchPoke'
import { validationTypePoke } from '../../functions/index'
import { useModal } from '../../data/hooks/useModal'

interface CardProps{
    name: string
    url: string
}


export default function Card(props: CardProps) {
    const ctx = useAppData()
    const { poke, seachPokeByUrl} = useFetchPoke()
    const { modalVisivel, openModal, closeModal} = useModal()

    useEffect(()=>{
        seachPokeByUrl(props.url)
    },[props.url, seachPokeByUrl])


    const handleTags = ()=>{

        let list = poke?.types.map((item, index)=>{  
           return <Tag key={index} 
                    bg={validationTypePoke(item.type.name)} 
                    color={cores.white}>{item.type.name}</Tag>
        })
        return(<>{list}</>)
    }

   
    return(<Container tema={ctx.tema}>
                <RowHeart>   
                    <FiHeart fontSize={30} color={ctx.tema === 'dark'? cores.white : cores.gray_400} />
                </RowHeart>
                <RowImg>
                    <Img src={poke? poke.sprites.front_default : ''} alt="pokemon" />
                </RowImg>
                <RowText>
                    <Title tema={ctx.tema}>{props.name}</Title>
                    <SubTitle>ID: {poke? poke.id : false}</SubTitle>
                </RowText>
                <RowTags>
                    { poke ? handleTags() : false}
                </RowTags>
                <RowButton>
                    <ButtonCard text="Ver detalhes" onClick={()=>{openModal()}} />
                </RowButton>
                {poke? <Modal poke={poke} visivel={modalVisivel} onClick={()=>{closeModal()}} /> : false}
                
           </Container >)
} 