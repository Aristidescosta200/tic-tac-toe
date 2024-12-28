interface IModalPlayerInfoProps {
  onClose: () => void;
}

export const ModalPlayerInfo = ({ onClose }: IModalPlayerInfoProps) => {
  return (
    <div
      onClick={onClose}
      className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000043] flex flex-col justify-end"
    >
      <div className="h-72 rounded-t-4xl w-full bg-background z-10 flex flex-col items-center p-5">
        <h3 className="font-semibold text-xl">Arisitdes da Costa</h3>
        <div className="flex items-center gap-1">
          <div
            data-state={'Online'}
            className="h-2 w-2 data-[state=Online]:bg-success data-[state=Playing]:bg-error data-[state=Offline]:bg-darkText rounded-full"
          />
          <p className="text-md">Online</p>
        </div>
        <div className="flex gap-5 items-center mt-8">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">0</p>
            <span className="text-darkText">Vitórias</span>
          </div>
          <div className="h-12 w-[2px] bg-neutral" />
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">0</p>
            <span className="text-darkText">Derrotas</span>
          </div>
          <div className="h-12 w-[2px] bg-neutral" />
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">0</p>
            <span className="text-darkText">Empates</span>
          </div>
        </div>
        <div className="flex-grow" />
        <button className="self-end bg-primary rounded-md w-full p-2 text-background hover:bg-neutral-200 active:scale-95 active:bg-neutral-300 transition-all duration-150">
          Adicione um amigo
        </button>
      </div>
    </div>
  );
};
