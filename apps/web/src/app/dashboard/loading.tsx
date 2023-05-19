import { Skeleton } from 'ui';
const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center gap-10">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-[400px]" />
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-[400px]" />
        <Skeleton className="h-10 w-[400px]" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
          <Skeleton className="h-10 w-[500px]" />
        </div>
      </div>
    </div>
  );
};
export default Loading;
