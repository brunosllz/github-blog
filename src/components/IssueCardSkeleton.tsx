import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function IssueCardSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8 mb-14">
      <Skeleton height={264} className="rounded-[10px]" />
      <Skeleton height={264} className="rounded-[10px]" />
    </div>
  )
}
