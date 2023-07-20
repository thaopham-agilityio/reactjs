import { IBook } from '@interface/book';
import { memo } from 'react';

// Define the props for the Modal Detail component
interface BookDetailProps {
  width: string;
  height: string;
  book: Partial<IBook>;
}
/**
 * Primary UI component for user interaction
 */
export const BookDetail = memo(
  ({
    width,
    height,
    book: { title, description, author, published, publishers, imageSmall, image },
  }: BookDetailProps): JSX.Element => {
    return (
      <div className="modal-content">
        <figure className="modal-container-content">
          <div className="modal-container-img">
            {/* <img className="img-item" src={image} width={width} height={height} alt={title} /> */}
            <picture>
              <source srcSet={`${image} 2x, ${imageSmall}`} media="(min-width: 768px)" />
              <img
                srcSet={`${image} 2x`}
                src={imageSmall}
                width={width}
                height={height}
                alt={title}
              />
            </picture>
          </div>
          <figcaption className="modal-container-text">
            <p className="modal-desc">{description}</p>
            <p className="modal-author">
              <span className="modal-container-text-title">Author:</span>
              <span className="modal-container-text-content">{author}</span>
            </p>
            <p className="modal-published">
              <span className="modal-container-text-title">Published:</span>
              <span className="modal-container-text-content">{published}</span>
            </p>
            <p className="modal-publishers">
              <span className="modal-container-text-title">Publishers:</span>
              <span className="modal-container-text-content">{publishers}</span>
            </p>
          </figcaption>
        </figure>
      </div>
    );
  }
);
