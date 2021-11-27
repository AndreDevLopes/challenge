import { Entrada } from './styles'
import useAppData from '../../data/hook/useApiData'

interface InputSeachProps{
    type: string,
    placeholder: string,
    onChange?: (e:any)=>void
}

export default function InputSeach(props: InputSeachProps){
    const ctx = useAppData()

    return <Entrada
             type={props.type}
             placeholder={props.placeholder}
             onChange={props.onChange}
             tema={ctx.tema}
              />
}