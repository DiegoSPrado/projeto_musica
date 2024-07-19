import Link from "next/link"
import { Exo_2 } from "next/font/google"

const exo2 = Exo_2(
    {
        subsets: ["latin"],
        weight: ["500"],
        
    }
  )    

export default function Header() {

    

    return (
        <div className={`flex justify-center gap-5  items-center bg-slate-950 p-4 text-white ${exo2.className}`}>
            <div >
                <Link href={"/inicial/inicial"}>
                <img src="/imgs/brand-img.png" alt="Logo" className='min-w-8 max-w-20  rounded-[50%] cursor-pointer ' />
                </Link>
            </div>
            
            <Link href={"/Login"}>Login</Link>
            
            <Link href={"/personal_list/inicial"}>Home</Link>
        
            <Link href={"/"}>Minha Lista</Link>
        </div>
    )
}