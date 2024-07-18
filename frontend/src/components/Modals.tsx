import { GrClose } from "react-icons/gr";
import React from "react";



const Modal_Style ={
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#C0763D',
    padding: '150px',
    borderRadius: '10px',
}

type ModalsProps = {
    show: boolean,
    onHide: (isOpen: boolean) => void,
    children: React.ReactNode;
    
}
export default function Modals({show, onHide, children}: ModalsProps) {
  
    if( show ){

    return(
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-secundary z-[1000]'>
            <div style={Modal_Style} className='absolute'>
                <div className="cursor-pointer  inline-block absolute top-0 right-0 p-[5px] m-[5px]"
                onClick={() =>onHide(false)} ><GrClose/></div>
                <div>cu doce</div>
                <div>{children}</div>
            </div>
            
        </div>
    )
}
    return null;
}