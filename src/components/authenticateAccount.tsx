import { BiRevision } from 'react-icons/bi';
import { InputOTPPattern } from './inputOtp';
function AuthAccount() {
    return (
        <div className="center-forms">
            <div className="bg-white dark:bg-slate-900 shadow-lg p-10 rounded-sm"
            >
                <form className="flex items-center gap-8 flex-col">
                    <div>
                        <h3
                            className="title-forms text-slate-950"
                        >
                            Autenticar sua conta
                        </h3>
                        <p
                            className="text-sm text-gray-600  w-96 text-justify dark:text-white"
                        >
                            Por favor verifique o seu email para pegar o codigo
                            de autenticação
                        </p>
                    </div>
                    <div className="flex-group-input">
                        
                        <div className="flex items-center justify-center flex-col gap-2">
                        <label
                            htmlFor="code"
                            className="label-inputs text-slate-950"
                        >
                            Codigo de autenticação
                        </label>
                        <InputOTPPattern/>
                        </div>
                    </div>
                    <p
                        className="text-sm text-gray-600 w-96 flex items-center gap-1 text-gray-600 dark:text-white"
                    >
                        <BiRevision className="text-lg cursor-pointer" />
                        <span>Solicitar um novo codigo de autenticação</span>
                    </p>
                    <button className="btn-submit-form">Autenticar</button>
                </form>
            </div>
        </div>
    );
}

export default AuthAccount;
