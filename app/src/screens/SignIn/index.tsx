import { BaseCenterLayout } from "@/src/layouts";

export const SignIn = () => {
  return (
    <BaseCenterLayout.Root>
      <BaseCenterLayout.Image imagePath={"Logo.png"} />
      <BaseCenterLayout.Description
        title={"Bem-vindo"}
        description={"Faça login para continuar."}
      />
      <BaseCenterLayout.Content>
        <div className="flex flex-col w-full gap-3">
          <IconButton image="/googleIcon.png" title="Faça login com o Google" />
          <IconButton
            image="/facebookIcon.png"
            title="Faça login com o Facebook"
          />
        </div>
      </BaseCenterLayout.Content>
    </BaseCenterLayout.Root>
  );
};

interface IIconButtonProps {
  title: string;
  image: string;
}

const IconButton = ({ title, image }: IIconButtonProps) => {
  return (
    <div
      className="border-2 p-2 rounded-xl border-neutral w-full flex items-center justify-center gap-1 
            hover:bg-neutral-200 active:scale-95 active:bg-neutral-300 transition-all duration-150"
    >
      <img src={image} className="bg-cover h-8 w-8" alt="Imagem do google" />
      <span>{title}</span>
    </div>
  );
};
