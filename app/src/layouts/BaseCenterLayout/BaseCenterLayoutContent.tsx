import { PropsWithChildren } from "react";

export const BaseCenterLayoutContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute bottom-4 px-4 flex items-center justify-between right-0 left-0">
      {children}
    </div>
  );
};
