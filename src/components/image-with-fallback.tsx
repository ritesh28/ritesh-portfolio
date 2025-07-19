import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};
