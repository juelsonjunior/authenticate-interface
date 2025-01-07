import { Link } from 'react-router-dom';
import { BiSolidArrowFromRight } from 'react-icons/bi';

function Register() {
    return (
        <div className="center-forms">
            <div className="bg-white dark:bg-slate-900 shadow-lg p-10 rounded-sm">
                <div className="text-1xl cursor-pointer">
                    <Link to="/">
                        <BiSolidArrowFromRight className="label-inputs text-slate-950"/>
                    </Link>
                </div>
                <form className="flex items-center gap-8 flex-col">
                    <h3 className="title-forms text-slate-950">
                        Cadastro
                    </h3>
                    <div className="flex-group-input">
                        <label htmlFor="name" className="label-inputs text-slate-950">
                            Nome usuario
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="Seu nome de usuario"
                        />
                    </div>
                    <div className="flex-group-input">
                        <label htmlFor="email" className="label-inputs text-slate-950">
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
                        <label htmlFor="senha" className="label-inputs text-slate-950">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className="form-input"
                            placeholder="Sua senha"
                        />
                    </div>
                    <button className="btn-submit-form">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
