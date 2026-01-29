import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailLoading() {
  return (
    <div className="w-full">
      <Skeleton className="h-[50vh] w-full" />
      <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 lg:w-1/4 -mt-32">
          <Skeleton className="aspect-[2/3] w-full rounded-lg" />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
