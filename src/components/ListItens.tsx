
export default function ListItens(props:any) {
    
    return (
        <>
            <li> 
               <a target="_blank" rel="noreferrer" href={props.url} >
                <img src={props.image} alt={props.alt} className='max-w-40 rounded-[15px] shadow-2xl hover:translate'/>
               </a>
               
            </li>
        </>
    )
}