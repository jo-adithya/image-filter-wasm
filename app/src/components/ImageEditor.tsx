import { shallow } from 'zustand/shallow';

import { useCanvas } from '@hooks/useCanvas';
import { useReader } from '@hooks/useReader';
import { useImageStore } from '@store/imageStore';

import { FILTERS, Filter, CanvasSize } from 'types';

export const ImageEditor = () => {
  const { file, selectedFilter, updateFilter } = useImageStore(
    (state) => ({
      file: state.file,
      selectedFilter: state.filter,
      updateFilter: state.updateFilter,
    }),
    shallow
  );

  const { canvasElementRef, loadImage, drawOriginalImage } = useCanvas();

  const { reader } = useReader(file, () => {
    if (!reader.result) return;
    const dataURL = reader.result.toString();
    loadImage(dataURL);
  });

  useImageStore.subscribe(() => {
    drawOriginalImage();
  })

  return (
    <div className="my-8">
      <canvas ref={canvasElementRef} width={CanvasSize.width} height={CanvasSize.height}></canvas>
      <div className="text-white text-xl mt-4">
        <div className="flex justify-center gap-4">
          {FILTERS.map((filter, index) => (
            <button
              key={index}
              onClick={() => updateFilter(filter as Filter)}
              type="button"
              className={`${
                selectedFilter === filter ? 'bg-green-600' : 'bg-pink-600'
              } py-4 w-full`}
            >
              {filter}
            </button>
          ))}
        </div>
        <a className="bg-indigo-700 py-4 block w-full mt-2 text-center">
          Download
        </a>
      </div>
    </div>
  );
};
