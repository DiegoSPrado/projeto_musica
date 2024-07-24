import Header from "@/components/Header"


export default function inicial () {

   const vText = {
            transform: 'rotate(-90deg)',
            color: 'white',
            whiteSpace: 'nowrap'
        }
    

    return (
        <div>
            <Header/>
            <div className='flex  items-center  '>
                <img src="/imgs/Kids-See-Ghosts-Kanye-West-Kid-Cudi.webp" alt="Cover Image" className='object-cover w-2/5 m-auto my-10' />
                <p style={vText}> Kid See Ghosts</p>
                
            </div>
            <div>
            <h1 className="text-xl font-bold text-white text-center">
                    Ache Albuns que já escutou.<br/>
                    Salve aqueles que quer escutar.<br/>
                    Conte o que achou deles.
                </h1>
            </div>

        </div>
    )
}