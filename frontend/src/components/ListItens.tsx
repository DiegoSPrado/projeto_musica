import Document from "next/document";
import test from "node:test";

interface ListProps {
    
    alt: any,
    image: any,
}




export default function ListItens(props: ListProps) {


    return (
        <div  >
            <li> 
                <img src={props.image} alt={props.alt} className='max-w-40 rounded-[15px] shadow-2xl hover:translate cursor-pointer'  
                id="omg" onclick={document.getElementById('demo').innerHTML='aaaaa'}/> 
               <p>cu</p>
            </li>
        </div> 
    )
}

