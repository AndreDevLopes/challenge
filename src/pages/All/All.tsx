import Layout from "../../views/Layout/Layout"
import ButtonFilter from "../../components/Buttons/ButtonFilter"
import { RowButtons} from './styles'
import Cards from "../../views/Cards/Cards"
import {useState , useEffect} from 'react'
import { getPokemons , getPokeByType} from '../../server/server'

interface Poke{
    name: string,
    url: string
    pokemon:{
        name: string,
        url: string  
    }
}

export default function All() {
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

    const listPokesByTypes = async(name: string)=>{
        const res = await getPokeByType(name)
        if(res.status === 200){
            setPokes(res.data.pokemon)
        }
    }   

    return(
        <Layout>
            <RowButtons>
                <ButtonFilter select={true}  text="Todos" onClick={()=>{listPokes()}}/>
                <ButtonFilter  text="Fire" onClick={()=>{listPokesByTypes('fire')}} />
                <ButtonFilter  text="Eletric" onClick={()=>{listPokesByTypes('electric')}} />
                <ButtonFilter  text="Water" onClick={()=>{listPokesByTypes('water')}} />      
            </RowButtons>
            <Cards pokes={pokes} />
        </Layout>
    )
}