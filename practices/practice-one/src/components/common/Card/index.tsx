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
      imageMedium = 'https://picsum.photos/400/400',
      imageSmall = 'https://picsum.photos/200/200',
    } = book;

    return (
      <div onClick={onClick}>
        <figure className="card-container">
          <div className="card-container-img">
            <picture>
              <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
              <img
                className="img-item"
                src={imageSmall}
                width={width}
                height={height}
                alt={title}
              />
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
  }
);
