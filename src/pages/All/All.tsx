import Layout from "../../views/Layout/Layout"
import ButtonFilter from "../../components/Buttons/ButtonFilter"
import { RowButtons} from './styles'
import Cards from "../../views/Cards/Cards"
import { useFetchPoke } from '../../data/hook/useFetchPoke'

export default function All() {

    const{ pokes, listPokes, listPokesByTypes } = useFetchPoke()

   
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