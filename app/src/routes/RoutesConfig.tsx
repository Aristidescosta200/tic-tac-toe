import { createBrowserRouter, RouterProvider } from "react-router";
import { SplashScreen, OnboardingScreen, SignIn } from "@screens/index";

export default function RoutesConfig() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
    {
      path: "/onboarding-1",
      element: <OnboardingScreen />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}
