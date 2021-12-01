import { useState } from "react"

export function useModal(){

    const [modalVisivel, setModalVisivel] = useState(false)

    const openModal = () =>{
        let root = document.getElementById('root')
        root!.style.overflow = 'hidden'
        setModalVisivel(true)
        
    }

    const closeModal = () =>{
        let root = document.getElementById('root')
        root!.style.overflow = 'visible'
        setModalVisivel(false)
    }

    return{modalVisivel, openModal, closeModal}
}