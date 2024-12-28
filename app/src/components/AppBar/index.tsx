import { TicTacToeIcon } from '@/react-icons';
import { ICONS } from '@/src/utils/constants';
import { useLocation, useNavigate } from 'react-router';

export const AppBar = () => {
  const { pathname } = useLocation();

  const isActive = (name: string) => pathname.includes(name);
  const navigate = useNavigate();
  const getIconColor = (name: string) =>
    isActive(name) ? '#ffffff' : '#2475C5';

  const containerStyles =
    'absolute rounded-md bottom-2 left-5 right-5 p-2 bg-primary flex items-center justify-between';

  const onGoToUrl = (path: string) => {
    navigate(path);
  };

  return (
    <div className={containerStyles}>
      {ICONS.map(({ name, label, route }) => (
        <TicTacToeIcon
          key={name}
          name={name}
          package="materialdesignicons"
          color={getIconColor(route)}
          aria-label={label}
          onClick={() => onGoToUrl(route)}
        />
      ))}
    </div>
  );
};
