import { Button } from "./styles"

interface ButtonLoginProps{
    children?: any,
    onClick?: ()=>void
}

export default function ButtonLogin(props: ButtonLoginProps) {
    return(
       <Button onClick={props.onClick}>
           {props.children}
       </Button>
    )
}