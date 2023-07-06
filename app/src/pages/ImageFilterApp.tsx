import { ImageEditor } from '@components/ImageEditor';
import { ImageFilterBg } from '@components/ImageFilterBg';
import { ImageUpload } from '@components/ImageUpload';
import { useImageStore } from '@store/imageStore';

export const ImageFilterApp = () => {
  const file = useImageStore((state) => state.file);

  return (
    <>
      <div className="font-['Quicksand'] max-w-xl bg-white p-8 shadow-2xl rounded absolute m-auto left-0 right-0 mb-32 mt-32">
        <h1 className="text-center text-3xl text-indigo-700">Vue Filters</h1>
        {file ? <ImageEditor /> : <ImageUpload />}
      </div>
      <ImageFilterBg />
    </>
  );
};
