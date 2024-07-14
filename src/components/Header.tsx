export default function Header() {
    
    return (
        <div className='flex justify-around items-center bg-slate-950 p-4 text-white'>
            <a href="#">Login</a>
            <a href="#">Home</a>
            <div >
                <img src="/imgs/brand-img.png" alt="Logo" className='min-w-8 max-w-20  rounded-[50%]' />
            </div>
            <a href="#">Pesquisar</a>
            <a href="#">Minha Lista</a>
        </div>
    )
}