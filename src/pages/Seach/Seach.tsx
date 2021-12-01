import Layout from "../../views/Layout/Layout"
import InputSeach from "../../components/Inputs/InputSeach"
import { Container, Col, Row, RowCard} from './styles'
import { useState } from 'react'
import { getPokemonByName } from '../../server/server'
import CardBase from '../../components/Card/CardBase'

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

export default function Seach(){
    const [poke, setPoke] = useState<Poke>()
    const [name, setName] = useState('')

    const listPokeByName = async () =>{
        const res = await getPokemonByName(name)
        if(res.status === 200){
            setPoke(res.data)
        }
    }

    return(<Layout>
            <Container>
                <Row>
                    <Col size={1}>
                        <InputSeach
                             type="text"
                             placeholder="Procure por pokémons"
                             onChange={(e)=>{setName(e.target.value)}}
                             onClick={()=>{listPokeByName()}} />
                    </Col>
                </Row>
                <Col size={4}>
                    <RowCard>
                       {poke? <CardBase poke={poke} /> : false}
                    </RowCard>
                </Col>
            </Container>
          </Layout>)
}