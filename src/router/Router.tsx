import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/homepage/Homepage";
import { MainLayout } from "../components/layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout>
                <Homepage />
            </MainLayout>
        )
    }
])