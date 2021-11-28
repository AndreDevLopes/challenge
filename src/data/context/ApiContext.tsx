import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps{
    tema?: Tema,
    favoritos?: Favoritos
    alternarTema?: () => void
    addFavorito?: (poke: Poke) => void
}

interface Favoritos{
    favoritos?: Array<any>
}

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

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any): JSX.Element{
    const [tema, setTema] = useState<Tema>('')
    const [favoritos, setFavoritos] = useState<Favoritos>()

    function alternarTema(): void{
        setTema(tema === '' ? "dark" : "")
    }

    function addFavorito(poke: Poke): void{
        setFavoritos(favoritos)
    }

    return(
        <div>
            <AppContext.Provider value={{
                tema,
                favoritos,
                alternarTema,
                addFavorito
            }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )

}

export default AppContext
