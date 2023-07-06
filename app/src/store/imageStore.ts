import { create } from 'zustand';
import { Filter } from 'types';

type ImageState = {
  file: File | null;
  filter: Filter | null;
};

type ImageAction = {
  updateFilter: (filter: Filter) => void;
  upload: (event: React.DragEvent) => void;
};

export const useImageStore = create<ImageState & ImageAction>((set, get) => ({
  file: null,
  filter: null,

  updateFilter: (filter: Filter) => {
    set(() => ({ filter: get().filter === filter ? null : filter }));
  },

  upload: (event: React.DragEvent) => {
    if (!event.dataTransfer) return;
    const tempFile = event.dataTransfer.files[0];

    if (!tempFile.type.match('image.*')) return;
    set(() => ({ file: tempFile }));
  },
}));
