import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Container , Main} from './styles'
import useAppData from "../../data/hook/useApiData"

interface LayoutProps{
    children: any
}

export default function Layout(props: LayoutProps){
    const ctx = useAppData()
    
    return(<Container tema={ctx.tema}>
            <Navbar />
                <Main>{props.children}</Main>
            <Footer />
          </Container>)
}