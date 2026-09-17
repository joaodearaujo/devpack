import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../../layouts/AppLayout'
import OverView from '../../features/overview/pages'
import { Packages } from '../../features/packages/pages'

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/overview',
                element: <OverView />,
            },
            {
                path: '/packages',
                element: <Packages />,
            },
        ],
    },
])
