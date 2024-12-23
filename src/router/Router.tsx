import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/homepage/Homepage";
import { MainLayout } from "../components/layout/MainLayout";
import { NotFoundPage } from "../components/pages/notFoundPage/NotFoundPage";
import { AboutPage } from "../components/pages/aboutPage/AboutPage";
import { SignupPage } from "../components/pages/signupPage/SignupPage";

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
            <SignupPage />
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