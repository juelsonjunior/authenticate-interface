import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="center-forms">
            <div className="bg-white dark:bg-slate-900 shadow-lg p-10 rounded-sm">
                <form className="flex items-center gap-8 flex-col">
                    <h3 className="title-forms">
                        Login
                    </h3>
                    <div className="flex-group-input">
                        <label
                            htmlFor="email"
                            className="label-inputs text-slate-950"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Seu email"
                        />
                    </div>
                    <div className="flex-group-input">
                        <label
                            htmlFor="senha"
                            className="label-inputs text-slate-950"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className="form-input"
                            placeholder="Sua senha"
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <Link to="/forgot-password">
                            <span className="cursor-pointer text-blue-500 underline">
                                Esqueceu a senha?
                            </span>
                        </Link>
                        <Link to="/register">
                            <span className="cursor-pointer text-blue-500 underline">
                                Não tem uma conta?
                            </span>
                        </Link>
                    </div>
                    <button className="btn-submit-form">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
