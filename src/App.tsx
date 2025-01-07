import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';
function App() {
    return (
        <div className="bg-gray-200 dark:bg-slate-950 w-lvw h-lvh flex items-center flex-col">
            <NavBar />

            <Outlet />
        </div>
    );
}

export default App;
