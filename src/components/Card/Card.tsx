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
import useAppData from "../../data/hook/useApiData"
import { getPokeByUrl } from '../../server/server'
import { useState, useEffect } from 'react'
import Modal from '../../views/Modal/Modal'

interface CardProps{
    name: string
    url: string
}

interface Poke{
    abilities: Array<any>,
    base_experience: number,
    forms: Array<any>,
    game_indices:Array<any>,
    height: number,
    held_items: Array<any>,
    id: number,
    name: string,
    is_default: boolean,
    location_area_encounters: string,
    moves:Array<any>,
    order: number,
    past_types: Array<any>,
    species: object,
    sprites: Sprites,
    stats:Array<any>,
    types:Array<any>,
    weight:number 
}

interface Sprites{
    front_default: string,
    back_default: string
}



export default function Card(props: CardProps) {
    const ctx = useAppData()
    const [poke, setPoker] = useState<Poke>()
    const [modalVisivel, setModalVisivel] = useState(false)

    useEffect(()=>{
        buscarPoker(props.url)
    },[props.url])

    const buscarPoker = async (url: string) =>{
        const res = await getPokeByUrl(url)
        if(res.status === 200){
            setPoker(res.data)
        }
    }

    const Handletags = ()=>{
        
        let list = poke?.types.map((item, index)=>{  
           return <Tag key={index} 
                    bg={validationTypePoke(item.type.name)} 
                    color={cores.white}>{item.type.name}</Tag>
        })
        return(<>{list}</>)
    }

    const validationTypePoke = (nome: string) =>{
        switch(nome){
            case 'fire': return cores.dange
            case 'water': return cores.secondary
            case 'grass': return cores.success
            case 'poison': return cores.poison
            case 'normal': return cores.normal
            case 'bug': return cores.bug
            case 'flying': return cores.gray_200
            default: return cores.primary
        }
    }
    
    const openModal = () =>{
        let root = document.getElementById('root')
        root!.style.overflow = 'hidden'
        setModalVisivel(true)
        
    }

    const closeModal = () =>{
        let root = document.getElementById('root')
        root!.style.overflow = 'visible'
        setModalVisivel(false)
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
                    { poke ? Handletags() : false}
                </RowTags>
                <RowButton>
                    <ButtonCard text="Ver detalhes" onClick={()=>{openModal()}} />
                </RowButton>
                {poke? <Modal poke={poke} visivel={modalVisivel} onClick={()=>{closeModal()}} /> : false}
                
           </Container >)
} 