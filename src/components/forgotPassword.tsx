import { BiSolidArrowFromRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function ForgotPasswrod() {
    
    return (
        <div className="center-forms">
            <div className="bg-white dark:bg-slate-900 shadow-lg p-10 rounded-sm">
                <div className="text-1xl cursor-pointer">
                    <Link to="/">
                        <BiSolidArrowFromRight
                            className="title-forms text-slate-950 "
                        />
                    </Link>
                </div>
                <form className="flex items-center gap-8 flex-col">
                    <h3
                        className="title-forms text-slate-950 "
                    >
                        Esqueceu senha
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
                    <button className="btn-submit-form">Recuperar</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswrod;
