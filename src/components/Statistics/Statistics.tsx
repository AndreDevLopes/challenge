import { Conatiner,
         Row,
         Col,
         Text,
         Number,
         BarCont,
         BarProg
     } from './styles'
import { useState, useEffect } from 'react'
import { getStatiticById } from '../../server/server'

interface StatisticsProps{
    id:number
}

export default function Statistics(props: StatisticsProps) {
    const [statistica, setStatistica] = useState([])

    useEffect(()=>{
        listStatistica(props.id)
    },[props.id])

    const listStatistica = async (id: number) =>{
        const res = await getStatiticById(id) 
        if(res.status === 200){
            setStatistica(res.data.possible_values)
        }
    }

    const handleEstatistica = () =>{
        let list = statistica.map((item, index)=>{
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
                        <Number>{item}</Number>
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