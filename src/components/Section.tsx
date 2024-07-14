export default function Section(props:any) {
    
    return(
        <div className='flex flex-col max-w-[800px] m-auto mb-5 mt-5 rounded-xl bg-yellow-700  text-center  text-wrap shadow-2xl'>
                <div className="bg-slate-950 rounded-t-xl">{props.title}</div>
                <div>
                    <p>
                        {props.subtitle}
                    </p>
                </div>
                <div>
                    <ul className='flex gap-3 justify-center flex-wrap p-4  '>
                        {props.children}
                    </ul>
                </div>
        </div>
    )
}