import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/pages/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    }
])