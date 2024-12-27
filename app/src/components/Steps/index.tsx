import { useOnboarding } from '@/src/hooks'
import { Step } from './Step';

export const Steps = () => {
    const totalSteps = useOnboarding(state => state.totalSteps);
    const currentStep = useOnboarding(state => state.currentStep);

    return (
        <div className='flex gap-2 end-0'>
            {
                Array(totalSteps).fill(0).map((_, index) => (
                    <Step key={index} toFill={currentStep === index}/>
                ))
            }
        </div>
    )
}