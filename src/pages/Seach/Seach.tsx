import Layout from "../../views/Layout/Layout"
import InputSeach from "../../components/Inputs/InputSeach"
import { Container, Col, Row, RowCard} from './styles'
import { useState } from 'react'
import CardBase from '../../components/Card/CardBase'
import { useFetchPoke } from '../../data/hooks/useFetchPoke'


export default function Seach(){

    const [name, setName] = useState('')
    const {poke, listPokeByName} = useFetchPoke()

    return(<Layout>
            <Container>
                <Row>
                    <Col size={1}>
                        <InputSeach
                             type="text"
                             placeholder="Procure por pokémons"
                             onChange={(e)=>{setName(e.target.value)}}
                             onClick={()=>{listPokeByName(name)}} />
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