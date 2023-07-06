import { ImageFilterBg } from '@components/ImageFilterBg';
import { ImageUpload } from '@components/ImageUpload';

export const ImageFilterApp = () => {
  return (
    <>
      <div className="font-['Quicksand'] max-w-xl bg-white p-8 shadow-2xl rounded absolute m-auto left-0 right-0 mb-32 mt-32">
        <h1 className="text-center text-3xl text-indigo-700">Vue Filters</h1>
        <ImageUpload />
        <div className="my-8">
          <canvas width="448" height="448"></canvas>
          <div className="text-white text-xl mt-4">
            <div className="flex justify-center gap-4">
              <button type="button" className="bg-pink-600 py-4 w-full">
                Filter
              </button>
              <button type="button" className="bg-pink-600 py-4 w-full">
                Filter
              </button>
              <button type="button" className="bg-pink-600 py-4 w-full">
                Filter
              </button>
            </div>
            <a className="bg-indigo-700 py-4 block w-full mt-2 text-center">
              Download
            </a>
          </div>
        </div>
      </div>
      <ImageFilterBg />
    </>
  );
};
