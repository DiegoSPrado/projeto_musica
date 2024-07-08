import { FaUser, FaLock } from "react-icons/fa"

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>Acesse o sistema</h1>
                <div>
                    <input type="email" placeholder="E-mail"/>
                    <FaUser className="icon"/>
                </div>
                <div>
                    <input type="password" placeholder="Senha"/>
                    <FaLock className="icon"/>
                </div>

                <div className="recall-forget">
                    <label >
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login