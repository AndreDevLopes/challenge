import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps{
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any): JSX.Element{

    const [tema, setTema] = useState<Tema>('')

    function alternarTema(){
        setTema(tema === '' ? "dark" : "")
    }

    return(
        <div>
            <AppContext.Provider value={{
                tema,
                alternarTema
            }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )

}

export default AppContext
