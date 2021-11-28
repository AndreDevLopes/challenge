import Layout from "../../views/Layout/Layout"
import Without from "../../views/Without/Without"
import useAppData from "../../data/hook/useApiData"


export default function Home(){
    const cxt = useAppData()
    return(<Layout>
            {cxt.favoritos?.length !== 0 ? false : <Without />}
          </Layout>)
}