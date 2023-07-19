import { memo } from 'react';

// Define the props for the Image component
interface ImageProps {
  text?: string;
  imageSrc: string;
  width: string;
  height: string;
  altText: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = memo(({ text, imageSrc, altText, width, height }: ImageProps): JSX.Element => {
  return (
    <div className="img-container">
      <img className="img-item" src={imageSrc} width={width} height={height} alt={altText} />
      {!!text && <h1 className="text">{text}</h1>}
    </div>
  );
});
