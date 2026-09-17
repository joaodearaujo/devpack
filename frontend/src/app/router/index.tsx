import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../../layouts/AppLayout'
import OverView from '../../features/overview/pages'
import { Packages } from '../../features/packages/pages'
import NotFound from '../pages/NotFound'
import ComingSoon from '../pages/ComingSoon'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Navigate to="/overview" replace /> },
            { path: 'overview', element: <OverView /> },
            { path: 'packages', element: <Packages /> },
            { path: 'categories', element: <ComingSoon /> },
            { path: 'setup', element: <ComingSoon /> },
            { path: 'history', element: <ComingSoon /> },
            { path: 'settings', element: <ComingSoon /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])
