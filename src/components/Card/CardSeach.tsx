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

import { AiFillHeart } from 'react-icons/ai'
import cores from "../../ui/cores"
import ButtonCard from "../Buttons/ButtonCard"
import useAppData from "../../data/hook/useApiData"

interface CardPokeProps{
    poke:Poke
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



export default function Card(props: CardPokeProps) {
const ctx = useAppData()
const poke = props.poke



const Handletags = ()=>{
   
   let list = poke?.types.map((item, index)=>{  
      return <Tag key={index} bg={validationTypePoke(item.type.name)} color={cores.white}>{item.type.name}</Tag>
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


return(<Container tema={ctx.tema}>
           <RowHeart>
               <AiFillHeart fontSize={30} color={ctx.tema === 'dark'? cores.white : cores.heart} />
           </RowHeart>
           <RowImg>
               <Img src={poke? poke.sprites.front_default : ''} alt="pokemon" />
           </RowImg>
           <RowText>
               <Title tema={ctx.tema}>{poke.name}</Title>
               <SubTitle>ID: {poke? poke.id : false}</SubTitle>
           </RowText>
           <RowTags>
               { poke ? Handletags() : false}
           </RowTags>
           <RowButton>
               <ButtonCard text="Ver detalhes" onClick={()=>{}} />
           </RowButton>
      </Container >)
} 