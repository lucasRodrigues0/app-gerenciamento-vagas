import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/homepage/Homepage";
import { MainLayout } from "../components/layout/MainLayout";
import { NotFoundPage } from "../components/pages/notFoundPage/NotFoundPage";
import { AboutPage } from "../components/pages/aboutPage/AboutPage";
import { SignupPage } from "../components/pages/signupPage/SignupPage";
import { LoginPage } from "../components/pages/loginPage/LoginPage";
import { ProfilePage } from "../components/pages/profilePage/ProfilePage";
import { AuthGuard } from "./guards/AuthGuard";
import { UserLayout } from "../components/layout/UserLayout";

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
        path: '/signup',
        element: (
            <SignupPage />
        )
    },
    {
        path: '/login',
        element: (
            <LoginPage />
        )
    },
    {
        path: '/profile',
        element: (
            <AuthGuard>
                <UserLayout>
                    <ProfilePage />
                </UserLayout>
            </AuthGuard>
        )
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])