import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import ForgotPasswrod from './components/forgotPassword.tsx';
import Page404 from './components/page404.tsx';
import AuthAccount from './components/authenticateAccount.tsx';
import { ThemeProvider } from './context/themeProvider.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Page404 />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPasswrod />,
            },
            {
                path: 'auth-account',
                element: <AuthAccount />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </ThemeProvider>
);
