import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/homepage/Homepage";
import { MainLayout } from "../components/layout/MainLayout";
import { NotFoundPage } from "../components/pages/notFoundPage/NotFoundPage";
import { AboutPage } from "../components/pages/aboutPage/AboutPage";

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
        path: '/about',
        element: (
            <MainLayout>
                <AboutPage />
            </MainLayout>
        )
    },
    {
        path: '/register',
        element: (
            <MainLayout>
                <h1>sign up</h1>
            </MainLayout>
        )
    },
    {
        path: '/login',
        element: (
            <MainLayout>
                <h1>login</h1>
            </MainLayout>
        )
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])