import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div className="w-lvw h-lvh flex items-center justify-center flex-col gap-5">
            <div className="flex items-center flex-col justify-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-3xl">Pagina não encontrada</p>
            </div>
            <Link to="/">
                <button className="bg-slate-950 px-5 py-4 text-white text-sm">
                    Voltar ao sistema
                </button>
            </Link>
        </div>
    );
}

export default Page404;
