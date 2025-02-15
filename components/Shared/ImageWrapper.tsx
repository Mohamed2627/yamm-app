"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react'

interface IImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

const ImageWrapper = ({ src, alt, className, width, height }: IImageWrapperProps) => {
  const [fallback, setFallback] = useState(false);

  // Determine which source to use
  const imageSrc = useMemo(() => {
    if (fallback || !src) {
      return "/image-placeholder.png";
    }
    return src;
  }, [src, fallback]);

  // Error handler to switch to fallback
  const handleError = () => {
    setFallback(true);
  };

  useEffect(() => {
    setFallback(false);
  }, [src])

  return (
    <Image
      src={imageSrc}
      alt={alt || "Profile"}
      width={width}
      height={height}
      onError={handleError}
      objectFit='contain'
      className={cn(
        className
      )}
    />
  );
}

export default ImageWrapper