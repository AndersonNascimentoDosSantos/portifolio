export const Skeleton = () => {
  return (
    <div className="shadow-lg rounded-lg p-4  w-full flex">
      <div className="animate-pulse flex space-x-4 w-full items-center">
        <div className="flex-[1] space-y-6 py-1 w-full ">
          <div className="h-2 bg-primary rounded "></div>
          <div className="h-2 bg-primary rounded "></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-primary rounded col-span-2"></div>
              <div className="h-2 bg-primary rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-primary rounded"></div>
          </div>
        </div>
        <div className="  rounded-full bg-primary relative h-[350px] w-[350px]"></div>
      </div>
    </div>
  );
};

export const SquareSkeleton = () => {
  return (
    <div className="shadow-lg rounded-lg p-4  w-full flex">
      <div className="animate-pulse flex space-x-4 w-full items-center">
        <div className="flex-[1] space-y-6 py-1 w-full "></div>
        <div className="  rounded-lg bg-primary relative h-[150px] w-[250px]"></div>
      </div>
    </div>
  );
};
