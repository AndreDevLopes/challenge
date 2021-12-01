import { Container,
         Box,
         Header,
         HeaderTitle,
         TagBody,
         RowImgs,
         Img,
         Title,
         Row,
         SubTitle,
         Title2
        } from './styles'
import { RowTags } from '../../components/Card/styles'
import ButtonClose from '../../components/Buttons/ButtonClose'
import cores from '../../ui/cores'
import Statistics from '../../components/Statistics/Statistics'
import ButtonModal from '../../components/Buttons/ButtonModal'
import useAppData from '../../data/hook/useApiData'



interface ModalProps{
    visivel: boolean,
    poke: Poke,
    onClick?: ()=>void
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


export default function Modal(props: ModalProps): JSX.Element {

    const ctx = useAppData()

    const handletags = ()=>{
        
        let list = props.poke?.types.map((item, index)=>{  
           return <TagBody key={index} 
                    bg={validationTypePoke(item.type.name)} 
                    color={cores.white}>{item.type.name}</TagBody>
        })
        return(<>{list}</>)
    }

    const validationTypePoke = (nome: string) =>{
        switch(nome){
            case 'fire': return cores.dange
            case 'water': return cores.secondary
            case 'grass': return cores.success
            case 'poison': return cores.poison
            case 'normal': return cores.normal
            case 'bug': return cores.bug
            case 'flying': return cores.gray_200
            default: return cores.primary
        }
    }
    return(
        <Box visivel={props.visivel}>
            <Container>
                <Header>
                    <HeaderTitle>
                       Detalhes
                    </HeaderTitle>
                    <ButtonClose onClick={props.onClick} />
                </Header>
                <hr></hr>
                <Title>{props.poke?.name}</Title>
                <RowImgs>
                    <Img src={props.poke?.sprites.front_default}  alt="" />
                    <Img src={props.poke?.sprites.back_default}  alt="" />
                </RowImgs>
                <Row>
                    <SubTitle>{props.poke?.height} m</SubTitle>
                    <SubTitle>{props.poke?.weight} Kg</SubTitle>
                </Row>
                <RowTags>
                    { props.poke ? handletags() : false}
                </RowTags>
                <Row>
                    <Title2>Estatisticas</Title2>
                </Row>
                {props.poke ? <Statistics id={props.poke?.id} /> : false}
                <Row>
                    {props.poke ? <ButtonModal color={cores.primary} onClick={()=>{ctx.meusPokes?.addFavorito(props.poke)}}>
                        Adicionar aos favoritos
                    </ButtonModal>: false}
                    
                </Row>
            </Container>
        </Box>
        )
}