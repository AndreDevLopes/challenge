import cores from '../ui/cores'

export const validationTypePoke = (nome: string) =>{
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

export const scroll = () =>{
    let root = document.getElementById('root')
    root!.style.overflow = 'visible'
}