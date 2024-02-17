import MongoImage from '@/lib/components/images/MongoImage';

// This page allow us to expose a mongoDB stored image trough a route
const RenderMongoImage = ({ params }: { params: { imageId: string } }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      {/* @ts-ignore */}
      <MongoImage
        imageId={params.imageId}
        alt="mongo rendered image"
        className="max-w-full max-h-full w-auto h-auto"
      />
    </div>
  );


}

export default RenderMongoImage;
