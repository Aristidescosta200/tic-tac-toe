import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const SplashScreen = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("welcome");
        }, 3000);

        return () => {
            clearTimeout(timeoutId); // Limpa o timeout se o componente for desmontado
        };
    }, [])

    return (
        <div className='h-screen w-screen flex flex-col items-center justify-center'>
            <img src="Logo.png" className='motion-preset-pulse' alt="Logo do jogo" />
            <p className='mt-5'>Carregando...</p>
        </div>
    )
}
