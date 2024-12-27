interface IStepProps {
  toFill: boolean;
}

export const Step = ({ toFill }: IStepProps) => {
  return (
    <div
      data-fill={toFill}
      className="h-4 w-4 rounded-full data-[fill=true]:bg-primary bg-neutral"
    />
  );
};
