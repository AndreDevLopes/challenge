import { MenuMobileContainer, Li, NumFavorito } from './styles'
import useAppData from '../../data/hooks/useApiData'
import ButtonLogout from '../Buttons/ButtonLogout'
import { useNavigate } from "react-router"


interface MenuProps{
    visivel: boolean
}

export default function Menu(props: MenuProps){
    const ctx = useAppData()
    const navigate = useNavigate()

    const sair = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }

    return(
        <MenuMobileContainer visivel={props.visivel} tema={ctx.tema}>
            <Li to="/home" tema={ctx.tema}>
                Favoritos
                {ctx.meusPokes?.favoritos.length !== 0 ? 
                <NumFavorito>{ctx.meusPokes?.favoritos.length}</NumFavorito>:
                false}
            </Li>
            <Li to="/seach" tema={ctx.tema}>Procurar</Li>
            <Li to="/all" tema={ctx.tema}>Ver todos</Li>
            <ButtonLogout onClick={()=>{sair()}} />
        </MenuMobileContainer>
    )
}