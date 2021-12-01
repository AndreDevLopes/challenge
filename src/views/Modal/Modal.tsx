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
import useAppData from '../../data/hooks/useApiData'
import { useNavigate } from 'react-router'
import { validationTypePoke, scroll } from '../../functions'



interface ModalProps{
    visivel: boolean,
    poke: Poke,
    favorito?: boolean,
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
    const navigate = useNavigate()

    const handleTags = ()=>{
        
        let list = props.poke?.types.map((item, index)=>{  
           return <TagBody key={index} 
                    bg={validationTypePoke(item.type.name)} 
                    color={cores.white}>{item.type.name}</TagBody>
        })
        return(<>{list}</>)
    }


    return(
        <Box visivel={props.visivel} >
            <Container tema={ctx.tema}>
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
                    { props.poke ? handleTags() : false}
                </RowTags>
                <Row>
                    <Title2>Estatisticas</Title2>
                </Row>
                {props.poke ? <Statistics id={props.poke?.id} /> : false}
                <Row>
                    {props.favorito ? 
                    <ButtonModal
                     bg={cores.dange} 
                     color={cores.gray_100} 
                     onClick={()=>{ctx.meusPokes?.removeFavorito(props.poke); 
                     navigate('/all');
                     scroll();
                     }}>
                        Remove dos favoritos
                    </ButtonModal>:

                    <ButtonModal 
                    bg={cores.primary} 
                    color={cores.gray_500} 
                    onClick={()=>{ctx.meusPokes?.addFavorito(props.poke);
                    navigate('/home');
                    scroll();
                    }}>
                        Adicionar aos favoritos
                    </ButtonModal>}
                    
                </Row>
            </Container>
        </Box>
        )
}