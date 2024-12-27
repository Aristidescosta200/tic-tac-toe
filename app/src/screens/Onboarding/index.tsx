import { useOnboarding } from "@/src/hooks";
import { BaseCenterLayout } from "@/src/layouts";
import { ONBOARDIG_MESSAGES } from "@/src/utils/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const OnboardingScreen = () => {
  const navigate = useNavigate();

  const stepTitle = useOnboarding((state) => state.stepTitle);
  const totalSteps = useOnboarding((state) => state.totalSteps);
  const currentStep = useOnboarding((state) => state.currentStep);
  const imagePath = useOnboarding((state) => state.imagePath);
  const stepDescription = useOnboarding((state) => state.stepDescription);
  const setStepTitle = useOnboarding((state) => state.setStepTitle);
  const setStepDescription = useOnboarding((state) => state.setStepDescription);
  const setStepImage = useOnboarding((state) => state.setStepImage);

  useEffect(() => {
    if (currentStep === totalSteps) {
      navigate("/sign-in");
    } else {
      setStepTitle(ONBOARDIG_MESSAGES[currentStep].title);
      setStepDescription(ONBOARDIG_MESSAGES[currentStep].description);
      setStepImage(ONBOARDIG_MESSAGES[currentStep].imagePath);
    }
  }, [currentStep]);

  return (
    <BaseCenterLayout.Root>
      <BaseCenterLayout.Image imagePath={imagePath} />
      <BaseCenterLayout.Description
        title={stepTitle}
        description={stepDescription}
      />
      <BaseCenterLayout.Steps />
    </BaseCenterLayout.Root>
  );
};
