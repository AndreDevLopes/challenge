import { Seach, Btn, Container } from './styles'
import useAppData from '../../data/hook/useApiData'
import { BiSearch } from 'react-icons/bi'
import cores from '../../ui/cores'

interface InputSeachProps{
    type: string,
    placeholder: string,
    onChange?: (e:any)=>void,
    onClick?: ()=>void
}

export default function InputSeach(props: InputSeachProps){
    const ctx = useAppData()

    return(<Container>
                <Seach 
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    tema={ctx.tema}
                    />
                <Btn onClick={props.onClick}>
                    <BiSearch fontSize={25}  color={ctx.tema === 'dark'? cores.white : cores.gray_500}/>
                </Btn>
          </Container>)
}