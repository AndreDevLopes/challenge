import axios from 'axios'

const api = axios.create({
    baseURL:'https://pokeapi.co/api/v2/'
})

export const getPokemons = async (offset: number = 0) =>{
    return await api.get(`/pokemon/?offset=${offset}&limit=20`)
}

export const getPokemonByName = async (name: string) =>{
    return await api.get(`/pokemon/${name}`)
}

export const getPokeByUrl = async (url: string) =>{
    return await api.get(url)
}

export const getPokeByType = async(type: string, offset: number = 0) =>{
    return await api.get(`/type/${type}`)
}