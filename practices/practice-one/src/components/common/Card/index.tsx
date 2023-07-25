import { IBook } from '@interface/book';
import { Image } from '@components/common/Image';
import { memo } from 'react';

// Define the props for the Card component
interface CardProps {
  width: number;

  book: Partial<IBook>;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = memo(({ width, book, onClick }: CardProps): JSX.Element => {
  const {
    title = 'Angels and demons',
    author = 'Stuart Matt',
    published = '2021',
    imageSmall = 'https://picsum.photos/200/200',
    imageMedium = 'https://picsum.photos/400/400',
  } = book;

  return (
    <div onClick={onClick}>
      <figure className="card-container">
        <div className="card-container-img">
          <picture>
            <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
            <Image imageSrc={imageSmall} width={width} altText={title} />
          </picture>
        </div>
        <figcaption>
          <h2 className="card-title">{title}</h2>
          <p className="card-author">{author}</p>
          <p className="card-published">{published}</p>
        </figcaption>
      </figure>
    </div>
  );
});
