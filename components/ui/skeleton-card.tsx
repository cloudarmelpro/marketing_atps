'use client';

import { cn } from '@/lib/utils';

interface SkeletonCardProps {
  className?: string;
}

export function BlogCardSkeleton({ className }: SkeletonCardProps) {
  return (
    <div className={cn('flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]', className)}>
      <div className="relative h-60 w-full overflow-hidden bg-gray-200 animate-pulse" />
      <div className="flex flex-col grow p-6 gap-4">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="mt-auto pt-4 flex items-center gap-3 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function NewsCardSkeleton({ className }: SkeletonCardProps) {
  return (
    <div className={cn('flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]', className)}>
      <div className="relative h-60 w-full overflow-hidden bg-gray-200 animate-pulse" />
      <div className="flex flex-col grow p-6 gap-4">
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="mt-auto pt-4 flex items-center gap-3 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function CategoryFilterSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse" />
      ))}
    </div>
  );
}

export function BlogListSkeleton() {
  return (
    <div className="w-full flex flex-col gap-12">
      <CategoryFilterSkeleton />
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function NewsListSkeleton() {
  return (
    <div className="w-full flex flex-col gap-12">
      <CategoryFilterSkeleton />
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <aside className="w-full lg:w-[320px] flex flex-col gap-8">
      <div>
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
          <div className="space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
      <div>
        <div className="h-3 w-12 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
      <div>
        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-3 items-center">
              <div className="flex-1 space-y-1">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-14 h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
