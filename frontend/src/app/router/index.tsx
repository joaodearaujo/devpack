import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../../layouts/AppLayout";
import OverView from "../../features/overview/pages";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/overview',
                element: <OverView />
            }
        ]
    }
]);