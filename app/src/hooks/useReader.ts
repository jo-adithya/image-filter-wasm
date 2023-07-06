export const useReader = (file: File | null, onLoad?: EventListener) => {
  const reader = new FileReader();

  if (file) reader.readAsDataURL(file);
  if (onLoad) reader.addEventListener('load', onLoad);

  return { reader };
};
