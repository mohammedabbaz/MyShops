import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <section className="Section">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </section>
  );
}

export default loading;

function SkeletonItem() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-square w-full"></Skeleton>
      {/* product details */}
      <div className="flex gap-3 mt-1">
      <Skeleton className="h-2 w-3/4 "/>
      <Skeleton className="h-2 w-1/4 "/>
      
      </div>
    </div>
  );
}
