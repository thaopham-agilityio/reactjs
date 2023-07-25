import { memo } from 'react';

// Define the props for the Image component
interface ImageProps {
  text?: string;
  imageSrc: string | undefined;
  width: number;
  altText: string | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const Image = memo(({ text, imageSrc, altText, width }: ImageProps): JSX.Element => {
  return (
    <div className="img-container">
      <img className="img-item" src={imageSrc} width={width} alt={altText} />
      {!!text && <h1 className="text">{text}</h1>}
    </div>
  );
});
