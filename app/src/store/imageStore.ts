import { create } from 'zustand';

type ImageState = {
  file: File | null;
  filter: string;
};

type ImageAction = {
  upload: (event: React.DragEvent) => void;
};

export const useImageStore = create<ImageState & ImageAction>((set) => ({
  file: null,
  filter: '',
  upload: (event: React.DragEvent) => {
    console.log(event);
    if (!event.dataTransfer) return;
    const tempFile = event.dataTransfer.files[0];

    if (!tempFile.type.match("image.*")) return;
    set(() => ({ file: tempFile }));
  },
}));
