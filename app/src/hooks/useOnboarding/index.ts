import { create } from 'zustand';

type OnboardingStore = {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  imagePath: string;
  stepDescription: string;
};

type OnboardingActions = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  setStepTitle: (title: string) => void;
  setStepDescription: (description: string) => void;
  setStepImage: (path: string) => void;
};

const INITIAL_ONBOARDING_STORE: OnboardingStore = {
  currentStep: 0,
  stepDescription: '',
  stepTitle: '',
  totalSteps: 3,
  imagePath: '',
};

export const useOnboarding = create<OnboardingStore & OnboardingActions>()(
  (set) => ({
    ...INITIAL_ONBOARDING_STORE,
    onNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    onPreviousStep: () =>
      set((state) => ({ currentStep: state.currentStep - 1 })),
    setStepTitle: (title) => set(() => ({ stepTitle: title })),
    setStepDescription: (description) =>
      set(() => ({ stepDescription: description })),
    setStepImage: (path) => set(() => ({ imagePath: path })),
  }),
);
