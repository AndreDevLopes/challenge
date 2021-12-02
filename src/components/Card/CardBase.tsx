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
import { AiFillHeart } from 'react-icons/ai'
import cores from "../../ui/cores"
import ButtonCard from "../Buttons/ButtonCard"
import useAppData from "../../data/hooks/useApiData"
import Modal from '../../views/Modal/Modal'
import { validationTypePoke } from '../../functions/index'
import { useModal } from '../../data/hooks/useModal'

interface CardPokeProps{
    poke?:PokeDetails,
    favorito?: boolean
}

interface PokeDetails{
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



export default function CardBase(props: CardPokeProps) {
    
const ctx = useAppData()
const { poke, favorito } = props
const { modalVisivel, closeModal, openModal} = useModal()


const handleTags = ()=>{
   
   let list = poke?.types.map((item, index)=>{  
      return <Tag key={index} bg={validationTypePoke(item.type.name)} color={cores.white}>{item.type.name}</Tag>
   })
   return(<>{list}</>)
}

return(<Container tema={ctx.tema}>
           <RowHeart>
            { favorito? <AiFillHeart fontSize={30}  color={ctx.tema === 'dark'? cores.white : cores.heart} /> :
               <FiHeart fontSize={30} color={ctx.tema === 'dark'? cores.white : cores.gray_400} />}
           </RowHeart>
           <RowImg>
               <Img src={poke? poke.sprites.front_default : ''} alt="pokemon" />
           </RowImg>
           <RowText>
               <Title tema={ctx.tema}>{poke?.name}</Title>
               <SubTitle>ID: {poke? poke.id : false}</SubTitle>
           </RowText>
           <RowTags>
               { poke ? handleTags() : false}
           </RowTags>
           <RowButton>
               <ButtonCard text="Ver detalhes" onClick={()=>{openModal()}} />
           </RowButton>
           {poke? <Modal poke={poke} favorito={favorito} visivel={modalVisivel} onClick={()=>{closeModal()}} /> : false}
      </Container >)
} 