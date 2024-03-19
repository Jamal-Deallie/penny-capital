import * as React from 'react';

import { cn } from '@/utils/cn';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'w-full h-full relative bg-zinc-500 p-4 opacity-90 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-stone-300/20 before:to-transparent overflow-hidden',
        className
      )}></div>
  );
};

export default Skeleton;
