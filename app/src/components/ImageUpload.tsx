import { useImageStore } from '@store/imageStore';

export const ImageUpload = () => {
  const upload = useImageStore((state) => state.upload);

  const handleDrag = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleUpload = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    upload(event);
  }

  return (
    <div
      onDrag={handleDrag}
      onDragStart={handleDrag}
      onDragEnd={handleDrag}
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleUpload}
      className="text-center my-8 py-32 text-slate-700 italic rounded border-4 border-double border-slate-700/25"
    >
      Drag and drop image.
    </div>
  );
};
