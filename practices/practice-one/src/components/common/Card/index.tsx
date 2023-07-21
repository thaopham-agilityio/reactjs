import { IBook } from '@interface/book';
import { memo } from 'react';

// Define the props for the Card component
interface CardProps {
  width: string;
  height: string;

  book: Partial<IBook>;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = memo(
  ({ width = '200', height = '200', book, onClick }: CardProps): JSX.Element => {
    const {
      title = 'Angels and demons',
      author = 'Stuart Matt',
      published = '2021',
      imageSmall = 'https://picsum.photos/200/200',
      imageMedium = 'https://picsum.photos/400/400',
      imageLarge = 'https://picsum.photos/600/600',
    } = book;

    return (
      <div onClick={onClick}>
        <figure className="card-container">
          <div className="card-container-img">
            <img
              className="img-item"
              src={imageSmall}
              srcSet={`${imageSmall} 400, ${imageMedium} 800, ${imageLarge} 1200`}
              width={width}
              height={height}
              alt={title}
            />
          </div>
          <figcaption>
            <h2 className="card-title">{title}</h2>
            <p className="card-author">{author}</p>
            <p className="card-published">{published}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
);
