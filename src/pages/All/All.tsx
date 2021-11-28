import Layout from "../../views/Layout/Layout"
import ButtonFilter from "../../components/Buttons/ButtonFilter"
import { RowButtons} from './styles'
import Cards from "../../views/Cards/Cards"

export default function All() {
    return(
        <Layout>
            <RowButtons>
                <ButtonFilter select={true}  text="Todos" />
                <ButtonFilter  text="Fire" />
                <ButtonFilter  text="Eletric" />
                <ButtonFilter  text="Water" />      
            </RowButtons>
            <Cards />
        </Layout>
    )
}