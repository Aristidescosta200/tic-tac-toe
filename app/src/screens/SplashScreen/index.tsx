import { BaseCenterLayout } from "@/src/layouts";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("onboarding-1");
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // Limpa o timeout se o componente for desmontado
    };
  }, []);

  return (
    <BaseCenterLayout.Root>
      <BaseCenterLayout.Image imagePath="Logo.png" animate />
      <BaseCenterLayout.Description title="" description="Carregando..." />
    </BaseCenterLayout.Root>
  );
};
