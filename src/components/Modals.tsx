import { transform } from "next/dist/build/swc";
import React from "react";

const Modal_Style ={
    //position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    background: '#C0763D',
    padding: '20px',
    borderRadius: '10px',
}

type ModalsProps = {
    isOpen: boolean,
    children: React.ReactNode,
    setModalOpen: (isOpen: boolean) => void,
 
}
export default function Modals({isOpen, children, setModalOpen}: ModalsProps) {
  
    if( isOpen ){

    return(
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-secundary z-[1000]'>
            <div style={Modal_Style} className='absolute'>
                <div onClick={() =>setModalOpen(false)} className="cursor-pointer">X</div>
                <h2>modal</h2>
                <div>cu doce</div>
                {children}
            </div>
            
        </div>
    )
}
    return null;
}