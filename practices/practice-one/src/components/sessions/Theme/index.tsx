import { Button } from '@components/common/Button';
import { memo } from 'react';

interface ThemeProps {
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const DarkTheme = memo(({ isChangeDarkTheme, toggleThemePage }: ThemeProps): JSX.Element => {
  return (
    <Button
      className={`btn btn-sunshine ${isChangeDarkTheme ? '' : 'dark'}`}
      onClick={toggleThemePage}
    />
  );
});

export default DarkTheme;
