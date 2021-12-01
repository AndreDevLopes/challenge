import CardFavorito from "../../components/Card/CardFavorito"
import { Container } from "./styles"

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

interface CardsProps{
    pokes: Poke[]
}


export default function CardsFavoritos(props: CardsProps) {

   
    const handleCardsFavoritos = () =>{
        let list = props.pokes.map((item, index)=>{
            return<CardFavorito key={index} poke={item} />
        })
        return(<>{list}</>)
    }

    return <Container>
               {handleCardsFavoritos()}
            </Container>
}