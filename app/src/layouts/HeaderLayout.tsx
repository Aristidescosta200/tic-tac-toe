import { TicTacToeIcon } from "@/react-icons";
import { useNavigate } from "react-router";

interface IHeaderLayoutProps {
  title: string;
  showIcon?: boolean;
}

export const HeaderLayout = ({ title, showIcon }: IHeaderLayoutProps) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <header className="p-5 flex flex-col gap-5">
      <div className="flex items-center justify-start gap-1">
        {showIcon && (
          <TicTacToeIcon
            name="MdArrowBackIos"
            package="materialdesignicons"
            size={32}
            onClick={handleGoBack}
          />
        )}
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <input type="date" name="" id="" className="w-full border-2 p-2" />
    </header>
  );
};
