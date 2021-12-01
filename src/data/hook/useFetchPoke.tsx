import { useState , useEffect } from 'react'
import { getPokemons , getPokeByType} from '../../server/server'

interface Poke{
    name: string,
    url: string
    pokemon:{
        name: string,
        url: string  
    }
}


export function useFetchPoke(){
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

    return { pokes, listPokes, listPokesByTypes }

}