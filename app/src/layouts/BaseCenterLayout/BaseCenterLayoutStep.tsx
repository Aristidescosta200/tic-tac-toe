import { useOnboarding } from '@/src/hooks'
import { Steps } from '@/src/components'

export const BaseCenterLayoutStep = () => {
    const currentStep = useOnboarding(state => state.currentStep)
    const totalSteps = useOnboarding(state => state.totalSteps)
    const onNextStep = useOnboarding(state => state.onNextStep)
    const onPreviousStep = useOnboarding(state => state.onPreviousStep)

    return (
        <div className='absolute bottom-4 px-4 flex items-center justify-between right-0 left-0'>
            <button data-opacity={currentStep === 0} onClick={onPreviousStep} className='data-[opacity=true]:opacity-0 text-neutral text-xl font-bold'>Voltar</button>
            <Steps />
            <button data-opacity={currentStep === totalSteps} onClick={onNextStep} className='data-[opacity=true]:opacity-0 text-xl'>Próximo</button>
        </div>
    )
}
