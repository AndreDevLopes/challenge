import Layout from "../../views/Layout/Layout"
import Without from "../../views/Without/Without"
import useAppData from "../../data/hook/useApiData"
import CardsFavoritos from "../../views/Cards/CardsFavoritos"


export default function Home(){
    const cxt = useAppData()
    return(<Layout>
            {cxt.meusPokes?.favoritos.length !== 0 ?
             <CardsFavoritos pokes={cxt.meusPokes?.favoritos} />:
             <Without />}
          </Layout>)
}