import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../../layouts/AppLayout'
import ErrorPage from '../pages/ErrorPage'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Navigate to="/overview" replace /> },
            {
                path: 'overview',
                lazy: async () => ({ Component: (await import('../../features/overview/pages')).default }),
            },
            {
                path: 'packages',
                lazy: async () => ({ Component: (await import('../../features/packages/pages')).default }),
            },
            {
                path: 'categories',
                lazy: async () => ({ Component: (await import('../pages/Categories')).default }),
            },
            {
                path: 'setup',
                lazy: async () => ({ Component: (await import('../pages/Setup')).default }),
            },
            {
                path: 'history',
                lazy: async () => ({ Component: (await import('../pages/History')).default }),
            },
            {
                path: 'settings',
                lazy: async () => ({ Component: (await import('../pages/Settings')).default }),
            },
            { path: '*', element: <NotFound /> },
        ],
    },
])
