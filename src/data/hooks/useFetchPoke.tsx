import { useState , useEffect } from 'react'
import { getPokemons,
         getPokeByType,
         getPokemonByName,
         getPokeByUrl } from '../../server/server'

interface Poke{
    name: string,
    url: string
    pokemon:{
        name: string,
        url: string  
    }
}

interface PokeDetails{
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


export function useFetchPoke(){
    const [pokes, setPokes] = useState<Poke[]>([])
    const [poke, setPoke] = useState<PokeDetails>()

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

    const listPokeByName = async (name: string) =>{
        const res = await getPokemonByName(name)
        if(res.status === 200){
            setPoke(res.data)
        }
    }

    const seachPokeByUrl = async (url: string) =>{
        const res = await getPokeByUrl(url)
        if(res.status === 200){
            setPoke(res.data)
        }
    }

    return {poke, pokes, listPokes, listPokesByTypes, listPokeByName, seachPokeByUrl }

}