import Layout from "../../views/Layout/Layout"
import InputSeach from "../../components/Inputs/InputSeach"
import { Container, Col, Row} from './styles'

export default function Seach(){
    return(<Layout>
            <Container>
                <Row>
                    <Col size={1}>
                        <InputSeach type="text" placeholder="Procure por pokémons" onChange={(e)=>{}} onClick={()=>{}} />
                    </Col>
                </Row>
                <Col size={4} ></Col>
            </Container>
          </Layout>)
}