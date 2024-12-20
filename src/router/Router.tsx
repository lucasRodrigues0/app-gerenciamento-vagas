import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/homepage/Homepage";
import { MainLayout } from "../components/layout/MainLayout";
import { NotFoundPage } from "../components/pages/notFoundPage/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout>
                <Homepage />
            </MainLayout>
        )
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])