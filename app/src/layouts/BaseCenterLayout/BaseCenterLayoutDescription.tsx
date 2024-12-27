interface IBaseCenterLayoutDescriptionProps {
    title: string;
    description: string;
}

export const BaseCenterLayoutDescription = ({ title, description }: IBaseCenterLayoutDescriptionProps) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center p-4'>
            <h1 className='font-bold text-3xl'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
