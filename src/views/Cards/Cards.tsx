import Card from "../../components/Card/Card"
import { Container } from "./styles"

interface Poke{
    name: string,
    url: string
    pokemon:{
        name: string,
        url: string  
    }
}

interface CardsProps{
    pokes:Poke[]
}


export default function Cards(props: CardsProps) {

    const handleCards = () =>{
        let list = props.pokes.map((item, index)=>{
            return <Card key={index}
                         name={item.name? item.name : item.pokemon.name}
                         url={item.url? item.url : item.pokemon.url} />
        })
        return(<>{list}</>)
    }

    return <Container>
               {handleCards()}
            </Container>
}