import { createBrowserRouter, RouterProvider } from "react-router";
import { SplashScreen } from "@screens/index"

export default function RoutesConfig() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <SplashScreen />
            ),
            errorElement: (
                <h1>Deu um erro inesperado.</h1>
            )
        }
    ])

    return <RouterProvider router={router} />
}