import Link from "next/link"

export default function Header() {
    
    return (
        <div className='flex justify-around items-center bg-slate-950 p-4 text-white'>
           <Link href={"/Login"}>Login</Link>
            
            <Link href={"/"}>Home</Link>
            <div >
                <img src="/imgs/brand-img.png" alt="Logo" className='min-w-8 max-w-20  rounded-[50%]' />
            </div>
            
            <p>Pesquisar</p>
            
            Minha Lista
        </div>
    )
}