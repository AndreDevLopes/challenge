import { Conatiner,
         Row,
         Col,
         Text,
         Number,
         BarCont,
         BarProg
     } from './styles'


interface StatisticsProps{
    id:number
}

export default function Statistics(props: StatisticsProps) {
    const statistica=[{nome:'HP',value:35},
                    {nome:'ATK',value:70},
                    {nome:'DEF',value:62},
                    {nome:'S.ATK',value:12},
                    {nome:'S.DEF',value:95},
                    {nome:'SPD',value:10}]

    const handleEstatistica = () =>{
        let list = statistica.map((item, index)=>{
            return(
                <Row key={index}>
                    <Col size={1}>
                        <Text>{item.nome}</Text>
                    </Col>
                    <Col size={10}>
                        <BarCont>
                            <BarProg size={item.value}/>
                        </BarCont>
                    </Col>
                    <Col size={1}>
                        <Number>{item.value}</Number>
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