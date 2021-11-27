import { Conatiner,
         Row,
         Col,
         Text,
         Number,
         BarCont,
         BarProg
     } from './styles'

export default function Statistics() {
    const handleEstatistica = () =>{
        let list = [1,2,3,4,5,6].map((item, index)=>{
            return(
                <Row key={index}>
                    <Col size={1}>
                        <Text>HP</Text>
                    </Col>
                    <Col size={10}>
                        <BarCont>
                            <BarProg size={35}/>
                        </BarCont>
                    </Col>
                    <Col size={1}>
                        <Number>35</Number>
                    </Col>
                </Row>
            )
        })
        return(<>
        {list}
        </>)
    }
    return (<Conatiner>
                {handleEstatistica()}
            </Conatiner>)
}