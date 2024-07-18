import Header from "@/components/Header"


export default function Login() {
    return(
        <main>
            <Header/>
            <div className="mt-9 bg-slate-200  max-w-[400px] m-auto shadow-lg rounded-lg">
                <h2 className="text-2xl text-center pt-3">Login</h2>
                <form action="get" className=" flex  flex-col m-auto max-w-52 p-[10px] mb-[10px]">
                    <input type="email" name="inEmail" id="idEmail" placeholder="E-mail" required className="inputLogin"/>
                    <input type="password" name="inPassword" id="idPassword" placeholder="Senha" required className="inputLogin"/>
                    <button type="submit" className="my-5 bg-blue-600 text-white border-2 border-blue-500 py-2 px-4 rounded-md hover:bg-blue-700 shadow-md">Login</button>
                </form>
                <p className=" text-center p-3">Já possui cadastro? Clique Aqui.</p>
            </div>
        </main>
    )
}