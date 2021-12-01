import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps{
    tema?: Tema,
    meusPokes?: { 
         favoritos: any;
         addFavorito: (array: any) => void 
    },
    alternarTema?: () => void,
}


const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any): JSX.Element{
    const [tema, setTema] = useState<Tema>('')
    const [favoritos, setFavoritos] = useState([] as any)  

    
    function addFavorito(array: any ): void{   
        let copia = favoritos
        copia.push(array)
        setFavoritos(copia)  
    }

    let meusPokes = {
        favoritos,
        addFavorito
    }
   
 
    function alternarTema(): void{
        setTema(tema === '' ? "dark" : "")
    }

    return(
        <div>
            <AppContext.Provider value={{
                tema,
                meusPokes,
                alternarTema,
            }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )

}

export default AppContext
