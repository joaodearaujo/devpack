import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../../layouts/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
            }
        ]
    }
]);