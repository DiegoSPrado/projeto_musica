
export default function ListItens(props: any, children:any) {
    
 

    return (
        <>
            <li className="cursor-pointer"> 
                <img src={props.image} alt={props.alt} className='max-w-40 rounded-[15px] shadow-2xl hover:translate '/> 
            </li>
        </> 
    )
}