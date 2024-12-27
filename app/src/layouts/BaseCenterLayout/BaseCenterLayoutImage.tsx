interface IBaseCenterLayoutImageProps {
    imagePath: string
    animate?: boolean
}

export const BaseCenterLayoutImage = ({ imagePath, animate }: IBaseCenterLayoutImageProps) => {
    return (
        <img
            src={imagePath}
            className='data-[animate=true]:motion-preset-pulse'
            alt="Logo do jogo"
            data-animate={animate}
        />
    )
}
