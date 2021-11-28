import Card from "../../components/Card/Card"
import { Container } from "./styles"
import { useState, useEffect } from "react"
import { getPokemons } from '../../server/server'

interface Poke{
    name: string,
    url: string
}

export default function Cards() {
    const [pokes, setPokes] = useState<Poke[]>([])

    useEffect(()=>{
        listPokes()
    },[])

    const listPokes = async() =>{
        const res = await getPokemons()
        if(res.status === 200){
            setPokes(res.data.results)
        }
    }

    const HadleCards = () =>{
        let list = pokes.map((item, index)=>{
            return <Card key={index} name={item.name} url={item.url} />
        })
        return(<>{list}</>)
    }

    return <Container>
               {HadleCards()}
            </Container>
}