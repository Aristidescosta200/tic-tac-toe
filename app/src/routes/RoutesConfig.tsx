import { createBrowserRouter, RouterProvider } from "react-router";
import {
  SplashScreen,
  OnboardingScreen,
  SignIn,
  Home,
  GameHistoryScreen,
  ScoreBoardScreen,
} from "@screens/index";

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
    {
      path: "/home",
      element: <Home />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
    {
      path: "/game-history",
      element: <GameHistoryScreen />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
    {
      path: "/scoreboard",
      element: <ScoreBoardScreen />,
      errorElement: <h1>Deu um erro inesperado.</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}
