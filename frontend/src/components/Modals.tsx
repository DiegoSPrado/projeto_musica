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

//onClick={() =>onHide(false)}
export default function Modals() {
  
    

    return(
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-secundary z-[1000]'>
            <div style={Modal_Style} className='absolute'>
                <div className="cursor-pointer  inline-block absolute top-0 right-0 p-[5px] m-[5px]"
                 >
                    <GrClose/>
                </div> 
                <div>cu doce</div>
                
            </div>
            
        </div>
    )

    return null;
}