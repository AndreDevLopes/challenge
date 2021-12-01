import Layout from "../../views/Layout/Layout"
import Without from "../../views/Without/Without"
import useAppData from "../../data/hooks/useApiData"
import CardsFavoritos from "../../views/Cards/CardsFavoritos"


export default function Home(){

    const ctx = useAppData()

    return(<Layout>
            {ctx.meusPokes?.favoritos.length !== 0 ?
             <CardsFavoritos pokes={ctx.meusPokes?.favoritos} />:
             <Without />}
          </Layout>)
}