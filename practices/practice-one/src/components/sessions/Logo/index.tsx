import { Button } from '@components/common/Button/index';
import { Image } from '@components/common/Image/index';
import { ROUTES } from '@constants/routes';
import logo from '@image/book-shelter.svg';
import { memo } from 'react';

interface LogoProps {
  onToggleCategoriesOnMobile: () => void;
}

const Logo = memo(({ onToggleCategoriesOnMobile }: LogoProps): JSX.Element => {
  return (
    <section className="header-left">
      <span className="header-toogle">
        <Button className="btn btn-hamburger" onClick={onToggleCategoriesOnMobile} />
      </span>
      <a className="header-logo" href={ROUTES.HOME} title="Book Shelter">
        <Image altText="Book Shelter" imageSrc={logo} width={54} text="BookShelter" />
      </a>
    </section>
  );
});

export default Logo;
