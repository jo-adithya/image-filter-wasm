import { useRef } from 'react';

import { CanvasSize } from 'types';

export const useCanvas = () => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  let canvasContext: CanvasRenderingContext2D | null = null;
  const imageElement = new Image();

  const calculateAspectRatio = (
    width: number,
    height: number,
    maxWidth: number,
    maxHeight: number
  ) => {
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    return { width: width * ratio, height: height * ratio };
  };

  const drawOriginalImage = () => {
    if (!canvasContext || !canvasElementRef.current) return;

    const { width: imageWidth, height: imageHeight } = calculateAspectRatio(
      imageElement.naturalWidth,
      imageElement.naturalHeight,
      CanvasSize.width,
      CanvasSize.height
    );

    canvasElementRef.current.width = imageWidth;
    canvasElementRef.current.height = imageHeight;

    canvasContext.drawImage(imageElement, 0, 0, imageWidth, imageHeight);
  };

  const loadImage = (url: string) => {
    if (!canvasElementRef.current) return;
    canvasContext = canvasElementRef.current.getContext('2d');
    imageElement.addEventListener('load', drawOriginalImage);
    imageElement.src = url;
  };

  return {
    canvasElementRef,
    loadImage,
    drawOriginalImage,
  };
};
