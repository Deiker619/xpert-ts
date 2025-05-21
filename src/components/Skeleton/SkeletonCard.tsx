import { Skeleton } from "../ui/skeleton"

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-2 mr-3 ml-3 md:mr-6 md:ml-6 mb-6 rounded-2xl border-gray-400 overflow-hidden p-2">
      <Skeleton className="h-[450px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

