import { Button } from '@components/common/Button/index';
import { memo } from 'react';

interface ThemeProps {
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const DarkTheme = memo(({ isChangeDarkTheme, toggleThemePage }: ThemeProps) => {
  return (
    <Button
      className={`${isChangeDarkTheme ? 'btn btn-sunshine' : 'btn btn-sunshine dark'}`}
      onClick={toggleThemePage}
    />
  );
});

export default DarkTheme;
