import { ModeToggle } from "./toggleMode";
function NavBar() {

  return (
    <div className="py-2 bg-white dark:bg-slate-900   p-5 rounded-full">
      <div className="flex items-center justify-between gap-5">
        <div>
          <span className="uppercase text-sm text-slate-950dark:text-white">
            Sistema de autenticação
          </span>
        </div>
        <div className="text-slate-950">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
