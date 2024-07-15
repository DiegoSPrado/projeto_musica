import Modals from "./Modals"
import { useState } from "react"
export default function ListItens(props:any) {
    
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <li className="cursor-pointer" onClick={() => {setOpenModal(true)}}> 
                <img src={props.image} alt={props.alt} className='max-w-40 rounded-[15px] shadow-2xl hover:translate  '/>
            </li>
            <Modals isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
                children={'olá'}
                />
        </>
    )
}